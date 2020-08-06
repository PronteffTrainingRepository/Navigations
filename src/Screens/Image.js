import * as React from 'react';
import { Button, Image, View, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import image2 from "../assests/Images/logo.png";

class ImagePickerExample extends React.Component {
  state = {
    image: 'null',
  };

  render() {
   
const {image} = this.state;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity title="Pick an image from camera roll" onPress={this._pickImage} >
        {this.state.image === 'null' ? <Image source={image2} style={{ width: 200, height: 200 }} />: <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        <Text>jakdsdsakh</Text>
        </TouchableOpacity>
   {/* {this.state.image === 'null' ? <Image source={image2} />: <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
      </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };
}
export default ImagePickerExample