import { useFocusEffect } from "@react-navigation/native";
import React from "react";
import { BackHandler, View } from "react-native";
import { Modal } from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import { IconButton } from "react-native-paper";

export default function ImageViewerComponent({ navigation, route }) {
  const { attachmentModel } = route.params;

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.pop();
        return false;
      };
      BackHandler.addEventListener("hardwareBackPress", onBackPress);
      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [])
  );

  return (
    <View>
      <Modal visible={true} transparent={true}>
        <ImageViewer
          imageUrls={[
            {
              url: attachmentModel.attachmentPath,
              props: {
                // headers: ...
              },
            },
          ]}
        />
        <IconButton
          icon="close"
          color="white"
          style={{ position: "absolute", top: 0, left: 0 }}
          onPress={() => {
            navigation.pop();
          }}
        />
      </Modal>
    </View>
  );
}
