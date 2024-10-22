// import * as React from "react";
// import { Provider as PaperProvider } from "react-native-paper";

// import Tabs from "./src/Tabs";
// import SafeViewAndroid from "./src/components/SafeViewAndroid";
// import { SafeAreaView } from "react-native-safe-area-context";

// export default function App() {
//   return (
//     <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
//       <PaperProvider>
//         <Tabs />
//       </PaperProvider>
//     </SafeAreaView>
//   );
// }

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";
import Tabs from "./src/Tabs";
import SafeViewAndroid from "./src/components/SafeViewAndroid";
import { SafeAreaView } from "react-native-safe-area-context";
import EditorScreen from "./src/screens/EditorScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
            <Stack.Screen name="Editor" component={EditorScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaView>
  );
}
