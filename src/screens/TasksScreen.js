import React, { useEffect, useState } from "react";
import { Alert, ScrollView, StyleSheet, View, Pressable } from "react-native";
import { Card, Title, PaperProvider, Portal } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";

import Heatmap from "../components/MyHeatmap";
import MyFAB from "../components/MyFAB";
import TaskCreationDialog from "../components/TaskCreationDialog";
import DeleteDialog from "../components/DeleteDialog";

import { createNewTask, getTasks, deleteTask } from "../database/storageTasks";

const TasksScreen = () => {
  const [tasksArray, setTasksArray] = useState([]);
  const [visible, setVisible] = useState(false);
  const [textName, setTextName] = useState("");
  const [textDescription, setTextDescription] = useState("");
  const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);

  const setTasks = async () => setTasksArray(await getTasks());

  useFocusEffect(
    React.useCallback(() => {
      setTasks();
    }, [])
  );

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const createTask = async () => {
    await createNewTask(textName, textDescription);
    setTextName("");
    setTextDescription("");
    hideDialog();
    setTasks();
  };

  const showDeleteDialog = (index) => {
    setSelectedTaskIndex(index);
    setDeleteDialogVisible(true);
  };

  const hideDeleteDialog = () => {
    setDeleteDialogVisible(false);
    setSelectedTaskIndex(null);
  };

  const deleteThisTask = async () => {
    await deleteTask(selectedTaskIndex);
    hideDeleteDialog();
    setTasks(); // Refresh task list
  };

  return (
    <PaperProvider>
      <Portal>
        <TaskCreationDialog
          visible={visible}
          hideDialog={hideDialog}
          textName={textName}
          setTextName={setTextName}
          textDescription={textDescription}
          setTextDescription={setTextDescription}
          createTask={createTask}
        />
        <DeleteDialog
          visible={deleteDialogVisible}
          onCancel={hideDeleteDialog}
          onOK={deleteThisTask}
          title={"Delete Task"}
          message={"Are you sure you want to delete this task?"}
        />
      </Portal>
      <View style={{ flex: 1 }}>
        <ScrollView
          style={styles.scrollView}
          keyboardShouldPersistTaps="handled"
        >
          {tasksArray.map((task, index) => (
            <View key={index}>
              <Pressable
                onPress={() => {
                  console.log(index);
                }}
                onLongPress={() => {
                  setSelectedTaskIndex(index);
                  showDeleteDialog(index);
                }}
              >
                <Card style={styles.card}>
                  <Card.Content>
                    <Title style={styles.heading}>{task.name}</Title>
                    <View style={styles.contentContainer}>
                      <Heatmap commitsData={task["data"]} />
                    </View>
                  </Card.Content>
                </Card>
              </Pressable>
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
