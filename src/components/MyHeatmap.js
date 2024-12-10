import React, { useEffect, useRef } from "react";
import { ContributionGraph } from "react-native-chart-kit";
import { Dimensions, ScrollView } from "react-native";
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

const MyHeatmap = ({ commitsData, onDayPress, index }) => {
  const scrollViewRef = useRef();

  useEffect(() => {
    // Scroll to the end when the component is mounted
    scrollViewRef.current?.scrollToEnd({ animated: false });
  }, [commitsData]);

  const handleDayPress = ({ date, count }) => {
    onDayPress(date, index);
    console.log(date);
    console.log(count);
  };

  return (
    <ScrollView 
      horizontal 
      ref={scrollViewRef} 
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <ContributionGraph
        values={commitsData}
        endDate={getCurrentDate()}
        horizontal
        numDays={112}
        width={Dimensions.get("window").width}
        height={220}
        chartConfig={chartConfig}
        // onDayPress={handleDayPress}
      />
    </ScrollView>
  );
};

export default MyHeatmap;
