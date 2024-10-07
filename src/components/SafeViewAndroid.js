import { StyleSheet, Platform, StatusBar } from "react-native";

const height=StatusBar.currentHeight/10;
// console.log(height);
export default StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? height : 0,
  },
});
