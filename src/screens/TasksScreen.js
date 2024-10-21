import { View } from "react-native";

import MyFab from "../components/MyFAB";
import Heatmap from "../components/heatmap";
import { Text } from "react-native-paper";

const TasksScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor:"#F5F4F4" }}>
      <Text>hello world</Text>
      <Heatmap/>
      <Text>hello world</Text>
      <MyFab />
      <Text>hello world</Text>
    </View>
  );
};

export default TasksScreen;
