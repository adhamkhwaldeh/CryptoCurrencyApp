import React, { ReactNode, useContext } from "react";
import { View } from "react-native";
import BaseState from "../../core/states/BaseState";
import ProgressDialog from "react-native-progress-dialog";
import { Snackbar } from "react-native-paper";
import { LocalizationContext } from "../../localization/LocalizationContext";
import { useDispatch } from "react-redux";
import { CLEAR_STATE, SEPARATOR } from "../../core/types/BaseTypes";
import DimensHelper from "../../helpers/DimensHelper";

type Props = {
  modelPrefix: String;
  state: BaseState<any>;
  children: ReactNode;
};

export default function BaseStateComponent({
  modelPrefix,
  state,
  children,
}: Props) {
  const dispatch = useDispatch();

  const { translations } = useContext(LocalizationContext);

  return (
    <View
      style={{
        // position: 'absolute',
        alignContent: "center",
        alignItems: "center",
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
      }}
    >
      <View style={{ width: "100%", height: "100%" }}>{children}</View>

      <ProgressDialog visible={state.isLoading} />

      <Snackbar
        visible={
          !(
            state.internalServerError === undefined ||
            state.internalServerError == null ||
            state.internalServerError == "undefined"
          )
        }
        duration={1000}
        style={{
          zIndex: -100,
          backgroundColor: "red",
          margin: 0,
          borderRadius: 0,
          padding: DimensHelper.paddingMd,
        }}
        onDismiss={() =>
          dispatch({ type: modelPrefix + SEPARATOR + CLEAR_STATE })
        }
        action={{ label: translations.close, color: "white" }}
      >
        {state.internalServerError}
      </Snackbar>

      <Snackbar
        visible={state.noInternetConnection}
        duration={1000}
        onDismiss={() =>
          dispatch({ type: modelPrefix + SEPARATOR + CLEAR_STATE })
        }
        style={{
          zIndex: -100,
          backgroundColor: "red",
          margin: 0,
          borderRadius: 0,
          padding: DimensHelper.paddingMd,
        }}
        action={{ label: translations.close, color: "white" }}
      >
        {translations.pleaseCheckYourInternetConnection}
      </Snackbar>

      <Snackbar
        visible={
          !(
            state.notAuthorized === undefined ||
            state.notAuthorized == null ||
            state.notAuthorized == "undefined"
          )
        }
        style={{
          zIndex: -100,
          backgroundColor: "red",
          margin: 0,
          borderRadius: 0,
          padding: DimensHelper.paddingMd,
        }}
        onDismiss={() =>
          dispatch({ type: modelPrefix + SEPARATOR + CLEAR_STATE })
        }
        action={{ label: translations.close, color: "white" }}
      >
        {state.notAuthorized}
      </Snackbar>
    </View>
  );
}
