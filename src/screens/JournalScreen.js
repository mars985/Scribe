import React, { useState } from "react";
import { ScrollView, StyleSheet, Pressable, View, Alert } from "react-native";
import { PaperProvider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useFocusEffect } from "@react-navigation/native";

import PostCard from "../components/PostCard";
import MyFAB from "../components/MyFAB";
import { deletePost, getPosts, savePost } from "../database/storageJournal";
import { getCurrentDate, getCurrentTime } from "../database/util";

const JournalScreen = () => {
  const navigation = useNavigation();
  const [journalpostsArray, setJournalPostsArray] = useState([]);
  
  const setPosts = async () => setJournalPostsArray(await getPosts());

  useFocusEffect(
    React.useCallback(() => {
      setPosts();
    }, [])
  );

  const deleteThisPost = async (postIndex) => {
    await deletePost(postIndex);
    setPosts();
  };

  const showDeleteAlert = (index) => {
    Alert.alert("Delete Post", "Are you sure you want to delete?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => deleteThisPost(index),
        style: "destructive",
      },
    ]);
  };

  const createNewPost = async () => {
    const newHeading = getCurrentDate() + " " + getCurrentTime();
    const newContent = "";

    const newPost = { heading: newHeading, content: newContent };
    await savePost(newPost);
    await setPosts();
    // console.log(newPost);
  };

  return (
    <PaperProvider>
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.scrollView}>
          {journalpostsArray.map((post, index) => (
            <View style={{ paddingTop: 10, paddingHorizontal: 10 }} key={index}>
              <Pressable
                onPress={() => {
                  navigation.navigate("Editor", {
                    postHeading: post.heading,
                    postContent: post.content,
                    postIndex: index,
                  });
                }}
                onLongPress={() => showDeleteAlert(index)}
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
});

export default JournalScreen;
