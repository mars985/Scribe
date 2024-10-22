import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import Post from "../components/Post";
import MyFAB from "../components/MyFAB";

const JournalScreen = () => {
  const journalpostsArray = [
    {
      heading: "2024-10-23 09.15",
      content:
        "Vivamus luctus egestas leo, at sollicitudin nulla. Curabitur pharetra orci ut venenatis suscipit. Etiam quis enim eu augue cursus blandit. Nunc sit amet dolor risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      heading: "2024-10-24 14.30",
      content:
        "Quisque vehicula libero euismod, aliquam libero a, condimentum purus. Nulla facilisi. Aenean euismod leo vitae nulla ullamcorper, non scelerisque sem venenatis. Sed in libero non nulla sagittis sagittis at ac odio.",
    },
    {
      heading: "2024-10-25 17.50",
      content:
        "Cras gravida velit in lorem consequat, nec egestas odio euismod. Proin tempor turpis sit amet dictum imperdiet. Donec vitae lacus ultricies, viverra massa at, fermentum ex. Duis in orci vel libero volutpat euismod.",
    },
    {
      heading: "2024-10-26 08.45",
      content:
        "Sed lacinia, mi vitae scelerisque cursus, purus erat dignissim metus, a fermentum libero justo sit amet libero. Ut bibendum eu libero sed varius. Phasellus accumsan justo sed gravida varius.",
    },
    {
      heading: "2024-10-27 11.00",
      content:
        "Aenean sed urna non ante tincidunt molestie. Aliquam sit amet vehicula erat. Curabitur euismod neque non ante gravida, non malesuada urna accumsan. Donec ut metus id erat pharetra accumsan.",
    },
    {
      heading: "2024-10-28 15.15",
      content:
        "Praesent vel libero nec neque finibus condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec auctor erat et lorem tempor, sit amet blandit nunc suscipit.",
    },
    {
      heading: "2024-10-29 13.00",
      content:
        "Mauris vel mi sed nulla fringilla consectetur. Etiam aliquet turpis quis ligula sodales, a tincidunt nisl scelerisque. Proin blandit, nulla sit amet scelerisque dapibus, libero magna aliquam nunc, vel faucibus purus eros eget libero.",
    },
    {
      heading: "2024-10-30 10.30",
      content:
        "Fusce euismod ex sit amet justo auctor, eu pretium nisi aliquet. Nulla sollicitudin nec libero nec mollis. Ut ac urna a justo scelerisque sollicitudin ut vitae ligula.",
    },
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
