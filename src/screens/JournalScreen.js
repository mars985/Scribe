import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

import { Basic } from "../components/Editor";

const JournalScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <Text>hello</Text> */}
      <Basic />
    </View>
  );
};

export default JournalScreen;
