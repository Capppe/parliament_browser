import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { KeyboardAvoidingView, Platform, SafeAreaView } from "react-native";

import { CustomTitle } from "./components/CustomHeader";
import { DetailsScreen } from "./stacks/DetailsScreen";
import { HomeScreen } from "./stacks/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerTitle: () => <CustomTitle title="Parliament browser" />,
              }}
            />
            <Stack.Screen
              name="Details"
              component={DetailsScreen}
              options={{
                headerTitle: () => <CustomTitle title="Detaljer" />,
              }}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </KeyboardAvoidingView>
  );
}
