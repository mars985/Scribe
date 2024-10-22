import * as React from "react";
import { FAB, Portal } from "react-native-paper";
import { StyleSheet } from "react-native";

const MyFAB = ( {icon, label, onPress} ) => {
  return (
    <Portal>
      <FAB
        icon={icon}
        label={label}
        onPress={onPress}
        style={styles.fab}
      />
    </Portal>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 16,
    right: 16,
  },
});

export default MyFAB;
