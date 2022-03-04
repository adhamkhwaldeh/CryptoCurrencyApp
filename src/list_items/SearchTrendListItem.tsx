import React, { useContext, useEffect } from "react";
import {
  View,
  Image,
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
import { CoinModel } from "../data/models/CoinModel";
import DimensHelper from "../helpers/DimensHelper";
import RoutingHelper from "../helpers/RoutingHelper";
import { LocalizationContext } from "../localization/LocalizationContext";
import styles from "../styles/style";

type Props = {
  model: CoinModel;
  navigation;
};

export default function SearchTrendListItem({ model, navigation }: Props) {
  const { translations } = useContext(LocalizationContext);

  return (
    <Card
      style={{
        width: (2 * Dimensions.get("window").width) / 2.4,
        // width: (2 * Dimensions.get("window").width) / 3,
        // height: '100%',
        // height: Dimensions.get("window").height / 4.5,
        flex: 1,
        marginHorizontal: DimensHelper.marginXMd,
        marginVertical: DimensHelper.marginSmSm,
        elevation: 2,
        alignContent: "center",
        // alignItems: 'center',
        //   backgroundColor: 'red',
        alignSelf: "center",
        borderRadius: DimensHelper.radiusSm,
      }}
    >
      <View
        style={[
          {
            // width: '100%',
            flex: 1,
            justifyContent: "center",
            alignContent: "center",
            alignSelf: "center",
            // alignItems: "center",
            //   alignContent: 'center',
            flexDirection: "row",
            //   alignSelf: 'center',
            marginHorizontal: DimensHelper.marginSm,
            marginVertical: DimensHelper.marginMd,
          },
        ]}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.push(RoutingHelper.ImageViewerComponent_Tag, {
              attachmentModel: { attachmentPath: model.item.large },
            });
          }}
        >
          <Image
            resizeMode="cover"
            resizeMethod="scale"
            style={{
              width: 120,
              height: 120,
              padding: DimensHelper.paddingMd,
              marginHorizontal: DimensHelper.marginMd,
              borderRadius: DimensHelper.radiusLg,
              alignSelf: "center",
            }}
            source={{ uri: model.item.large }}
          />
        </TouchableWithoutFeedback>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            marginHorizontal: DimensHelper.marginSmSm,
          }}
        >
          <Text style={[styles.mediumText]}>{translations.name}</Text>
          <Text>{model.item.name}</Text>
          <Text style={[styles.mediumText]}>
            {translations.market_cap_rank}
          </Text>
          <Text>{model.item.market_cap_rank}</Text>
          <Text style={[styles.mediumText]}>{translations.price_btc}</Text>
          <Text>{model.item.price_btc}</Text>
        </View>
      </View>
    </Card>
  );
}
