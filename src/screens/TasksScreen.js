import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import Heatmap from "../components/heatmap";
import MyFAB from "../components/MyFAB";

const TasksScreen = () => {
  const heatmapArray = [1, 2, 3, 4];

  return (
    <PaperProvider>
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.scrollView}>
          {heatmapArray.map((_, index) => (
            <View style={{ padding: 10 }} key={index}>
              <Heatmap />
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

export default TasksScreen;
