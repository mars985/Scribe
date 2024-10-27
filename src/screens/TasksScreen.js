import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Card, Title, PaperProvider } from "react-native-paper";
import Heatmap from "../components/MyHeatmap";
import MyFAB from "../components/MyFAB";
import {
  clearTasks,
  createNewTask,
  TASKUPDATER,
  updateTask,
} from "../database/storageTasks";
import { getCurrentDate } from "../database/util";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

        <MyFAB icon="plus" onPress={onPressFAB} label={"Add Task"} />
      </View>
    </PaperProvider>
  );
};

const onPressFAB = async () => {
  func();
};

const func = async () => {
  clearTasks();
  index = 1;
  date = getCurrentDate();
  count = 12;
  // await createNewTask("TEST", "more test");
  await updateTask(index, date, count);
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#F5F4F4",
    paddingHorizontal: 10,
    paddingTop: 10,
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
