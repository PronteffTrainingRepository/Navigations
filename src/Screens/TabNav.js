import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Blog from './Blog'
import HomeScreen from './Home'
import { View } from 'react-native';
import Profile from './Profile'

const Tab = createBottomTabNavigator();

class TabNav extends Component {
    render() {
        return (
          
                <Tab.Navigator headerMode='none'>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Blog" component={Blog} />
    </Tab.Navigator>
           
            
        )
    }
}

export default TabNav;


