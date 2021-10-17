import * as React from "react";
import HomeScreen from "./screens/HomeScreen";
import { StatusBar, View } from "react-native";
import NewPostScreen from "./screens/NewPostScreen";

export default function App() {
  return (
      <View style={{ flex: 1 }}>
        {/* <HomeScreen/>
        <StatusBar /> */}
        <NewPostScreen/>
      </View>
  );
}
