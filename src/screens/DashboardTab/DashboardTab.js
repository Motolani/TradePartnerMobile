import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Dashboard from './Dashboard/Dashboard';
import Icon from 'react-native-vector-icons/Ionicons';
import ContactGroups from './Account/Account';
import AccountSettings from '../AccountSettings/AccountSettings';

const DashboardTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen 
        name="Home" 
        component={Dashboard} 
        options={{
          tabBarLabel:'Home',   
          tabBarStyle: { backgroundColor: '#0c3258'},   
          tabBarActiveTintColor: '#5cdb93',
          tabBarInactiveTintColor: '#2f92d2',
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="ios-home" size={32} color="#5cdb93" />
          )
        }}/>
      <Tab.Screen 
        name="ContactGroups" 
        component={AccountSettings} 
        options={{
          tabBarLabel:'Account',   
          tabBarStyle: { backgroundColor: '#0c3258' },
          tabBarActiveTintColor: '#5cdb93',
          tabBarInactiveTintColor: '#2f92d2',   
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="person-circle" size={28} color="#5cdb93" />
          ),
          
        }}/>
        
    </Tab.Navigator>
  )
}

export default DashboardTab