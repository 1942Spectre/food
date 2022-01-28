import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {CreateAppContainer} from 'react-navigation';
import {CreateStackNavigator} from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';

const navigator = CreateStackNavigator({
  Search: SearchScreen
},{
  initialRouteName:'Search',
  defaultNavigationOptions:{
    title:'Business Search'
  }
})

export default CreateStackNavigator