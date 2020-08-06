import React, {Component} from 'react'
import { Text, View, SafeAreaView, Image,StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { FontAwesome5,MaterialCommunityIcons,MaterialIcons,AntDesign,Feather } from '@expo/vector-icons';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import image2 from "../assests/Images/logo.png";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;



class CustomDrawerContent extends Component {
    
    state = {
        image: 'null',
        name:'sravan Kumar Reddy dfldsahdsajdsadsajdja',
        number:'1234567890',
      };
pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 4],
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

    render() {
        const { image } = this.state;
        
        return (
            <SafeAreaView style={styles.container}>
                {/* image View */}
               
                <View style={styles.imgview}>
                <View style={styles.view}>
            <View style={styles.imageview}>
            <TouchableOpacity title="Pick an image from camera roll" onPress={this.pickImage}  >
        {this.state.image === 'null' ? <Image source={image2} style={styles.imagestyle} />: <Image source={{ uri: image }} style={styles.imagestyle} />}
        <Feather name="edit" size={24} color="white" style={styles.icon} />
        </TouchableOpacity>
        
            </View>
            <View>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.text}>Welcome </Text>
        <Text style={{color:'white',fontSize:height*0.023,fontStyle:'italic',margin:height*0.004,fontWeight:'bold'}}>{this.state.name}</Text>
                </View>
            
        <Text style={styles.text}>{this.state.number}</Text>
            </View>
            </View>
            </View>

{/* menu items */}
            <View style={{borderBottomColor:'black',borderBottomWidth:height*0.0005}}>
                
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home1')}>
                    <View  style={styles.drawer}>
                        <View><MaterialIcons name="dashboard" size={20} color="black" /></View>
                        <View ><Text style={styles.item} > Dashboard</Text></View>
                    
                
                </View>
                </TouchableOpacity>
                
            
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home1')}>
                   <View  style={styles.drawer}>
                    <View><FontAwesome5 name="user-injured" size={24} color="black" /></View>
                    <View ><Text  style={styles.item}> Farmer</Text></View>
                </View>
                </TouchableOpacity>
                
                <TouchableOpacity
               
                onPress={() => this.props.navigation.navigate('Home1')}
                >
                    <View  style={styles.drawer}>
                    <View><MaterialCommunityIcons name="treasure-chest" size={24} color="black" /></View>
                <View><Text style={styles.item}>Loan Booking</Text></View>
                </View>
                </TouchableOpacity>
                
               <TouchableOpacity
                
                onPress={() => this.props.navigation.navigate('Blog')}
                ><View style={styles.drawer}>
                    <View><AntDesign name="customerservice" size={24} color="black" /></View>
                <View><Text style={styles.item}>Help</Text></View>
                </View>
                </TouchableOpacity>
                
            </View>
            
        {/* signout view */}
         <View >
         <Text style={{margin:10,fontSize:18}}>SignOut</Text>
                <TouchableOpacity
                
                onPress={() => this.props.navigation.navigate('Login')}
                ><View style={styles.drawer}>
                <View><Feather name="power" size={24} color="black" /></View>
                <View ><Text style={styles.item}>Signout</Text></View>
                </View>
                
                </TouchableOpacity>
         </View>
        
      
          
            </SafeAreaView>
        )
    }
}

export default CustomDrawerContent


const styles = StyleSheet.create({
    container:{
        marginTop:Constants.statusBarHeight,
        
    },
    drawer:{
        flexDirection:'row',
        margin:10,
        
        
    },
    item:{
        marginLeft:20,
        fontSize:18,
        fontWeight:'bold',
       
    },
    view:{
        margin:height*0.013,
      
    },
    imgview:{
        backgroundColor:'#43AD4B', 
    },
    text:{
        color:'white',
        fontSize:height*0.023,
        margin:height*0.004,
        
        fontWeight:'bold'
    },
    imagestyle:{
borderRadius:height*0.09,
height:height*0.17,
width:width*0.34,
    },
    
imageview:{

    height:height*0.18,
width:width*0.28,


},
icon:{
    position:'absolute',
    top:height*0.113,
    left:width*0.24,
    backgroundColor:'black',
    borderRadius:height*0.5,
    height:height*0.05,
    width:width*0.09,
    padding:height*0.01


}

})