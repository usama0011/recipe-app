import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from "./screens/HomePage";
import BookMarkScreen from "./screens/BookMark";
import GrocriesScreen from "./screens/Grocries";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Recipies" options={{
          tabBarLabel: 'Recipies',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="restaurant-outline" color={color} size={size} />
          ),
        }} component={HomeScreen} />
      <Tab.Screen name="BookMarks" component={BookMarkScreen}  options={{
          tabBarLabel: 'BookMarks',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bookmarks-outline" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Groucery" component={GrocriesScreen}  options={{
          tabBarLabel: 'Groucires',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-receipt-outline" color={color} size={size} />
          ),
        }} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
