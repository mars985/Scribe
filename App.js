import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";
import Tabs from "./src/Tabs";
import SafeViewAndroid from "./src/components/SafeViewAndroid";
import { SafeAreaView } from "react-native-safe-area-context";
import EditorScreen from "./src/screens/EditorScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { getTasks, TASK_KEY } from "./src/database/storageTasks";
import { getPosts, STORAGE_KEY } from "./src/database/storageJournal";
import { SETTINGS_KEY } from "./src/database/storageSettings";

const Stack = createStackNavigator();

export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(1);

  if (isFirstLaunch) {
    const initialize = async () => {
      const initialPosts = [
        {
          content: "<p>No data found</p><p>Vhfufuh</p><p>Ugudyfy</p>",
          heading: "2024-12-10 21:34",
        },
        {
          content:
            '<h2><em>Welcome to Scribe!</em></h2><h3><em>Your Journaling and Productivity Companion</em></h3><p></p><h4>Features to Explore:</h4><ol><li><p><strong>Bold</strong> text for emphasis.</p></li><li><p><em>Italicized</em> text for highlighting.</p></li><li><p><strong><em>Bold and Italic</em></strong> for extra impact.</p></li><li><p><s>Strikethrough</s> for corrections.</p></li></ol><p></p><h4>Bullet List:</h4><ul><li><p>Nested Item 1</p></li><li><p>Nested Item</p></li></ul><p></p><h4>Numbered List:</h4><ol><li><p>Step One</p></li></ol><ol start="2"><li><p>Step Two</p></li></ol><p></p><h4>Quotes:</h4><blockquote><p>The secret of getting ahead is getting started.</p><p>— Mark Twain</p></blockquote><p></p><h4>Code blocks:</h4><p><code>int a=100;</code></p><p><code>updateEditor(Editor myDocument) {</code></p><p><code>}</code></p><p></p><h4>Hyperlinks:</h4><p><a target="_blank" rel="noopener noreferrer nofollow" href="wikipedia.org">Wikipedia</a></p><p><a target="_blank" rel="noopener noreferrer nofollow" href="react.dev">React Dev</a></p><p></p>',
          heading: "2024-12-10 21:39",
        },
        { content: "", heading: "2024-12-10 22:24" },
      ];
      const posts = await getPosts();
      const tasks = await getTasks();

      console.log(posts);
    };
    initialize();
    setIsFirstLaunch(0);
  }

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Tabs"
              component={Tabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Editor" component={EditorScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaView>
  );
}
