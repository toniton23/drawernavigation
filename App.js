// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabScreen from "./Screens/MainScreen";
import { DrawerContent } from "./Screens/DrawerContent";

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={MainTabScreen} />
        {/* <Drawer.Screen name="Detail" component={DetailStackScreen} />*/}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
