import React from "react";
import { Text } from "react-native";
import AuthStack from "./AuthStack";
import { useAuthentication } from "../utils/hooks/useAuthentication";
import UserStack from "./UserStack";
// import UserStack from "./UserStack";
// import AuthStack from "./AuthStack";

export default function RootNavigation() {
  const { user } = useAuthentication();

  return user ? <UserStack /> : <AuthStack />;
}
