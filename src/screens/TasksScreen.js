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
import { getTasks } from "../database/storageTasks";

const TasksScreen = () => {
  const [tasksArray, setTasksArray] = useState([]);

  const setTasks = async () => setTasksArray(await getTasks());

  useEffect(
    React.useCallback(() => {
      setTasks();
    }, [])
  );

  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const [textName, setTextName] = React.useState("");
  const [textDescription, setTextDescription] = React.useState("");

  const handleOnPress = () => {
    showDialog();
  };

  const MyDialog = () => {
    return (
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.Content>
            <TextInput
              label="Name"
              value={textName}
              onChangeText={(textName) => setTextName(textName)}
            />
            <TextInput
              label="Description"
              value={textDescription}
              onChangeText={(textDescription) =>
                setTextDescription(textDescription)
              }
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Add</Button>
            <Button onPress={hideDialog}>Cancel</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    );
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
      <View style={{ flex: 1 }}>
        <ScrollView
          style={styles.scrollView}
          keyboardShouldPersistTaps="handled"
        >
          {tasksArray.map((_, index) => (
            <View key={index}>
              <Card style={styles.card}>
                <Card.Content>
                  <Title style={styles.heading}>{taskHeadings[index]}</Title>
                  <View style={styles.contentContainer}>
                    <Heatmap commitsData={commitsData} />
                  </View>
                </Card.Content>
              </Card>
            </View>
          ))}
        </ScrollView>

        {visible ? (
          <MyDialog />
        ) : (
          <MyFAB icon="plus" onPress={handleOnPress} label={"Add Task"} />
        )}
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
