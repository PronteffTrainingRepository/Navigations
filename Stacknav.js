import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/Screens/Home";
import Blog from "./src/Screens/Blog";
import BlogDetails from "./src/Screens/BlogDetails";
import DrawerNav from './src/Screens/DrawerNav'

const Stack = createStackNavigator();

class Stacknav extends Component {
  render() {
    return (
      <Stack.Navigator
      headerMode='none'
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#621FF7",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={DrawerNav}
          options={{ title: "Home" }}
        />
        <Stack.Screen name="Dashboard"
          component={Home} />
        <Stack.Screen
          name="Blog"
          component={Blog}
          options={{ title: "Blog" }}
        />
        <Stack.Screen
          name="BlogDetails"
          component={BlogDetails}
          options={{ title: "Blog Detail" }}
        />
      </Stack.Navigator>
    );
  }
}

export default Stacknav;
