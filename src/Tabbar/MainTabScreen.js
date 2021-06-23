import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../HomeScreen'
import ProfileScreen from '../ProfileScreen';
import SettingScreen from '../SettingScreen';
import ExploreScreen from '../ExploreScreen';


import Icon from 'react-native-vector-icons/Ionicons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const MainTabScreen = () => {
    return (
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#fff"
          //barStyle={{ backgroundColor: '#009387' }}
        >
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarColor: '#009387',
              tabBarIcon: ({ color }) => (
                <Icon name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarColor: '#694fad',
              tabBarIcon: ({ color }) => (
                <Icon name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Setting"
            component={SettingScreen}
            options={{
              tabBarLabel: 'Setting',
              tabBarColor: '#1f65ff',
              tabBarIcon: ({ color }) => (
                <Icon name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Explore"
            component={ExploreScreen}
            options={{
              tabBarLabel: 'Explore',
              tabBarColor: '#d02860',
              tabBarIcon: ({ color }) => (
                <Icon name="home" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      );
}

export default MainTabScreen

const HomeStackScreen = ({navigation}) => {
    return(
       <HomeStack.Navigator
       screenOptions={{
         headerStyle: {
           backgroundColor: '#009387'
         },
         headerTintColor: '#fff',
         headerTitleStyle: {
           fontWeight: 'bold'
         }
       }}
     >
     <HomeStack.Screen 
         options={{
           title: "OverView",
           headerLeft: () => (
             <Icon name="menu"  size={25} backgroundColor="#fff" color="#fff" style={{marginLeft: 20}} onPress={() => navigation.openDrawer() } />
           )
         }}
         
         name="Home" component={HomeScreen} />
     </HomeStack.Navigator> 
    )
   }
   
   const ProfileStackScreen = ({navigation}) => {
     return(
       <ProfileStack.Navigator
                screenOptions={{
                  headerStyle: {
                    backgroundColor: '#009387'
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold'
                  }
                }}
          >
            <ProfileStack.Screen 
                  options={{
                    title: "Profile",
                    headerLeft: () => (
                     <Icon name="menu"  size={25} backgroundColor="#fff" color="#fff" style={{marginLeft: 20}} onPress={() => navigation.openDrawer() } />
                   )
                  }}
                  name="Profile" component={ProfileScreen} />
           </ProfileStack.Navigator> 
     )
    }