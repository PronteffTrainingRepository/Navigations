import React, { Component } from "react";
import { ScrollView, SafeAreaView, StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Constants from "expo-constants";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "../Screens/HomeScreen";

const Stack = createStackNavigator();

class First extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <SafeAreaView>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

export default First;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    justifyContent: "center",
    alignItems: "center",
  },
});
