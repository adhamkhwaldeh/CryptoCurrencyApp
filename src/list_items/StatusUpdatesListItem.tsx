import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import {
  Appbar,
  Badge,
  Button,
  Card,
  Dialog,
  Portal,
  Text,
} from "react-native-paper";
import { StatusUpdatesModel } from "../data/models/StatusUpdatesModel";
import DimensHelper from "../helpers/DimensHelper";
import RoutingHelper from "../helpers/RoutingHelper";
import { LocalizationContext } from "../localization/LocalizationContext";
import styles from "../styles/style";
import { theme } from "../styles/theme";

type Props = {
  model: StatusUpdatesModel;
  navigation;
};

export default function StatusUpdatesListItem({ model, navigation }: Props) {
  const { translations } = useContext(LocalizationContext);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.push(RoutingHelper.STATUS_UPDATES_STACK, {
          screen: RoutingHelper.Status_updates_details_Tag,
          params: {
            model: model,
          },
        });
      }}
    >
      <View
        style={[
          {
            // width: '100%',
            flex: 1,
            //   justifyContent: "center",
            //   alignContent: "center",
            //   alignSelf: "center",
            // alignItems: "center",
            //   alignContent: 'center',
            flexDirection: "column",
            //   alignSelf: 'center',
            marginHorizontal: DimensHelper.marginSm,
            marginVertical: DimensHelper.marginMd,
          },
        ]}
      >
        <View style={{ flexDirection: "row" }}>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.push(RoutingHelper.ImageViewerComponent_Tag, {
                attachmentModel: { attachmentPath: model.project.image.large },
              });
            }}
          >
            <Image
              resizeMode="cover"
              resizeMethod="scale"
              style={{
                width: 100,
                height: 100,
                padding: DimensHelper.paddingMd,
                margin: DimensHelper.marginXSm,
                borderRadius: DimensHelper.radiusLg,
                alignSelf: "center",
              }}
              source={{ uri: model.project.image.large }}
            />
          </TouchableWithoutFeedback>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              marginHorizontal: DimensHelper.marginSmSm,
            }}
          >
            <View
              style={{ flexDirection: "row", margin: DimensHelper.marginSmSm }}
            >
              <Text style={[styles.mediumText, { alignSelf: "center" }]}>
                {translations.name}
              </Text>
              <Text
                style={[
                  styles.baseText,
                  {
                    marginHorizontal: DimensHelper.marginMd,
                    alignSelf: "center",
                  },
                ]}
              >
                {model.project.name}
              </Text>
              <View
                style={[
                  styles.tagContainer,
                  { alignSelf: "flex-end", alignContent: "flex-end", flex: 1 },
                ]}
              >
                <View style={styles.tagContent}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{ color: "white", fontSize: 18 }}
                  >
                    {model.category}
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                margin: DimensHelper.marginSmSm,
                display: model.user_title == "" ? "none" : "flex",
              }}
            >
              <Text style={[styles.mediumText]}>{translations.user_title}</Text>
              <Text
                style={[
                  styles.baseText,
                  { marginHorizontal: DimensHelper.marginMd },
                ]}
              >
                {model.user_title}
              </Text>
            </View>

            <Text style={[styles.mediumText]}>{translations.description}</Text>
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={{
                //   marginHorizontal: DimensHelper.marginSmSm,
                paddingHorizontal: DimensHelper.paddingSmSm,
              }}
            >
              {model.description}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
