import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Pressable } from "react-native";
import {
  Card,
  Title,
  PaperProvider,
  Portal,
  Dialog,
  TextInput,
  Button,
} from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { random } from "lodash";

import Heatmap from "../components/MyHeatmap";
import MyFAB from "../components/MyFAB";
import TaskCreationDialog from "../components/TaskCreationDialog";
import DeleteDialog from "../components/DeleteDialog";

import {
  createNewTask,
  getTasks,
  deleteTask,
  updateTask,
  setTASK,
} from "../database/storageTasks";
import {
  setHeatMapColor,
  getHeatMapColor
} from "../database/storageSettings";


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
  const createRandomTask = async () => {
    const data = [
      { count: random(0, 1), date: "2024-11-01" },
      { count: random(0, 1), date: "2024-11-02" },
      { count: random(0, 1), date: "2024-11-03" },
      { count: random(0, 1), date: "2024-11-04" },
      { count: random(0, 1), date: "2024-11-05" },
      { count: random(0, 1), date: "2024-11-06" },
      { count: random(0, 1), date: "2024-11-07" },
      { count: random(0, 1), date: "2024-11-08" },
      { count: random(0, 1), date: "2024-11-09" },
      { count: random(0, 1), date: "2024-11-10" },
      { count: random(0, 1), date: "2024-11-11" },
      { count: random(0, 1), date: "2024-11-12" },
      { count: random(0, 1), date: "2024-11-13" },
      { count: random(0, 1), date: "2024-11-14" },
      { count: random(0, 1), date: "2024-11-15" },
      { count: random(0, 1), date: "2024-11-16" },
      { count: random(0, 1), date: "2024-11-17" },
      { count: random(0, 1), date: "2024-11-18" },
      { count: random(0, 1), date: "2024-11-19" },
      { count: random(0, 1), date: "2024-11-20" },
      { count: random(0, 1), date: "2024-11-21" },
      { count: random(0, 1), date: "2024-11-22" },
      { count: random(0, 1), date: "2024-11-23" },
      { count: random(0, 1), date: "2024-11-24" },
      { count: random(0, 1), date: "2024-11-25" },
      { count: random(0, 1), date: "2024-11-26" },
      { count: random(0, 1), date: "2024-11-27" },
      { count: random(0, 1), date: "2024-11-28" },
      { count: random(0, 1), date: "2024-11-29" },
      { count: random(0, 1), date: "2024-11-30" },

      { count: random(0, 1), date: "2024-12-01" },
      { count: random(0, 1), date: "2024-12-02" },
      { count: random(0, 1), date: "2024-12-03" },
      { count: random(0, 1), date: "2024-12-04" },
      { count: random(0, 1), date: "2024-12-05" },
      { count: random(0, 1), date: "2024-12-06" },
      { count: random(0, 1), date: "2024-12-07" },
      { count: random(0, 1), date: "2024-12-08" },
      { count: random(0, 1), date: "2024-12-09" },
    ];
    await setTASK(data);
  };
  const hideTaskDialog = () => setTaskDialogVisible(false);

  const createTask = async () => {
    hideTaskDialog();
    await createNewTask(textName, textDescription);
    setTextName("");
    setTextDescription("");
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

  //date picker dialog
  const datePickerOnConfirm = (event, selectedDate) => {
    setDatePickerVisible(false); // Hide the date picker

    if (event.type === "dismissed") return;

    if (selectedDate) {
      const getDateString = (dateInput) => {
        const funcDate =
          typeof dateInput === "string" ? new Date(dateInput) : dateInput;

        if (isNaN(funcDate.getTime())) {
          throw new Error("Invalid date input");
        }

        // Use local time instead of UTC to avoid timezone issues
        const year = funcDate.getFullYear();
        const month = String(funcDate.getMonth() + 1).padStart(2, "0");
        const day = String(funcDate.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
      };

      const formattedDate = getDateString(selectedDate);
      setDate(formattedDate); // Update the state
      console.log("Selected date:", formattedDate); // Log the formatted date
      showCountDialog(); // Show the count dialog
    }
  };

  const datePickeronDismiss = () => setDatePickerVisible(false);

  // count dialog
  const [count, setCount] = useState(0);
  const [countDialogVisible, setCountDialogVisible] = useState(false);

  const showCountDialog = () => setCountDialogVisible(true);
  const hideCountDialog = () => setCountDialogVisible(false);

  const onCountConfirm = async () => {
    hideCountDialog();
    await updateTask(selectedTaskIndex, date, count);
    setTasks();
  };
  const onCountCancel = () => hideCountDialog();

  const getDefaultValue = () => {
    if (!tasksArray || tasksArray.length === 0) {
      console.warn("No tasks found");
      return 0;
    }

    const selectedTask = tasksArray[selectedTaskIndex];
    if (!selectedTask || !selectedTask.data) {
      console.warn("Selected task or data not found");
      return 0;
    }

    const existingEntryIndex = selectedTask.data.findIndex(
      (entry) => entry.date === date
    );
    return existingEntryIndex === -1
      ? 0
      : selectedTask.data[existingEntryIndex].count;
  };

  const [dayPressed, setDayPressed] = useState(0);

  const onDayPress = ({ date, index }) => {
    setDate(date);
    setSelectedTaskIndex(index);
    showCountDialog();
  };

  // settings
  const [heatmapColors, setHeatmapColors] = useState([]);

  useEffect(() => {
    const fetchHeatmapColors = async () => {
      const settings = await getHeatMapColor();
      if (settings && settings.heatmap) {
        setHeatmapColors(settings.heatmap.colors);
      }
    };
    fetchHeatmapColors();
  }, []);

  // component
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
        <Dialog visible={countDialogVisible} onDismiss={hideCountDialog}>
          <Dialog.Title>Set count for {date}</Dialog.Title>
          <Dialog.Content>
            <TextInput
              keyboardType="numeric"
              label={"Count"}
              onChangeText={setCount}
              autoFocus
              defaultValue={getDefaultValue}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={onCountCancel}>Cancel</Button>
            <Button onPress={onCountConfirm}>Add</Button>
          </Dialog.Actions>
        </Dialog>
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
                  setSelectedTaskIndex(index);
                  showUpdateDialog();
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
                      <Heatmap
                        key={JSON.stringify(task["data"])} // Force re-render on data change
                        commitsData={task["data"]}
                        onDayPress={onDayPress}
                        index={index}
                        heatmapColors={heatmapColors}
                      />
                    </View>
                  </Card.Content>
                </Card>
              </Pressable>
            </View>
          ))}
        </ScrollView>

        <MyFAB icon="plus" onPress={showTaskDialog} label={"Add Task"} />
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
