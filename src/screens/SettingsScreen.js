import { PaperProvider, RadioButton } from "react-native-paper";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { getSettings } from "../database/storageSettings";

const RadioButtonGroup = ({ options, initialChecked = "first", onPress }) => {
  const [checked, setChecked] = useState(initialChecked);
  const [colors, setColors] = useState([]);

  // Fetch settings and set colors dynamically
  useEffect(() => {
    const fetchSettings = async () => {
      const settings = await getSettings();
      if (settings && settings.heatmap) {
        const colorArray = settings.heatmap.colors[settings.heatmap.index];
        setColors(colorArray);
      }
    };

    fetchSettings();
  }, []);

  const handlePress = (value) => {
    setChecked(value);
    if (onPress) {
      onPress(value); // Call parent function if provided
    }
  };

  return (
    <View>
      {options.map((option, index) => (
        <TouchableOpacity
          key={option.value}
          style={[
            styles.radioButtonContainer,
            { 
              backgroundColor: checked === option.value && colors.length > 0
                ? `rgb(${colors.join(",")})`
                : "transparent"
            },
          ]}
          onPress={() => handlePress(option.value)}
        >
          <RadioButton
            value={option.value}
            status={checked === option.value ? "checked" : "unchecked"}
            onPress={() => handlePress(option.value)}
          />
          <Text>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export const SettingsScreen = () => {
  const options = [
    { value: "first", label: "First" },
    { value: "second", label: "Second" },
  ];

  const handleOptionPress = (value) => {
    console.log(`Option pressed: ${value}`);
  };

  return (
    <PaperProvider>
      <View style={{ flex: 1 }}>
        <RadioButtonGroup options={options} initialChecked="first" onPress={handleOptionPress} />
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
});

export default SettingsScreen;
