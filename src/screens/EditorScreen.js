import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

import { PostEditor } from "../components/PostEditor";

const EditorScreen = ({ route }) => {
  const { heading, postcontent } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 24, padding: 10, fontWeight: "bold" }}>
        {heading}
      </Text>
      <PostEditor postcontent={postcontent} />
    </View>
  );
};

export default EditorScreen;
