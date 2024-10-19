import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to store data
export const storeData = async (key, value) => {
  try {
    // Save data as a stringified JSON object
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    console.log(`Data stored with key: ${key}`);
  } catch (e) {
    console.error('Error storing data:', e);
  }
};

// Function to retrieve data
export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Error reading data:', e);
  }
};

// Function to update data
export const updateData = async (key, newValue) => {
  try {
    // Retrieve existing data
    const existingData = await getData(key);
    if (existingData !== null) {
      // Merge existing data with new data
      const updatedData = { ...existingData, ...newValue };
      await storeData(key, updatedData);
      console.log(`Data updated with key: ${key}`);
    } else {
      console.warn('No existing data found to update');
    }
  } catch (e) {
    console.error('Error updating data:', e);
  }
};

// Function to delete data
export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log(`Data removed with key: ${key}`);
  } catch (e) {
    console.error('Error removing data:', e);
  }
};
