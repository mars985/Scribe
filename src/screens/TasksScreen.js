import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Card, Title, PaperProvider } from "react-native-paper";
import Heatmap from "../components/MyHeatmap";
import MyFAB from "../components/MyFAB";

const TasksScreen = () => {
  const heatmapArray = [1, 2, 3, 4];
  const taskHeadings = ["Task1", "Task2", "Task3", "Task4"];

  return (
    <PaperProvider>
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.scrollView}>
          {heatmapArray.map((_, index) => (
            <View key={index}>
              <Card style={styles.card}>
                <Card.Content>
                  <Title style={styles.heading}>{taskHeadings[index]}</Title>

                  <View style={styles.contentContainer}>
                    <Heatmap />
                  </View>
                </Card.Content>
              </Card>
            </View>
          ))}
        </ScrollView>

        <MyFAB icon="plus" />
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#F5F4F4",
  },
  card: {
    margin: 10,
    borderRadius: 8,
    elevation: 2,
    // backgroundColor: "#edede9",
  },
  contentContainer: {
    position: "relative",
  },
});

export default TasksScreen;
