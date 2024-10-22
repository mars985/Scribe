import * as React from "react";
import { FAB, Portal } from "react-native-paper";
import { StyleSheet } from "react-native";

const MyComponent = () => {
  const [fabOpen, setFabOpen] = React.useState(false);
  const onFabStateChange = ({ open }) => setFabOpen(open);

  return (
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
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});
export default MyComponent;
