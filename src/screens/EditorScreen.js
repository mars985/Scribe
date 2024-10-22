import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

import { PostEditor } from "../components/PostEditor";

const EditorScreen = ({heading, postcontent}) => {
  return (
    <View style={{ flex: 1 }}>
      {/* <Text>hello</Text> */}
      <PostEditor postcontent={postcontent} />
    </View>
  );
};

export default EditorScreen;
