import AsyncStorage from "@react-native-async-storage/async-storage";

const SETTINGS_KEY = "@settings";

const setHeatMapColor = async () => {
  const settings = await AsyncStorage.getItem(SETTINGS_KEY);
  console.log();
  const defaultData = {
    heatmap: {
      index: 0,
      colors: [
        [38, 70, 83],
        [38, 70, 83],
        [26, 46, 53],
      ],
    },
  };
  if (settings === null) settings = defaultData;
  AsyncStorage.setItem(JSON.stringify(settings));
};

const getHeatMapColor = async () => {
  const settings = await AsyncStorage.getItem(SETTINGS_KEY);
  const index = settings.heatmap.index;
};
