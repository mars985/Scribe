import AsyncStorage from "@react-native-async-storage/async-storage";

import { getCurrentDate } from "../database/util";

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
    const newTask = { name: taskName, description: taskDescription, data: {} };
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

// export const updateTask = async (index, updatedTask) => {
//   try {
//     const tasks = await getTasks(TASK_KEY);
//     if (index >= 0 && index < tasks.length) {
//       tasks[index] = updatedTask;
//       const jsonValue = JSON.stringify(tasks);
//       await AsyncStorage.setItem(TASK_KEY, jsonValue);
//     } else {
//       console.warn("Invalid index for updating task");
//     }
//   } catch (error) {
//     console.error("Error updating data:", error);
//   }
// };

export const deleteTask = async (index) => {
  try {
    const tasks = getTasks();
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

// export const TASKUPDATER = async (index, date, count) => {
// export const TASKUPDATER = async () => {
//   index = 0;
//   date = getCurrentDate();
//   count = 3;
//   try {
//     const tasks = await getTasks(TASK_KEY);
//     await createNewTask("test", "testdesc");

//     if (index >= 0 && index < tasks.length) {
//       // tasks[index] = updatedTask;
//       // const jsonValue = JSON.stringify(tasks);
//       // await AsyncStorage.setItem(TASK_KEY, jsonValue);
//       const tasks = await getTasks(TASK_KEY);
//       tasks[index][date] = count;
//       console.log(tasks);
//     } else {
//       console.warn("Invalid index for updating task");
//     }
//   } catch (error) {
//     console.error("Error updating data:", error);
//   }
// };

export const updateTask = async (index, date, count) => {
  try {
    const tasks = await getTasks();
    console.log(tasks);
    if (tasks === null) {
      console.warn("No tasks found");
    } else if (index >= 0 && index < tasks.length) {
      const taskToUpdate = tasks[index];
      taskToUpdate[date] = count;
      tasks[index] = taskToUpdate;
    } else {
      console.warn("Invalid index for updating");
    }
    console.log(tasks);
  } catch (error) {
    console.error("Error updating task", error);
  }
};
