import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { auth, db } from "config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { navigate, navigationRef } from "../utils/navigationRef";

import { AdminTabs } from "./AdminTabs";
import { AuthStack } from "./AuthStack";
import { AuthenticatedUserContext } from "providers/AuthenticatedUserProvider";
import { LoadingIndicator } from "components/LoadingIndicator";
import { UserTabs } from "./UserTabs";
import { onAuthStateChanged } from "firebase/auth";

const theme = {
  ...DarkTheme,
  colors: { ...DarkTheme.colors },
};

export const RootNavigator = () => {
  const { user, setUser } = useContext(AuthenticatedUserContext) as any;
  const [role, setRole] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));
        const userRole = userDoc.data()?.role ?? "user";
        setUser(firebaseUser);
        setRole(userRole);

        navigate(userRole === "admin" ? "AdminTabs" : "UserTabs");
      } else {
        setUser(null);
        setRole(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (isLoading) return <LoadingIndicator />;

  return (
    <NavigationContainer theme={theme} ref={navigationRef}>
      {!user && <AuthStack />}
      {user && role === "admin" && <AdminTabs />}
      {user && role === "user" && <UserTabs />}
    </NavigationContainer>
  );
};
