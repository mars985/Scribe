import { Dialog, PaperProvider, Portal, TextInput } from "react-native-paper";
import React from "react";

const visible = true;
const [textName, setTextName] = React.useState("");
const [textDescription, setTextDescription] = React.useState("");

export const MyDialog = () => {
  return (
    <PaperProvider>
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
    </PaperProvider>
  );
};
