import React, { useContext, useEffect, useState } from "react";

import { SafeAreaView, View } from "react-native";
import { Text } from "react-native";
import { Appbar, Button, Switch, useTheme } from "react-native-paper";
import { LocalizationContext } from "../localization/LocalizationContext";
import styles from "../styles/style";
import DimensHelper from "../helpers/DimensHelper";
import RoutingHelper from "../helpers/RoutingHelper";

export default function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(RoutingHelper.MAIN_STACK, {
        screen: RoutingHelper.Home_Tag,
      });
    }, 1000);
  }, []);

  return (
    <SafeAreaView>
      <View style={{ flexGrow: 1, justifyContent: "center" }}></View>
    </SafeAreaView>
  );
}
