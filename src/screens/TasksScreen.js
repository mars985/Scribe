import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Pressable } from "react-native";
import { Card, Title, PaperProvider, Portal, Dialog } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";

import Heatmap from "../components/MyHeatmap";
import MyFAB from "../components/MyFAB";
import TaskCreationDialog from "../components/TaskCreationDialog";
import DeleteDialog from "../components/DeleteDialog";
import MyDatePicker from "../components/MyDateTimePicker";

import { createNewTask, getTasks, deleteTask } from "../database/storageTasks";
import RNDateTimePicker from "@react-native-community/datetimepicker";

const TasksScreen = () => {
  const [tasksArray, setTasksArray] = useState([]);

  const setTasks = async () => setTasksArray(await getTasks());
  useFocusEffect(
    React.useCallback(() => {
      setTasks();
    }, [])
  );

  // create new task
  const [taskDialogVisible, setTaskDialogVisible] = useState(false);
  const [textName, setTextName] = useState("");
  const [textDescription, setTextDescription] = useState("");

  const showTaskDialog = () => setTaskDialogVisible(true);
  const hideTaskDialog = () => setTaskDialogVisible(false);

  const createTask = async () => {
    await createNewTask(textName, textDescription);
    setTextName("");
    setTextDescription("");
    hideTaskDialog();
    setTasks();
  };

  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);
  // delete
  const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);

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

  // update
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [date, setDate] = useState();

  const showUpdateDialog = () => setDatePickerVisible(true);

  const datePickerOnConfirm = (event, selectedDate) => {
    setDatePickerVisible(false);
    if (selectedDate) {
      setDate(selectedDate);
      console.log("Selected date:", selectedDate);
    }
  };

  const datePickeronDismiss = () => setDatePickerVisible(false);

  return (
    <PaperProvider>
      <Portal>
        <TaskCreationDialog
          visible={taskDialogVisible}
          hideDialog={hideTaskDialog}
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
        {datePickerVisible && (
          <RNDateTimePicker
            mode="date"
            value={new Date()}
            onTouchCancel={datePickeronDismiss}
            onChange={datePickerOnConfirm}
          />
        )}
        {/* <MyDatePicker
          visible={datePickerVisible}
          onConfirm={datePickerOnConfirm}
          onDismiss={datePickeronDismiss}
          date={date}
          setDate={setDate}
        /> */}
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

        <MyFAB icon="plus" onPress={showUpdateDialog} label={"Add Task"} />
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
