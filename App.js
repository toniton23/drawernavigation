// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabScreen from "./Screens/MainScreen";
import SupportScreen from "./Screens/SupportScreen";
import BookmarkScreen from "./Screens/BookmarkScreen";
import SettingScreen from "./Screens/SettingScreen";
import { DrawerContent } from "./Screens/DrawerContent";

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
        <Drawer.Screen name="Bookmarks" component={BookmarkScreen} />
        <Drawer.Screen name="Setting" component={SettingScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
