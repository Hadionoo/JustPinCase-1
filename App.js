import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MapView, Icon } from "expo";
import { Ionicons } from "@expo/vector-icons";
import Map from "./components/Map";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Login from "./components/Login";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: 
  authDomain: 
  databaseURL: 
  projectId: 
  storageBucket: 
  messagingSenderId: 
};
if (!firebase.app.length) {
  firebase.initializeApp(firebaseConfig);
}
db = firebase.database();

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: Map,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
        const iconName = `ios-home${focused ? "" : "-outline"}`;
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }
  },
  Settings: {
    screen: Login,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
        const iconName = `ios-settings${focused ? "" : "-outline"}`;
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }
  }
});

export default createAppContainer(TabNavigator);
