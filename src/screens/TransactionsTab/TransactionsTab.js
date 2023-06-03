import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import AirtimeTransactions from './AirtimeTransactions/AirtimeTransactions';
import BillsTransactions from './BillsTrnasactions/BillsTransactions';
import DataTransaction from './DataTransaction/DataTransaction';

const TransactionsTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen 
        name="Airtime" 
        component={AirtimeTransactions} 
        options={{
          tabBarLabel:'Airtime',   
          tabBarStyle: { backgroundColor: '#0c456d'},   
          tabBarActiveTintColor: '#5cdb93',
          tabBarInactiveTintColor: '#2f92d2',
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="call" size={32} color="#5cdb93" />
          )
        }}/>
      <Tab.Screen 
        name="Data" 
        component={DataTransaction} 
        options={{
          tabBarLabel:'Data',   
          tabBarStyle: { backgroundColor: '#0c456d' },
          tabBarActiveTintColor: '#5cdb93',
          tabBarInactiveTintColor: '#2f92d2',   
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="chatbubbles" size={28} color="#5cdb93" />
          ),
          
        }}/>
        <Tab.Screen 
        name="Bills" 
        component={BillsTransactions} 
        options={{
          tabBarLabel:'Bills',   
          tabBarStyle: { backgroundColor: '#0c456d' },
          tabBarActiveTintColor: '#5cdb93',
          tabBarInactiveTintColor: '#2f92d2',   
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="cash" size={28} color="#5cdb93" />
          ),
          
        }}/>
        
    </Tab.Navigator>
  )
}

export default TransactionsTab