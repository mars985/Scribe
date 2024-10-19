import { View } from "react-native";

import MyFab from "../components/MyFAB";
import Heatmap from "../components/heatmap";
import { Text } from "react-native-paper";

const TasksScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>hello world</Text>
      <Heatmap/>
      <MyFab />
    </View>
  );
};

export default TasksScreen;
