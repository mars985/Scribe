// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import * as React from 'react';
// import { AppRegistry } from 'react-native';
// import { PaperProvider } from 'react-native-paper';
// import { name as appName } from './app.json';
// import App from './src/App';

// export default function Main() {
//   return (
//     <PaperProvider>
//       <App />
//     </PaperProvider>
//   );
// }

// AppRegistry.registerComponent(appName, () => Main);
import * as React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { View, Text } from "react-native";

import Tabs from "./src/Tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        {/* <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, React Native Paper!</Text>
        </View> */}
        <Tabs />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
