import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect } from "react";
import Home from "../components/Home";
import Pagination4 from "../components/testing/Pagination4";
import RoutingHelper from "../helpers/RoutingHelper";
import * as RNLocalize from "react-native-localize";
import { useTypedDispatch } from "../core/Store";
import LoggingHelper from "../helpers/LoggingHelper";
import Settings from "../components/Settings";
import Splash from "../components/Splash";
import ImageViewerComponent from "../components/ImageViewerComponent";
import StatusUpdatesDetails from "../components/StatusUpdatesDetails";

export default function NavGraph() {
  const NestedStack = createStackNavigator();
  const dispatch = useTypedDispatch();

  const navigationRef = React.useRef<NavigationContainerRef>(null);

  const AppStackScreen = () => {
    return (
      <NestedStack.Navigator
        initialRouteName={RoutingHelper.Splash_Tag}
        // initialRouteName={RoutingHelper.GestureImageManpulate_Tag}
        screenOptions={{ headerShown: false }}
      >
        <NestedStack.Screen
          name={RoutingHelper.Splash_Tag}
          component={Splash}
          options={{ headerShown: false }}
        />
        <NestedStack.Screen
          name={RoutingHelper.Home_Tag}
          component={Home}
          options={{ headerShown: false }}
        />
        <NestedStack.Screen
          name={RoutingHelper.Settings_Tag}
          component={Settings}
          options={{ headerShown: false }}
        />

        <NestedStack.Screen
          name={RoutingHelper.ImageViewerComponent_Tag}
          component={ImageViewerComponent}
          options={{ headerShown: false, gestureEnabled: false }}
        />
      </NestedStack.Navigator>
    );
  };

  const StatusUpdatesScreen = () => {
    return (
      <NestedStack.Navigator
        initialRouteName={RoutingHelper.Status_updates_details_Tag}
        screenOptions={{ headerShown: false }}
      >
        <NestedStack.Screen
          name={RoutingHelper.Status_updates_details_Tag}
          component={StatusUpdatesDetails}
          options={{ headerShown: false, gestureEnabled: false }}
        />
      </NestedStack.Navigator>
    );
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <NestedStack.Navigator
        screenOptions={{
          header: () => null,
        }}
        initialRouteName={RoutingHelper.MAIN_STACK}
      >
        <NestedStack.Screen
          name={RoutingHelper.MAIN_STACK}
          component={AppStackScreen}
        />

        <NestedStack.Screen
          name={RoutingHelper.STATUS_UPDATES_STACK}
          component={StatusUpdatesScreen}
        />
        {/* <NestedStack.Screen name={RoutingHelper.Pagination_Tag} component={Pagination} options={{ headerShown: false }} />
                            <NestedStack.Screen name={RoutingHelper.Pagination2_Tag} component={Pagination2} options={{ headerShown: false }} />
                            <NestedStack.Screen name={RoutingHelper.Pagination3_Tag} component={Pagination3} options={{ headerShown: false }} /> */}

        <NestedStack.Screen
          name={RoutingHelper.Pagination4_Tag}
          component={Pagination4}
          options={{ headerShown: false }}
        />
      </NestedStack.Navigator>
    </NavigationContainer>
  );
}
