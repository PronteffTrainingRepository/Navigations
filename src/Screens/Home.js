import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

class HomeScreen extends Component {
  render() {
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              color: "white",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: height * 0.01,
              padding: height * 0.005,
            }}
          >
            <View
              style={{
                color: "white",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <MaterialIcons name="menu"  onPress={() => this.props.navigation.openDrawer()} size={35} color="white" />
              <View style={{ paddingLeft: height * 0.01 }}>
                <Text
                  style={{
                    color: "rgb(237, 234, 234)",
                    fontSize: 18,
                    fontWeight: "bold",
                    fontStyle: "italic",
                  }}
                >
                  Commercial Crops
                </Text>
                <Text
                  style={{
                    color: "rgb(237, 234, 234)",
                    fontSize: 20,
                    letterSpacing: 1,
                    fontStyle: "italic",
                  }}
                >
                  వాణిజ్య పంటలు
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <MaterialIcons name="settings" size={30} color="white" />
              {/* <SimpleLineIcons name="logout"  size={24} style={{color:'white',fontWeight:'bold'}} /> */}
              <MaterialCommunityIcons name="logout" onPress={() => this.props.navigation.navigate('Login')} size={30} color="white" />
</View>
          </View>
          <View style={styles.imgheadview}>
            <View style={styles.imgview}>
              <Image
                style={styles.image}
                source={require("../assests/Home/bottle.jpg")}
              />
              <Text style={styles.imgtext}>Bottle Guard</Text>
            </View>
            <View style={styles.imgview}>
              <Image
                style={styles.image}
                source={require("../assests/Home/carrot.jpeg")}
              />
              <Text style={styles.imgtext}>Carrot</Text>
            </View>
            <View style={styles.imgview}>
              <Image
                style={styles.image}
                source={require("../assests/Home/chilli.jpg")}
              />
              <Text style={styles.imgtext}>Green & Red Chillies</Text>
            </View>
            <View style={styles.imgview}>
              <Image
                style={styles.image}
                source={require("../assests/Home/leafy.jpg")}
              />
              <Text style={styles.imgtext}>Leafy Vegetables</Text>
            </View>
            <View style={styles.imgview}>
              <Image
                style={styles.image}
                source={require("../assests/Home/milk.jpg")}
              />
              <Text style={styles.imgtext}>Organic Milk</Text>
            </View>
            <View style={styles.imgview}>
              <Image
                style={styles.image}
                source={require("../assests/Home/paddy.jpg")}
              />
              <Text style={styles.imgtext}>Paddy/Rice</Text>
            </View>
            <View style={styles.imgview}>
              <Image
                style={styles.image}
                source={require("../assests/Home/potato.jpg")}
              />
              <Text style={styles.imgtext}>Potato</Text>
            </View>
            <View style={styles.imgview}>
              <Image
                style={styles.image}
                source={require("../assests/Home/pulses.jpg")}
              />
              <Text style={styles.imgtext}>Pulses</Text>
            </View>
            <View style={styles.imgview}>
              <Image
                style={styles.image}
                source={require("../assests/Home/tomato.jpg")}
              />
              <Text style={styles.imgtext}>Tomato</Text>
            </View>
            <View style={styles.imgview}>
              <Image
                style={styles.image}
                source={require("../assests/Home/wheat.jpg")}
              />
              <Text style={styles.imgtext}>Wheat</Text>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: height * 0.03,
    paddingLeft: height * 0.001,
    backgroundColor: "rgb(107, 188, 105)",

    //     alignItems: "center",
    //     justifyContent: "center",
  },
  image: {
    height: height * 0.15,
    width: width * 0.4,
  },
  imgheadview: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  imgview: {
    borderTopColor: "yellow",
    borderTopWidth: height * 0.009,
    alignItems: "center",
    borderWidth: height * 0.01,
    borderColor: "white",
    marginBottom: height * 0.02,
    backgroundColor: "white",
    borderRadius: height * 0.015,
    borderTopLeftRadius: height * 0.01,
    borderTopRightRadius: height * 0.01,
  },
  imgtext: {
    padding: height * 0.01,
    fontWeight: "bold",
    fontSize: 15,
  },
});
