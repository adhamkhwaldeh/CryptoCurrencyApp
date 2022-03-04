import React, { useContext, useEffect, useState } from "react";
import { View, Image, Dimensions, FlatList } from "react-native";
import {
  ActivityIndicator,
  Appbar,
  Badge,
  Button,
  Card,
  Dialog,
  Portal,
  Text,
} from "react-native-paper";
import { useDispatch } from "react-redux";
import { FlatList as PagingFlatList } from "react-native-bidirectional-infinite-scroll";
import { RFValue } from "react-native-responsive-fontsize";
import RoutingHelper from "../helpers/RoutingHelper";
import { LocalizationContext } from "../localization/LocalizationContext";
import styles from "../styles/style";
import DimensHelper from "../helpers/DimensHelper";
import { StatusBarContext } from "../status_bar/StatusBarContext";
import { useTypedSelector } from "../core/Store";
import DateHelpers from "../helpers/DateHelpers";
import LoggingHelper from "../helpers/LoggingHelper";
import { theme } from "../styles/theme";
import BaseStateComponent from "./custom/BaseStateComponent";
import { STATUS_UPDATES_PREFIX } from "../core/types/StatusUpdatesTypes";
import { searchTrend } from "../core/actions/SearchTrend";
import { SEARCH_TREND_PREFIX } from "../core/types/SearchTrendTypes";
import SearchTrendListItem from "../list_items/SearchTrendListItem";
import StatusUpdatesListItem from "../list_items/StatusUpdatesListItem";
import { statusUpdates } from "../core/actions/StatusUpdates";
import { StatusUpdatesPostModel } from "../data/postModels/StatusUpdatesPostModel";
import FlatListEmptyState from "./custom/FlatListEmptyState";
import { StatusUpdatesModel } from "../data/models/StatusUpdatesModel";
import PagingOptions from "../core/constants/PagingOptions";

export default function Home({ navigation }) {
  const { translations } = useContext(LocalizationContext);

  const { setStatusBarAll } = useContext(StatusBarContext);

  const dispatch = useDispatch();

  const [showRefreshDialog, setShowRefreshDialog] = useState<boolean>(false);

  const [refreshLists, setRefreshLists] = useState<boolean>(false);

  const [currentPage, setCurrentPage] = useState<number>(
    PagingOptions.InitialPage
  );

  const [statusUpdatesList, setStatusUpdatesList] = useState<
    Array<StatusUpdatesModel>
  >([]);

  const statusUpdatesSelector = useTypedSelector(
    (state) => state.statusUpdates
  );

  const searchTrendSelector = useTypedSelector((state) => state.searchTrend);

  useEffect(() => {
    setTimeout(() => {
      setStatusBarAll(theme.colors.primary, "light-content", false);
      //   setStatusBarAll(theme.colors.white, 'dark-content', false);
    }, 500);
  }, []);

  useEffect(() => {
    dispatch(searchTrend());
  }, [refreshLists]);

  useEffect(() => {
    dispatch(
      statusUpdates(
        new StatusUpdatesPostModel(
          null,
          null,
          PagingOptions.PageSize,
          currentPage
        )
      )
    );
  }, [refreshLists]);

  useEffect(() => {
    if (currentPage == 0) {
      setStatusUpdatesList((m) => {
        return statusUpdatesSelector.data;
      });
    } else {
      setStatusUpdatesList((m) => {
        return m.concat(statusUpdatesSelector.data);
      });
    }

    setCurrentPage(currentPage + 1);
  }, [statusUpdatesSelector.data]);

  const loadMoreOlderMessages = async () => {
    dispatch(
      statusUpdates(
        new StatusUpdatesPostModel(
          null,
          null,
          PagingOptions.PageSize,
          currentPage
        )
      )
    );
    await sleep(2000);
  };

  const loadMoreRecentMessages = async () => {
    setCurrentPage(0);
    dispatch(
      statusUpdates(
        new StatusUpdatesPostModel(
          null,
          null,
          PagingOptions.PageSize,
          PagingOptions.InitialPage
        )
      )
    );
    await sleep(2000);
  };

  const refreshMessages = () => {
    setCurrentPage(0);
    dispatch(
      statusUpdates(
        new StatusUpdatesPostModel(
          null,
          null,
          PagingOptions.PageSize,
          PagingOptions.InitialPage
        )
      )
    );
  };

  return (
    <View style={{ flexGrow: 1, height: "100%" }}>
      <View
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "white",
          //   transform: [{scaleY: -1}],
          //   height: Dimensions.get('window').height / 2,
          // height: (Dimensions.get('window').height * 2) / 3,
          //   width: Dimensions.get('window').width,
          height: "100%",
          //   flex: 1,
          //   alignContent: 'flex-end',
          //   alignItems: 'flex-end',
          //   alignSelf: 'flex-end',
          //   justifyContent:"flex-end",
        }}
      >
        <View
          style={{
            height: Dimensions.get("window").height / 5,
            backgroundColor: theme.colors.primary,
            padding: 0,
            margin: 0,
          }}
        />
      </View>

      <Appbar
        dark={true}
        style={{
          backgroundColor: "transparent",
          shadowColor: "transparent",
        }}
      >
        <Appbar.Content
          style={{ margin: 0, padding: 0 }}
          title={translations.appName}
          subtitle={"Adham khwaldeh"}
        ></Appbar.Content>

        <Appbar.Action
          icon="refresh"
          onPress={() => {
            setShowRefreshDialog(true);
          }}
        />

        <Appbar.Action
          icon="cog-outline"
          onPress={() => {
            navigation.navigate(RoutingHelper.Settings_Tag);
          }}
        />
      </Appbar>

      <View
        style={{
          flexGrow: 1,
          flex: 1,
          height: "100%",
          // backgroundColor: 'white',
        }}
      >
        <View
          style={{
            // flex: 1.5,
            // flex: 3.45,
            height: Dimensions.get("window").height / 5,
            borderBottomLeftRadius: DimensHelper.radiusXXLg,
            borderBottomRightRadius: DimensHelper.radiusXXLg,
            marginVertical: DimensHelper.marginMd,
            paddingVertical: DimensHelper.paddingMd,
            // paddingBottom: DimensHelper.paddingSm,
          }}
        >
          <BaseStateComponent
            modelPrefix={SEARCH_TREND_PREFIX}
            state={searchTrendSelector}
          >
            <FlatList
              data={searchTrendSelector.data}
              renderItem={({ item, index }) => {
                return (
                  <SearchTrendListItem navigation={navigation} model={item} />
                );
              }}
              keyExtractor={(item, index) => index.toString()}
              horizontal={true} // row instead of column
              // Add the 4 properties below for snapping
              snapToAlignment={"start"}
              // snapToInterval={this.IMAGE_WIDTH + 10} // Adjust to your content width
              snapToInterval={200}
              decelerationRate={"fast"}
              pagingEnabled
              showsHorizontalScrollIndicator={false}
            />
          </BaseStateComponent>
        </View>

        <Text style={[styles.titleText, { fontWeight: "600" }]}>
          {translations.latestUpdates}
        </Text>

        <FlatList
          data={statusUpdatesList}
          renderItem={({ item, index }) => {
            return (
              <StatusUpdatesListItem navigation={navigation} model={item} />
            );
          }}
          keyExtractor={(item, index) => item.category + index.toString()}
          horizontal={false} // row instead of column
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 1,
                width: "100%",
                backgroundColor: "rgba(0,0,0,0.1)",
              }}
            />
          )}
          onEndReached={loadMoreOlderMessages}
          onRefresh={refreshMessages}
          refreshing={currentPage == PagingOptions.InitialPage}
          ListFooterComponent={() => (
            <ActivityIndicator animating={true} color={"black"} />
          )}
          contentContainerStyle={styles.contentContainerStyle}
          ListEmptyComponent={
            <FlatListEmptyState message={translations.noUpdatesFound} />
          }
          // activityIndicatorColor={"black"}
          // onStartReachedThreshold={PagingOptions.PageSize} // optional
          // onEndReachedThreshold={PagingOptions.PageSize} // optional
          // onStartReachedThreshold={PagingOptions.PageSize} // optional
          onEndReachedThreshold={0.5} // optional
          pagingEnabled
        />

        {/* <FlatList
          data={statusUpdatesList}
          renderItem={({ item, index }) => {
            return (
              <StatusUpdatesListItem navigation={navigation} model={item} />
            );
          }}
          keyExtractor={(item, index) => item.category + index.toString()}
          // horizontal={false} // row instead of column
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 1,
                width: "100%",
                backgroundColor: "rgba(0,0,0,0.1)",
              }}
            />
          )}
          // onStartReached={loadMoreRecentMessages}
          // onStartReached={async () => {}}
          onEndReached={loadMoreOlderMessages}
          onRefresh={refreshMessages}
          refreshing={currentPage == PagingOptions.InitialPage}
          // contentContainerStyle={styles.contentContainerStyle}
          // ListEmptyComponent={
          //   <FlatListEmptyState message={translations.noUpdatesFound} />
          // }
          // showDefaultLoadingIndicators={true}
          // FooterLoadingIndicator={() => (
          //   <ActivityIndicator animating={true} color={"black"} />
          // )}
          // HeaderLoadingIndicator={() => (
          //   <ActivityIndicator animating={true} color={"black"} />
          // )}

          // activityIndicatorColor={"black"}
          // onStartReachedThreshold={PagingOptions.PageSize} // optional
          // onEndReachedThreshold={PagingOptions.PageSize} // optional
          // onStartReachedThreshold={PagingOptions.PageSize} // optional
          onEndReachedThreshold={0} // optional
          pagingEnabled
        /> */}
      </View>

      <View>
        <Portal>
          <Dialog
            visible={showRefreshDialog}
            onDismiss={() => setShowRefreshDialog(false)}
          >
            <Dialog.Title>{translations.refresh}</Dialog.Title>
            <Dialog.Content>
              <Text>{translations.doYouWantToRefreshTheScreen}</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button
                uppercase={false}
                onPress={() => setShowRefreshDialog(false)}
              >
                {translations.cancel}
              </Button>
              <Button
                uppercase={false}
                onPress={() => {
                  setShowRefreshDialog(false);
                  setRefreshLists(true);
                }}
              >
                {translations.refresh}
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </View>
  );
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
