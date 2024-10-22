import React from "react";
import { Dimensions, View } from "react-native";
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

// const onSave = (content) => {
//   console.log("new:\n" + content);
// };
import { savePost, updatePost } from "../database/storageJournal";

const onSave = async (postHeading, contentToSave, postIndex) => {
  try {
    if (postIndex !== undefined && postIndex >= 0) {
      // Update existing post
      await updatePost(postIndex, {
        heading: postHeading,
        content: contentToSave,
      });
    } else {
      // Save new post
      await savePost({ content: contentToSave });
    }
    // onSave && onSave(); // Optionally, call onSave if provided as a prop
  } catch (error) {
    console.error("Error saving content", error);
  }
  // logger();

  function logger() {
    console.log("h " + postHeading);
    console.log("c " + contentToSave);
    console.log("i " + postIndex);
    console.log("");
  }
};
export default EditorScreen;
