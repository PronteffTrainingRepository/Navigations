import React, { Component } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home'
import TabNav from './TabNav'
import Blog from './Blog'
import BlogDetails from './BlogDetails'
import Login from './Login'
import CustomContent from './CustomDrawerContent'

const Drawer = createDrawerNavigator();

class DrawerNav extends Component {
    render() {
        return (
            <Drawer.Navigator initialRouteName="Home" headerMode='none' drawerContent={() => <CustomContent navigation={this.props.navigation} />   } >
            
            <Drawer.Screen  
              name="Home"
              component={TabNav}
             
            />
            <Drawer.Screen
              name="Blog"
              component={Blog}
              
            />
            <Drawer.Screen
              name="BlogDetails"
              component={BlogDetails}
              
            />
            <Drawer.Screen
              name="Login"
              component={Login}
              
            />
          </Drawer.Navigator>
        )
    }
}

export default DrawerNav
