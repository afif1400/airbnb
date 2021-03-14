import "react-native-gesture-handler";
import React from "react";
import Router from "./src/navigation/Router";
import Amplify from "aws-amplify";
import config from "./aws-exports";
Amplify.configure(config);

export default function App() {
  return (
    <>
      <Router />
    </>
  );
}
