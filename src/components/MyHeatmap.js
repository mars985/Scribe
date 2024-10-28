import { LineChart, ContributionGraph } from "react-native-chart-kit";

import { View, Text, Dimensions, ScrollView } from "react-native";
import { getCurrentDate } from "../database/util";

const chartConfig = {
  color: (opacity = 1) => `rgba(38, 70, 83, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
  backgroundColor: "#F8F3F9",
  backgroundGradientFrom: "#F8F3F9",
  backgroundGradientTo: "#F8F3F9",
};

const component2 = ({ commitsData }) => {
  // console.log("heatmap " + getCurrentDate());
  return (
    <ScrollView horizontal>
      <ContributionGraph
        values={commitsData}
        endDate={getCurrentDate()}
        horizontal
        numDays={112}
        // startDate={new Date(new Date().setDate(new Date().getDate() - 100))}
        width={Dimensions.get("window").width}
        height={220}
        chartConfig={chartConfig}
      />
    </ScrollView>
  );
};

export default component2;
