import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

import { PostEditor } from "../components/PostEditor";

const EditorScreen = ({ route }) => {
  const { postHeading, postContent, postIndex } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Text
        style={{
          fontSize: 22,
          padding: 16,
          fontWeight: "bold",
        }}
      >
        {postHeading}
      </Text>
      <View style={{ flex: 1, paddingHorizontal: 16 }}>
        <PostEditor
          postIndex={postIndex}
          postHeading={postHeading}
          postContent={postContent}
          onSave={onSave}
        />
      </View>
    </View>
  );
};

import { onSave } from "../database/storageJournal";

export default EditorScreen;
