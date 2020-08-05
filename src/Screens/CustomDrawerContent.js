import React, {Component} from 'react'
import { Text, View, SafeAreaView, Image,StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

class CustomDrawerContent extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{backgroundColor:'#43AD4B'}}>
            <View >
                <Image source={require('../assests/Home/chilli.jpg')}
                style={{height: 120, width: 120, borderRadius:60}}
                />
            </View>
            <View>
            <Text>Sravan kumar reddy</Text>
          <Text>1234567890</Text>
            </View>
            </View>
            <View>
            <TouchableOpacity style={{flexDirection:'row'}}
                style={{marginTop: 20}}
                onPress={() => this.props.navigation.navigate('Dashboard')}
                >
                    <MaterialIcons name="dashboard" size={24} color="black" />
                <Text>Dashboard</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{marginTop: 20}}
                onPress={() => this.props.navigation.navigate('Home')}
                >
                <Text>Dashboard</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{marginTop: 20}}
                onPress={() => this.props.navigation.navigate('Home')}
                >
                <Text>Loan Booking</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{marginTop: 20}}
                onPress={() => this.props.navigation.navigate('Home')}
                >
                <Text>Help</Text>
                </TouchableOpacity>
            </View>
            
         <View>
         <Text>SignOut</Text>
                <TouchableOpacity
                style={{marginTop: 20}}
                onPress={() => this.props.navigation.navigate('Home')}
                >
                <Text>Signout</Text>
                </TouchableOpacity>
         </View>
          
            </SafeAreaView>
        )
    }
}

export default CustomDrawerContent


const styles = StyleSheet.create({
    container:{
        marginTop:height*0.06,
        
    }
})