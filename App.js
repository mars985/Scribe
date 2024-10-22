import * as React from "react";
import { Provider as PaperProvider } from "react-native-paper";

import Tabs from "./src/Tabs";
import SafeViewAndroid from "./src/components/SafeViewAndroid";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  // logg();

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <PaperProvider>
        <Tabs />
      </PaperProvider>
    </SafeAreaView>
  );
}

import { getCurrentDate } from "./src/database/util.js";

function logg() {
  console.log(getCurrentDate());
}
