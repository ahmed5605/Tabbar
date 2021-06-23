import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/HomeScreen';
import ProfileScreen from './src/ProfileScreen';
import SettingScreen from './src/SettingScreen';
import ExploreScreen from './src/ExploreScreen';
import Icon from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainTabScreen from './src/Tabbar/MainTabScreen';
import ImageScreen from './src/ImageScreen';

import { DrawerContent } from './src/Drawer/DrawerContent';

const Drawer = createDrawerNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainTabScreen} />
        <Drawer.Screen name="Image" component={ImageScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App