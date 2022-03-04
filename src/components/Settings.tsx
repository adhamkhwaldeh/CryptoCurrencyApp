import React, { useContext, useState } from "react";

import { SafeAreaView, View } from "react-native";
import { Text } from "react-native";
import { Appbar, Button, Switch, useTheme } from "react-native-paper";
import RNRestart from "react-native-restart";
import { LocalizationContext } from "../localization/LocalizationContext";
import styles from "../styles/style";
import DimensHelper from "../helpers/DimensHelper";
import LoggingHelper from "../helpers/LoggingHelper";

export default function Settings({ navigation }) {
  const { translations, appLanguage, setAppLanguage } =
    useContext(LocalizationContext);

  const handleSetLanguage = async (language) => {
    setAppLanguage(language);
  };

  const theme = useTheme();

  const [themeStatus, setThemeStatus] = useState<boolean>(theme.dark);

  const forceReload = () => {
    setTimeout(() => {
      // Immediately reload the React Native Bundle
      RNRestart.Restart();
    }, 1000);
  };

  return (
    <SafeAreaView>
      <View style={{ flexGrow: 1, justifyContent: "center" }}>
        <Appbar>
          <Appbar.BackAction
            onPress={() => {
              navigation.pop();
            }}
          />
          <Appbar.Content title={translations.settings} />
        </Appbar>

        <View>
          <Text style={{ margin: DimensHelper.marginMd }}>
            {translations.profileDetails}
          </Text>

          <Button
            mode="contained"
            style={styles.normalButtonMargin}
            uppercase={false}
            onPress={() => {
              if (appLanguage == "en") {
                LoggingHelper.log(
                  "change to arabic " + translations.getLanguage()
                );
                handleSetLanguage("ar");
              } else {
                LoggingHelper.log(
                  "change to english " + translations.getLanguage()
                );
                handleSetLanguage("en");
              }
              navigation.pop();
              // forceReload();
            }}
          >
            <Text style={styles.buttonText}>
              {translations.changeLanguage}{" "}
              {appLanguage == "en" ? "( عربي )" : "( English )"}
            </Text>
          </Button>

          <Switch
            value={themeStatus}
            onValueChange={() => {
              theme.dark = !theme.dark;
              setThemeStatus(!themeStatus);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
