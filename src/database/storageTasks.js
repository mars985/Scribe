import AsyncStorage from "@react-native-async-storage/async-storage";

const TASK_KEY = "@tasks";

export const clearTasks = async () => {
  try {
    await AsyncStorage.removeItem(TASK_KEY);
  } catch (error) {
    console.error("Error clearing tasks", error);
  }
};

export const getTasks = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(TASK_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error("Error reading data:", error);
  }

};

export const createNewTask = async (taskName, taskDescription) => {
  try {
    const newTask = { name: taskName, description: taskDescription, data: [] };
    await saveNewTask(newTask);
  } catch (error) {
    console.error("Error creating task", error);
  }
};
export const saveNewTask = async (newTask) => {
  try {
    const tasks = await getTasks();
    tasks.push(newTask);
    const jsonValue = JSON.stringify(tasks);
    await AsyncStorage.setItem(TASK_KEY, jsonValue);
  } catch (error) {
    console.error("Error saving task", error);
  }
};

export const deleteTask = async (index) => {
  try {
    const tasks = await getTasks();
    if (index >= 0 && index < tasks.length) {
      tasks.splice(index, 1);
      const jsonValue = JSON.stringify(tasks);
      await AsyncStorage.setItem(TASK_KEY, jsonValue);
    } else {
      console.warn("Invalid index for deleting task");
    }
  } catch (error) {
    console.error("Error removing data:", error);
  }
};

export const updateTask = async (index, date, count) => {
  try {
    const tasks = await getTasks();

    if (!tasks || tasks.length === 0) {
      console.warn("No tasks found");
      return;
    }

    if (index >= 0 && index < tasks.length) {
      const taskToUpdate = tasks[index];

      // Ensure the "data" property is an array
      if (!Array.isArray(taskToUpdate.data)) {
        taskToUpdate.data = [];
      }

      // Check if the date already exists in the "data" array
      const existingEntryIndex = taskToUpdate.data.findIndex(
        (entry) => entry.date === date
      );

      if (existingEntryIndex !== -1) {
        // Update the count for the existing date
        taskToUpdate.data[existingEntryIndex].count = count;
      } else {
        // Add a new entry for the date
        taskToUpdate.data.push({ date, count });
      }

      // Update the task in the tasks array
      tasks[index] = taskToUpdate;

      // Save updated tasks back to AsyncStorage
      const jsonValue = JSON.stringify(tasks);
      await AsyncStorage.setItem(TASK_KEY, jsonValue);

      // console.log("Task updated successfully:", tasks);
      // console.log("Updated task data:", JSON.stringify(taskToUpdate.data, null, 2));
    } else {
      console.warn("Invalid index for updating");
    }
  } catch (error) {
    console.error("Error updating task", error);
  }
};
