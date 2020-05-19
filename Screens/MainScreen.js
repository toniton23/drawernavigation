import * as React from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import HomeScreen from "./HomeScreen";
import DetailScreen from "./DetailsScreen";
import ExploreScreen from "./ExploreScreen";
import ProfileScreen from "./ProfileScreen";

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ExploreStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fffa90"
    style={{ backgroundColor: "tomato" }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarColor: "#47bfaf",
        tabBarIcon: ({ color }) => (
          <FontAwesome name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notification"
      component={DetailStackScreen}
      options={{
        tabBarLabel: "Detail",
        tabBarColor: "#a6cbff",
        tabBarIcon: ({ color }) => (
          <FontAwesome name="bell" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: "Profile",
        tabBarColor: "#ff9090",
        tabBarIcon: ({ color }) => (
          <Ionicons name="md-person" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        tabBarLabel: "Explore",
        tabBarColor: "#b077ba",
        tabBarIcon: ({ color }) => (
          <Ionicons name="md-aperture" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);
export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#47bfaf",
      },
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "Overview",
        headerLeft: () => (
          <Ionicons.Button
            name="md-menu"
            size={25}
            backgroundColor="#47bfaf"
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Ionicons.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const DetailStackScreen = ({ navigation }) => (
  <DetailStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#a6cbff",
      },
    }}
  >
    <DetailStack.Screen
      name="Detail"
      component={DetailScreen}
      options={{
        headerLeft: () => (
          <Ionicons.Button
            name="md-menu"
            size={25}
            backgroundColor="#a6cbff"
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Ionicons.Button>
        ),
      }}
    />
  </DetailStack.Navigator>
);

const ProfileStackScreen = ({ navigation }) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#a6cbff",
      },
    }}
  >
    <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerLeft: () => (
          <Ionicons.Button
            name="md-menu"
            size={25}
            backgroundColor="#a6cbff"
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Ionicons.Button>
        ),
      }}
    />
  </ProfileStack.Navigator>
);
