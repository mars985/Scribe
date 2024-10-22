// import React from "react";
// import { ScrollView, StyleSheet, View } from "react-native";
// import { PaperProvider } from "react-native-paper";
// import PostCard from "../components/PostCard";
// import MyFAB from "../components/MyFAB";
// import { useNavigation } from "@react-navigation/native";
// import { getPosts } from "../database/storageJournal";

// const JournalScreen = () => {
//   const navigation = useNavigation();

//   // const journalpostsArray = await getPosts();
//   const journalpostsArray = [
//     {
//       heading: "2024-10-29 13.00",
//       content:
//         "Mauris vel mi sed nulla fringilla consectetur. Etiam aliquet turpis quis ligula sodales, a tincidunt nisl scelerisque. Proin blandit, nulla sit amet scelerisque dapibus, libero magna aliquam nunc, vel faucibus purus eros eget libero.",
//     },
//     {
//       heading: "2024-10-30 10.30",
//       content:
//         "Fusce euismod ex sit amet justo auctor, eu pretium nisi aliquet. Nulla sollicitudin nec libero nec mollis. Ut ac urna a justo scelerisque sollicitudin ut vitae ligula.",
//     },
//   ];

//   return (
//     <PaperProvider>
//       <View style={{ flex: 1 }}>
//         <ScrollView style={styles.scrollView}>
//           {journalpostsArray.map((post, index) => (
//             <View style={{ padding: 10 }} key={index}>
//               <PostCard
//                 heading={post.heading}
//                 content={post.content}
//                 onPress={() => {
//                   navigation.navigate("Editor", {
//                     postHeading: post.heading,
//                     postContent: post.content,
//                     postIndex: index,
//                   });
//                 }}
//               />
//             </View>
//           ))}
//         </ScrollView>

//         <MyFAB />
//       </View>
//     </PaperProvider>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     flex: 1,
//     backgroundColor: "#F5F4F4",
//   },
// });

// export default JournalScreen;

import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import PostCard from "../components/PostCard";
import MyFAB from "../components/MyFAB";
import { useNavigation } from "@react-navigation/native";
import { getPosts } from "../database/storageJournal";

const JournalScreen = () => {
  const navigation = useNavigation();
  const [journalpostsArray, setJournalPostsArray] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setJournalPostsArray(posts);
    };

    fetchPosts();
  }, []);

  return (
    <PaperProvider>
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.scrollView}>
          {journalpostsArray.map((post, index) => (
            <View style={{ paddingTop: 10, paddingHorizontal: 10 }} key={index}>
              <PostCard
                heading={
                  typeof post.heading === "string"
                    ? post.heading
                    : JSON.stringify(post.heading)
                } // Ensure heading is a string
                content={
                  typeof post.content === "string"
                    ? post.content
                    : JSON.stringify(post.content)
                } // Ensure content is a string
                onPress={() => {
                  navigation.navigate("Editor", {
                    postHeading: post.heading,
                    postContent: post.content,
                    postIndex: index,
                  });
                }}
              />
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
