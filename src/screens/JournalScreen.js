import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { PaperProvider, Portal } from "react-native-paper";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import PostCard from "../components/PostCard";
import MyFAB from "../components/MyFAB";
import DeleteDialog from "../components/DeleteDialog";
import { deletePost, getPosts, saveNewPost } from "../database/storageJournal";
import { getCurrentDate, getCurrentTime } from "../database/util";

const JournalScreen = () => {
  const navigation = useNavigation();
  const [journalPostsArray, setJournalPostsArray] = useState([]);
  const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);
  const [selectedPostIndex, setSelectedPostIndex] = useState(null);

  const setPosts = async () => setJournalPostsArray(await getPosts());

  useFocusEffect(
    React.useCallback(() => {
      setPosts();
    }, [])
  );

  const showDeleteDialog = (index) => {
    setSelectedPostIndex(index);
    setDeleteDialogVisible(true);
  };

  const hideDeleteDialog = () => {
    setDeleteDialogVisible(false);
    setSelectedPostIndex(null);
  };

  const deleteThisPost = async () => {
    if (selectedPostIndex !== null) {
      await deletePost(selectedPostIndex);
      hideDeleteDialog();
      setPosts();
    }
  };

  const createNewPost = async () => {
    const newHeading = getCurrentDate() + " " + getCurrentTime();
    const newContent = "";

    const newPost = { heading: newHeading, content: newContent };
    await saveNewPost(newPost);
    await setPosts();
  };

  return (
    <PaperProvider>
      <Portal>
        <DeleteDialog
          visible={deleteDialogVisible}
          onCancel={hideDeleteDialog}
          onOK={deleteThisPost}
          title="Delete Post"
          message="Are you sure you want to delete this post?"
        />
      </Portal>
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.scrollView}>
          {/* <View style={{ padding: 10 }}></View> */}
          {journalPostsArray.map((post, index) => (
            <View style={styles.postContainer} key={index}>
              <Pressable
                onPress={() => {
                  navigation.navigate("Editor", {
                    postHeading: post.heading,
                    postContent: post.content,
                    postIndex: index,
                  });
                }}
                onLongPress={() => showDeleteDialog(index)}
              >
                <PostCard
                  heading={
                    typeof post.heading === "string"
                      ? post.heading
                      : JSON.stringify(post.heading)
                  }
                  content={
                    typeof post.content === "string"
                      ? post.content
                      : JSON.stringify(post.content)
                  }
                />
              </Pressable>
            </View>
          ))}
        </ScrollView>

        <MyFAB icon="plus" label="Add" onPress={createNewPost} />
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#F5F4F4",
  },
  postContainer: {
    paddingTop: 15,
    paddingHorizontal: 10,
  },
});

export default JournalScreen;
