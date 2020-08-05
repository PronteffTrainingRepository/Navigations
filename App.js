import * as React from "react";
import { Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import Home from "./src/Screens/Home";
// import Blog from "./src/Screens/Blog";
// import BlogDetails from "./src/Screens/BlogDetails";
import StackNav from './Stacknav'
 //import Header from './src/Screens/CustomHeader/CustomHeader'

const Stack = createStackNavigator();

// function NavStack() {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerTitleAlign: "center",
//         headerStyle: {
//           backgroundColor: "#621FF7",
//         },
//         headerTintColor: "#fff",
//         headerTitleStyle: {
//           fontWeight: "bold",
//         },
//       }}
//     >
//       <Stack.Screen name="Home" component={Home} options={{ title: "Home" }} />
//       <Stack.Screen name="Blog" component={Blog} options={{ title: "Blog" }} />
//       <Stack.Screen
//         name="BlogDetails"
//         component={BlogDetails}
//         options={{ title: "Blog Detail" }}
//       />
//     </Stack.Navigator>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
      {/* <NavStack /> */}
      
      <StackNav/>
    </NavigationContainer>
  );
}

console.disableYellowBox = true;
