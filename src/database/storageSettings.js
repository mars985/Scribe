import AsyncStorage from "@react-native-async-storage/async-storage";

export const SETTINGS_KEY = "@settings";

// Save default heatmap color settings
export const setSettings = async () => {
  const defaultData = {
    heatmap: {
      index: 0,
      colors: [
        [26, 46, 53],
        [38, 70, 83],
      ],
    },
  };

  try {
    await AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify(defaultData));
  } catch (error) {
    console.error("Error saving default heatmap settings:", error);
  }
};

// Fetch heatmap color settings
export const getSettings = async () => {
  try {
    let settings = await AsyncStorage.getItem(SETTINGS_KEY);

    if (!settings) {
      console.log("No settings found. Initializing defaults...");
      await setSettings(); // Save default settings if none exist
      settings = await AsyncStorage.getItem(SETTINGS_KEY); // Fetch again after saving
    }

    return JSON.parse(settings); // Parse and return the settings object
  } catch (error) {
    console.error("Error fetching heatmap settings:", error);
    return null; // Return `null` in case of an error
  }
};
