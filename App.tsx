import { AuthenticatedUserProvider } from "providers/AuthenticatedUserProvider";
import React from "react";
import { RootNavigator } from "./navigation/RootNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";

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
