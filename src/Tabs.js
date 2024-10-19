import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";

import Test from './screens/TasksScreen'

// const HomeRoute = () => <Text>Journal</Text>;
const HomeRoute = () => <Test/>

const TasksRoute = () => <Text>Tasks</Text>;

const SettingsRoute = () => <Text>Settings</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
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
