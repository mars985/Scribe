import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  Card,
  Dialog,
  Title,
  PaperProvider,
  Portal,
  TextInput,
  Button,
} from "react-native-paper";

import Heatmap from "../components/MyHeatmap";
import MyFAB from "../components/MyFAB";
import { createNewTask, getTasks } from "../database/storageTasks";

const MyDialog = ({
  visible,
  hideDialog,
  textName,
  setTextName,
  textDescription,
  setTextDescription,
  createTask,
}) => (
  <Dialog visible={visible} onDismiss={hideDialog}>
    <Dialog.Title>Add Task</Dialog.Title>
    <Dialog.Content>
      <TextInput
        label="Name"
        value={textName}
        onChangeText={(text) => setTextName(text)}
      />
      <TextInput
        label="Description"
        value={textDescription}
        onChangeText={(text) => setTextDescription(text)}
      />
    </Dialog.Content>
    <Dialog.Actions>
      <Button onPress={hideDialog}>Cancel</Button>
      <Button onPress={createTask}>Add</Button>
    </Dialog.Actions>
  </Dialog>
);

const TasksScreen = () => {
  const [tasksArray, setTasksArray] = useState([]);
  const [visible, setVisible] = useState(false);
  const [textName, setTextName] = useState("");
  const [textDescription, setTextDescription] = useState("");

  const setTasks = async () => setTasksArray(await getTasks());

  useEffect(() => {
    setTasks();
  }, []);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const createTask = async () => {
    await createNewTask(textName, textDescription);
    setTextName(""); // Clear the input fields after task creation
    setTextDescription("");
    hideDialog();
    setTasks(); // Update the tasks list
  };

  const commitsData = [
    { date: "2024-08-30", count: 4 },
    { date: "2024-09-05", count: 2 },
    { date: "2024-09-15", count: 3 },
    { date: "2024-10-01", count: 2 },
    { date: "2024-10-02", count: 1 },
    { date: "2024-10-03", count: 2 },
    { date: "2024-10-04", count: 3 },
    { date: "2024-10-05", count: 4 },
    { date: "2024-10-06", count: 5 },
    { date: "2024-10-20", count: 4 },
    { date: "2024-10-22", count: 4 },
  ];

  return (
    <PaperProvider>
      <Portal>
        <MyDialog
          visible={visible}
          hideDialog={hideDialog}
          textName={textName}
          setTextName={setTextName}
          textDescription={textDescription}
          setTextDescription={setTextDescription}
          createTask={createTask}
        />
      </Portal>
      <View style={{ flex: 1 }}>
        <ScrollView
          style={styles.scrollView}
          keyboardShouldPersistTaps="handled"
        >
          {tasksArray.map((task, index) => (
            <View key={index}>
              <Card style={styles.card}>
                <Card.Content>
                  <Title style={styles.heading}>{task.name}</Title>
                  <View style={styles.contentContainer}>
                    <Heatmap commitsData={commitsData} />
                  </View>
                </Card.Content>
              </Card>
            </View>
          ))}
        </ScrollView>

        <MyFAB icon="plus" onPress={showDialog} label={"Add Task"} />
      </View>
    </PaperProvider>
  );
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
  },
  contentContainer: {
    position: "relative",
  },
});

export default TasksScreen;
