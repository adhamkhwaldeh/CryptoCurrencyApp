import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

type Props = {
  message: string;
};

export default function FlatListEmptyState({ message }: Props) {
  return (
    <View
      style={{
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ textAlign: "center" }}>{message}</Text>
    </View>
  );
}
