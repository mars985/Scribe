import RNDateTimePicker from "@react-native-community/datetimepicker";
import React from "react";
import { View, Text } from "react-native";
import { Button, Dialog, Portal } from "react-native-paper";
import { DatePickerModal } from "react-native-paper-dates";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default MyDatePicker = ({
  visible,
  onConfirm,
  onDismiss,
  date,
  setDate,
}) => {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Title>Select Date</Dialog.Title>
        {/* <Dialog.Content> */}
        {/* <View
            style={{ justifyContent: "center", flex: 1, alignItems: "center" }}
          > */}
        {/* <DatePickerModal
            locale="en"
            mode="single"
            visible={visible}
            onDismiss={onDismiss}
            date={date}
            onConfirm={onConfirm}
          /> */}
        {/* </View> */}
        {/* </Dialog.Content> */}
        {/* <Dialog.Actions>
          <Button onPress={onCancel}>Cancel</Button>
          <Button onPress={onOK}>OK</Button>
        </Dialog.Actions> */}
        <Dialog.Content>
          <View style={{ flex: 1 }}>
          </View>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};
