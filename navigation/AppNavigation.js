/* eslint-disable prettier/prettier */
//AppNavigation.js
import React from 'react';  
import {StyleSheet, Text, View,Button} from 'react-native';  
import {
   createStackNavigator, } from 'react-navigation-stack';
   import { createDrawerNavigator } from 'react-navigation-drawer';
   import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
   import {Icon} from 'react-native-elements';
   import History from '../screens/History';
import VoiceSMS from '../screens/VoiceSMS';
import TextSMS from '../screens/TextSMS';
import Profile from '../screens/Profile';

const HistoryNavigation = createStackNavigator(
  {
    History: { screen: History ,
      navigationOptions: {
        headerTitle: 'History',
      },
    }
  },
  
  
)

const TextSMSNavigation = createStackNavigator(
  {
    TextSMS: { screen: TextSMS ,
      navigationOptions: {
        headerTitle: 'TextSMS',
      },
    }
  },
    {
  headerMode: 'none'
}
  
)
const VoiceSMSNavigation = createStackNavigator(
  {
    VoiceSMS: { screen: VoiceSMS ,
      navigationOptions: {
        headerTitle: 'VoiceSMS',
      },
    }
  },
)

const ProfileNavigation = createStackNavigator({
  SettingsList: {
    screen: Profile,
    navigationOptions: {
      headerTitle: 'Profile',
    },
  },
  
});

const Tabs =  createMaterialBottomTabNavigator(
  {
 
    TextSMSNavigation: {  
      screen: TextSMSNavigation,  
      navigationOptions:{  
          tabBarLabel:'TextSMS',  
          tabBarIcon: ({ tintColor }) => (  
              <View>  
                  <Icon style={[{color: tintColor}]} size={25} name='message'/>  
              </View>),  
      },
       
  }, 

  VoiceSMSNavigation: {  
    screen: VoiceSMSNavigation,  
    navigationOptions:{  
        tabBarLabel:'VoiceSMS',  
        tabBarIcon: ({ tintColor }) => (  
            <View>  
                <Icon style={[{color: tintColor}]} size={25} name='volume-down'/>  
            </View>),  
    },
     
}, 
  

HistoryNavigation: {  
      screen: HistoryNavigation,  
      navigationOptions:{  
          tabBarLabel:'History',  
          tabBarIcon: ({ tintColor }) => (  
              <View>  
                  <Icon style={[{color: tintColor}]} size={25} name='folder'/>  
              </View>),  
      },
       
  }, 
},
  {
    initialRouteName: 'TextSMSNavigation',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
  }
);

const MainDrawer = createDrawerNavigator({
  Home: { screen: Tabs },
  Profile: { screen: ProfileNavigation },
  
}
,

);

export default MainDrawer