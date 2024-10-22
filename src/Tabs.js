import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";

import TasksScreen from "./screens/TasksScreen";
import JournalScreen from "./screens/JournalScreen";
import EditorScreen from "./screens/EditorScreen";

// const HomeRoute = () => <Text>Journal</Text>;
const HomeRoute = () => <JournalScreen />;

// const TasksRoute = () => <TasksScreen/>
const TasksRoute = () => <EditorScreen postcontent="hello world" />;

const SettingsRoute = () => <Text>Settings</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

const MyComponent = () => {
  const [index, setIndex] = React.useState(1);
  const [routes] = React.useState([
    {
      key: "journal",
      title: "Journal",
      focusedIcon: "book",
      unfocusedIcon: "book-outline",
    },
    {
      key: "tasks",
      title: "Tasks",
      focusedIcon: "calendar-check",
      unfocusedIcon: "calendar-check-outline",
    },
    {
      key: "settings",
      title: "Settings",
      focusedIcon: "cog",
      unfocusedIcon: "cog-outline",
    },
    {
      key: "notifications",
      title: "Notifications",
      focusedIcon: "bell",
      unfocusedIcon: "bell-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    journal: HomeRoute,
    tasks: TasksRoute,
    settings: SettingsRoute,
    notifications: NotificationsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;
