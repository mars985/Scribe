import { TextInput, Button, Dialog } from "react-native-paper";

const TaskCreationDialog = ({
  visible,
  hideDialog,
  textName,
  setTextName,
  textDescription,
  setTextDescription,
  createTask,
}) => (
  <Dialog visible={visible} onDismiss={hideDialog}>
    <Dialog.Title>Add Task</Dialog.Title>
    <Dialog.Content>
      <TextInput
        label="Name"
        value={textName}
        onChangeText={(text) => setTextName(text)}
      />
      <TextInput
        label="Description"
        value={textDescription}
        onChangeText={(text) => setTextDescription(text)}
      />
    </Dialog.Content>
    <Dialog.Actions>
      <Button onPress={hideDialog}>Cancel</Button>
      <Button onPress={createTask}>Add</Button>
    </Dialog.Actions>
  </Dialog>
);

export default TaskCreationDialog;
