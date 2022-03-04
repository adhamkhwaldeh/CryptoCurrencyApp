import React, { createContext, useState } from "react";
// import i18n from 'i18n-js';
import { StatusBar, View } from "react-native";
// import {I18nManager} from 'react-native';
// import * as RNLocalize from 'react-native-localize';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { theme } from "../styles/theme";
import {
  SafeAreaProvider,
  initialWindowMetrics,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import DimensHelper from "../helpers/DimensHelper";

export const StatusBarContext = createContext({
  setStatusBarAll: (color, barStyle, isHidden) => {},
  setStatusBar: (color, barStyle) => {},
  setStatusBarHidden: (isHidden) => {},
});

const CustomStatusBar = ({
  backgroundColor,
  barStyle,
  isHidden,
  //add more props StatusBar
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ height: insets.top, backgroundColor }}>
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
        hidden={isHidden}
      />
    </View>
  );
};

const BodyView = ({ children }) => {
  // const insets = useSafeAreaInsets();
  return (
    // <View style={{flex: 1, paddingBottom: Math.max(insets.bottom, 16)}}>
    <View style={{ flex: 1 }}>{children}</View>
  );
};

export const StatusBarProvider: React.FC<any> = ({ children }) => {
  const [statusBarColor, setStatusBarColor] = useState(theme.colors.primary);

  const [statusBarStyle, setStatusBarStyle] = useState("dark-content");

  const [statusBarHidden, setStatusBarHidden] = useState(false);

  const setStatusBar = (color, barStyle) => {
    //,isHidden = false
    setStatusBarColor(color);
    setStatusBarStyle(barStyle);
    // setStatusBarHidden(false);
  };

  const setStatusBarHiddenStatus = (isHidden) => {
    setStatusBarHidden(isHidden);
  };

  const setStatusBarAll = (color, barStyle, isHidden) => {
    setStatusBarColor(color);
    setStatusBarStyle(barStyle);
    setStatusBarHidden(isHidden);
  };

  return (
    <StatusBarContext.Provider
      value={{
        setStatusBar: setStatusBar,
        setStatusBarHidden: setStatusBarHiddenStatus,
        setStatusBarAll: setStatusBarAll,
      }}
    >
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        {/* style={{paddingBottom: DimensHelper.paddingLg}} */}
        <CustomStatusBar
          backgroundColor={statusBarColor}
          barStyle={statusBarStyle}
          isHidden={statusBarHidden}
        />
        {/* <SafeAreaView edges={['right', 'bottom', 'left']}> */}

        {/* <BodyView children={children} /> */}

        <View style={{ flex: 1 }}>{children}</View>

        {/* </SafeAreaView> */}
      </SafeAreaProvider>
    </StatusBarContext.Provider>
  );
};
