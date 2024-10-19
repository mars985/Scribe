import { View } from "react-native";

import MyFab from "../components/MyFAB";
import { Text } from "react-native-paper";

const TasksScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>hello world</Text>
      <MyFab />
    </View>
  );
};

export default TasksScreen;
