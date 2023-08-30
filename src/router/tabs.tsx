import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";

import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { useTheme } from "styled-components/native";
import { StyleSheet, TouchableOpacity } from "react-native";

import MainActionIcon from "../../assets/MainActionIcon.svg";
import { MainButton } from "../styles/router";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.colors.currentLine,
          height: 62,
          bottom: 20,
          marginHorizontal: 20,
          borderRadius: 15,
        },
        tabBarActiveTintColor: theme.colors.green,
        tabBarInactiveTintColor: theme.colors.comment,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="camera" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Galeria"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="image" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Histórico"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="history" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Home}
        options={({ navigation }) => ({
          tabBarButton: (props) => (
            <MainButton>
              <MainActionIcon width={32} height={32} />
            </MainButton>
          ),
        })}
      />
    </Tab.Navigator>
  );
}
