import { PaperProvider, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import Timeline from "react-native-timeline-flatlist";
import React from "react";

const NotificationsScreen = () => {
  const data = [
    { time: "09:00", title: "Event 1", description: "Event 1 Description" },
    { time: "10:45", title: "Event 2", description: "Event 2 Description" },
    { time: "12:00", title: "Event 3", description: "Event 3 Description" },
    { time: "14:00", title: "Event 4", description: "Event 4 Description" },
    { time: "16:30", title: "Event 5", description: "Event 5 Description" },
  ];
  return (
    <PaperProvider>
      <View style={styles.container}>
      <Timeline
        data={data}
        circleColor="yellow" // Customize circle color
        lineColor="gray"   // Customize line color
        timeStyle={styles.timeStyle}
        descriptionStyle={styles.descriptionStyle}
      />
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  timeStyle: {
    textAlign: "center",
    backgroundColor: "#ff9797",
    color: "white",
    padding: 5,
    borderRadius: 5,
  },
  descriptionStyle: {
    color: "gray",
  },
});

export default NotificationsScreen;
