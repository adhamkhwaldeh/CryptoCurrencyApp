import React, { useContext, useState } from "react";

import {
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
  View,
  Image,
} from "react-native";
import { Text } from "react-native";
import { Appbar, Button, Switch, useTheme } from "react-native-paper";
import { LocalizationContext } from "../localization/LocalizationContext";
import styles from "../styles/style";
import DimensHelper from "../helpers/DimensHelper";
import RoutingHelper from "../helpers/RoutingHelper";

export default function StatusUpdatesDetails({ navigation, route }) {
  const { translations } = useContext(LocalizationContext);

  const { model } = route.params;

  return (
    // <SafeAreaView>
    <View>
      <Appbar>
        <Appbar.BackAction
          onPress={() => {
            navigation.pop();
          }}
        />
        <Appbar.Content title={translations.details} />
      </Appbar>

      <View style={{ flexDirection: "column" }}>
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.push(RoutingHelper.ImageViewerComponent_Tag, {
                attachmentModel: {
                  attachmentPath: model.project.image.large,
                },
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
              style={{
                flexDirection: "row",
                marginHorizontal: DimensHelper.marginSmSm,
                marginVertical: DimensHelper.marginMd,
              }}
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
            </View>

            <View
              style={{
                flexDirection: "row",
                marginHorizontal: DimensHelper.marginSmSm,
                marginVertical: DimensHelper.marginMd,
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

            <View
              style={{
                flexDirection: "row",
                marginHorizontal: DimensHelper.marginSmSm,
                marginVertical: DimensHelper.marginMd,
                display: model.user_title == "" ? "none" : "flex",
              }}
            >
              <Text style={[styles.mediumText]}>{translations.category}</Text>
              <Text
                style={[
                  styles.baseText,
                  { marginHorizontal: DimensHelper.marginMd },
                ]}
              >
                {model.category}
              </Text>
            </View>
          </View>
        </View>
        <ScrollView>
          <View
            style={{
              flexDirection: "column",
              margin: DimensHelper.marginXMd,
            }}
          >
            <Text style={[styles.mediumText]}>{translations.description}</Text>
            <Text
              style={{
                //   marginHorizontal: DimensHelper.marginSmSm,
                justifyContent: "center",
                textAlign: "justify",
                paddingHorizontal: DimensHelper.paddingSmSm,
              }}
            >
              {model.description}
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
    // </SafeAreaView>
  );
}
