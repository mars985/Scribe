import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import Post from "../components/Post";
import MyFAB from "../components/MyFAB";
// import EditorScreen from "./EditorScreen";

const JournalScreen = () => {
  const journalpostsArray = [1, 2, 3, 4, 5];

  return (
    <PaperProvider>
      <View style={{ flex: 1 }}>
        
        <ScrollView style={styles.scrollView}>
          {journalpostsArray.map((_, index) => (
            <View style={{ padding: 10 }} key={index}>
              <Post/>
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
