import { AuthenticatedUserProvider } from "providers/AuthenticatedUserProvider";
import React from "react";
import { RootNavigator } from "./navigation/RootNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { enableScreens } from "react-native-screens";
enableScreens(false); // not needed because we're using stack not native-stack

const App = () => {
  return (
    <AuthenticatedUserProvider>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </AuthenticatedUserProvider>
  );
};

export default App;
