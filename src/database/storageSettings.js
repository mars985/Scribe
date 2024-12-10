export const SETTINGS_KEY = "@settings";

// Save heatmap color settings
export const setHeatMapColor = async () => {
  const defaultData = {
    heatmap: {
      index: 0,
      colors: [
        [26, 46, 53],
        [38, 70, 83],
      ],
    },
  };
  await AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify(defaultData));
};

// Fetch heatmap color settings
export const getHeatMapColor = async () => {
  const settings = await AsyncStorage.getItem(SETTINGS_KEY);
  return settings ? JSON.parse(settings) : null;
};
