import React, { Component } from "react";

import {
  Alert,
  Text,
  View,
  TextInput,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import image from "../assests/Images/logo.png";
import { FontAwesome } from "@expo/vector-icons";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;



export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
         
        <View>
          <View style={styles.buble2}></View>
          <View style={styles.buble}></View>
        </View>
        <View style={{margin:height*0.05}}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: Dimensions.get("window").height * 0.05,
          }}
        >
          <Image source={image} style={styles.image} />
        </View>

        <View style={styles.header}>
          <Text
            style={{
              fontSize: 25,
              marginBottom: height * 0.04,
              fontWeight: "bold",
              //       fontFamily: "Arial",
            }}
          >
            Customer Login Form
          </Text>
        </View>

        <View>
          <Text style={{ fontSize: 15, padding: 10, fontWeight: "bold" }}>
            Mobile Number{" "}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
          }}
        >
          <FontAwesome name="user-o" size={24} color="black" />
          <TextInput
            //   value={this.state.mobileNumber}
            //   onChange={this.handleChange}
            value={this.state.username}
            onChangeText={(username) => this.setState({ username })}
            placeholder={"Mobile Number"}
            placeholderTextColor="green"
            keyboardType="number-pad"
            name="mobileNumber"
            textContentType="telephoneNumber"
            style={{ paddingLeft: 10, width: "80%" }}
          />
        </View>

        <View>
          <Text style={{ fontSize: 15, padding: 10, fontWeight: "bold" }}>
            Password{" "}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            marginBottom: 10,
          }}
        >
          <FontAwesome name="lock" size={24} color="black" />
          <TextInput
            //   value={this.state.empid}
            //   onChange={this.handleChange}
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            placeholder={"Password"}
            placeholderTextColor="red"
            secureTextEntry
            name="password"
            style={{ paddingLeft: 10, width: "80%" }}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Home")}
        >
          <Text style={{ fontSize: 20, color: "white" }}>Login</Text>
          <Text></Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonfarmer}
          // onPress={this.onLogin.bind(this)}
        >
          <Text style={{ fontSize: 20, color: "white" }}>Farmer Login</Text>
          <Text></Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity style={styles.button2}>
            <Text style={{ color: "white", fontSize: 20 }}>Gmail</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1}>
            <Text style={{ color: "white", fontSize: 20 }}>Facebook</Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center", marginBottom: 20 }}>
          <Text
            style={{ color: "gold", fontSize: 20 }}
            onPress={() => Linking.openURL("https://google.com")}
          >
            Forget Password?
          </Text>

          <Text
            style={{ fontSize: 20 }}
            onPress={() => Linking.openURL("https://google.com")}
          >
            Dont have account?Sign Up now
          </Text>
        </View>
        </View>
        <View>
          <View style={styles.buble3}></View>
          <View style={styles.buble4}></View>
        </View>
        
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    fontSize: 10,
    justifyContent: "flex-start",
    margin: 10,
    color: "black",
    fontWeight: "bold",
  },

  input: {
    width: 200,
    height: 44,
    paddingLeft: 30,
    borderBottomWidth: 1,

    borderColor: "black",
    marginBottom: 20,
    backgroundColor: "white",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#2F9A3C",
    width: "100%",
    height: 44,
    color: "white",
    padding: 10,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 25,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonfarmer: {
    alignItems: "center",
    backgroundColor: "blue",
    width: "100%",
    height: 44,
    color: "white",
    padding: 10,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 25,
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    height: height * 0.2,
    width: width * 0.4,
    marginBottom: height * 0.06,
    borderRadius: 100,
  },
  button1: {
    color: "white",
    alignItems: "center",
    backgroundColor: "#0D68B9",
    width: 150,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 25,
    marginBottom: 10,
  },
  button2: {
    alignItems: "center",
    backgroundColor: "#F55362",
    width: 150,
    height: 44,
    padding: 10,
    color: "white",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 25,
    marginBottom: 10,
  },
  buble: {
    backgroundColor: "#78B93B",
    height: height * 0.15,
    width: width * 0.29,
    marginLeft: width * -0.21,
    marginTop: height * -0.06,
    borderRadius: height * 0.2,
    position: "absolute",
    left: 0,

    top: 0,
  },
  buble2: {
    backgroundColor: "#FCC93B",
    height: height * 0.15,
    width: width * 0.29,
    marginLeft: width * -0.04,
    marginTop: height * -0.11,
    borderRadius: height * 0.2,
    position: "absolute",
    left: 0,

    top: 0,
  },
  buble3: {
    backgroundColor: "#FCC93B",
    height: 170,
    width: 170,
    marginBottom: -height * 0.17,
    marginRight: -width * 0.33,
    borderRadius: 100,
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  buble4: {
    backgroundColor: "#78B93B", //green
    height: 170,
    width: 170,
    marginBottom: -height * 0.24,
    marginRight: -width * 0.21,
    borderRadius: 200,
    position: "absolute",
    right: 0,
    bottom: 0,
  },
});
