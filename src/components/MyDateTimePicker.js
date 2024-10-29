import React, { useState } from 'react';
import { View, Platform } from 'react-native';
import { TextInput, Button, Portal, Dialog } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

const CustomDateTimePicker = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('date'); // 'date' or 'time' mode
  const [inputVisible, setInputVisible] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios'); // Keep picker open on iOS
    setDate(currentDate);
    setInputVisible(false); // Close input on Android
  };

  const showPicker = (currentMode) => {
    setMode(currentMode);
    setShow(true);
    setInputVisible(true);
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        label="Selected Date & Time"
        value={date.toLocaleString()}
        editable={false}
        right={
          <TextInput.Icon
            icon="calendar"
            onPress={() => showPicker('date')}
          />
        }
        style={{ marginBottom: 10 }}
      />

      <Button
        icon="clock"
        mode="contained"
        onPress={() => showPicker('time')}
        style={{ marginTop: 10 }}
      >
        Select Time
      </Button>

      {/* For Android, show the picker in a dialog */}
      {show && Platform.OS === 'android' && (
        <DateTimePicker
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

      {/* For iOS, show picker within a dialog */}
      {Platform.OS === 'ios' && inputVisible && (
        <Portal>
          <Dialog visible={inputVisible} onDismiss={() => setInputVisible(false)}>
            <Dialog.Content>
              <DateTimePicker
                value={date}
                mode={mode}
                is24Hour={true}
                display="spinner"
                onChange={onChange}
                style={{ width: '100%' }}
              />
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => setInputVisible(false)}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      )}
    </View>
  );
};

export default CustomDateTimePicker;
