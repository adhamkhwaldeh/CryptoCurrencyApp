import React, { useMemo, useState } from "react";
import { Provider } from "react-redux";
import { enableScreens } from "react-native-screens";
import { Provider as PaperProvider, useTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import Store, { persistor } from "./core/Store";
import * as RNLocalize from "react-native-localize";
import { LocalizationProvider } from "./localization/LocalizationContext";
import NavGraph from "./navigation/navGraph";
import { theme } from "./styles/theme";
import { darkTheme } from "./styles/darkTheme";
import { StatusBarProvider } from "./status_bar/StatusBarContext";

import { useEffect } from "react";
import LoggingHelper from "./helpers/LoggingHelper";
import { LogBox, Platform } from "react-native";
import Compose from "./core/providers/Compose";
import { PersistGate } from "redux-persist/integration/react";

// const errorHandler = (e, isFatal) => {
//   console.log('Global error handler', e.toString());
// };

// setJSExceptionHandler(errorHandler, true);

export default function App() {
  enableScreens();
  Icon.loadFont();

  LogBox.ignoreLogs(["Setting a timer"]);

  RNLocalize.addEventListener("change", () => {
    LoggingHelper.log("onChange Event for language");
    // useForceUpdate()
  });

  // Get address from latitude & longitude.
  // Geocode.setApiKey('AIzaSyBzK8sh1txU8H_laQpTfWt6J9M37tZ-iW4');

  const currentTheme = useTheme();

  useEffect(() => {
    LoggingHelper.log("Theme Changed " + currentTheme.dark);
  }, [currentTheme.dark]);

  return (
    // <Compose components={[StatusBarProvider, LocalizationProvider]}>
    <StatusBarProvider>
      <LocalizationProvider>
        <PersistGate loading={null} persistor={persistor}></PersistGate>

        <PaperProvider theme={currentTheme.dark ? darkTheme : theme}>
          <Provider store={Store}>
            <NavGraph />
          </Provider>
        </PaperProvider>
      </LocalizationProvider>
    </StatusBarProvider>
    // </Compose>
  );
}
