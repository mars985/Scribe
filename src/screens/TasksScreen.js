import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text, PaperProvider, Portal } from "react-native-paper";
import MyFab from "../components/MyFAB";
import Heatmap from "../components/heatmap";
import { FAB } from "react-native-paper";

const TasksScreen = () => {
  const heatmapArray = [1, 2, 3, 4];
  const [fabOpen, setFabOpen] = React.useState(false);

  const onFabStateChange = ({ open }) => setFabOpen(open);

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

        <Portal>
          <FAB.Group
            open={fabOpen}
            visible
            icon={fabOpen ? "calendar-today" : "plus"}
            actions={[
              { icon: "plus", onPress: () => console.log("Pressed add") },
              {
                icon: "star",
                label: "Star",
                onPress: () => console.log("Pressed star"),
              },
              {
                icon: "email",
                label: "Email",
                onPress: () => console.log("Pressed email"),
              },
              {
                icon: "bell",
                label: "Remind",
                onPress: () => console.log("Pressed notifications"),
              },
            ]}
            onStateChange={onFabStateChange}
            onPress={() => {
              if (fabOpen) {
                // do something if the FAB is open
              }
            }}
            style={styles.fab}
          />
        </Portal>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#F5F4F4",
  },
  fab: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});

export default TasksScreen;
