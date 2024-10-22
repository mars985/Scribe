import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import Post from "../components/Post";
import MyFAB from "../components/MyFAB";

const JournalScreen = () => {
  const journalpostsArray = [
    { heading: "First Post", content: "This is the content of the first post." },
    { heading: "Second Post", content: "Here is some content for the second post." },
    { heading: "Third Post", content: "The third post has a bit more content to show how the truncation works." },
    { heading: "Fourth Post", content: "Content for the fourth post goes here." },
    { heading: "Fifth Post", content: "This is the last post in the list, with some final thoughts." },
  ];

  return (
    <PaperProvider>
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.scrollView}>
          {journalpostsArray.map((post, index) => (
            <View style={{ padding: 10 }} key={index}>
              <Post heading={post.heading} content={post.content} />
            </View>
          ))}
        </ScrollView>

        <MyFAB />
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
