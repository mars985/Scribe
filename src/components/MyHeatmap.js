import { LineChart, ContributionGraph } from "react-native-chart-kit";

import { View, Text, Dimensions, ScrollView } from "react-native";
import { getCurrentDate } from "../database/util";

const component = () => {
  return (
    <View>
      <Text>Bezier Line Chart</Text>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

const commitsData = [
  { date: "2024-08-30", count: 4 },
  { date: "2024-09-05", count: 2 },
  { date: "2024-09-15", count: 3 },
  { date: "2024-10-01", count: 2 },
  { date: "2024-10-02", count: 1 },
  { date: "2024-10-03", count: 2 },
  { date: "2024-10-04", count: 3 },
  { date: "2024-10-05", count: 4 },
  { date: "2024-10-06", count: 5 },
  { date: "2024-10-20", count: 4 },
  { date: "2024-10-22", count: 4 },
];

const chartConfig = {
  color: (opacity = 1) => `rgba(38, 70, 83, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
  backgroundColor: "#F8F3F9",
  backgroundGradientFrom: "#F8F3F9",
  backgroundGradientTo: "#F8F3F9",
};

const component2 = () => {
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
