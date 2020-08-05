// screens/BlogDetails.js

import React, { Component } from "react";
import { Button, View, Text } from "react-native";

class BlogDetails extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Blog Details screen</Text>
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate('Home')}
/>
      </View>
    );
  }
}

export default BlogDetails;
