import { RadioButton, Text } from "react-native-paper";
import { View } from "react-native";
import React from "react";

const MyComponent = () => {
  const [checked, setChecked] = React.useState("first");

  return (
    <View>
      <RadioButton
        value="first"
        status={checked === "first" ? "checked" : "unchecked"}
        onPress={() => setChecked("first")}
      />
      <RadioButton
        value="second"
        status={checked === "second" ? "checked" : "unchecked"}
        onPress={() => setChecked("second")}
      />
    </View>
  );
};

export const SettingsScreen = () => {
  // return <Text>Settings</Text>;
  return <MyComponent></MyComponent>;
};

export default SettingsScreen;
