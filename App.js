import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useState, useContext} from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardTab from './src/screens/DashboardTab';
import TransactionsTab from './src/screens/TransactionsTab/TransactionsTab';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from './src/context/AuthContext';
import Login from './src/screens/Login';
import Airtime from './src/screens/Airtime/Airtime';
import Data from './src/screens/Data/Data';
import Bills from './src/screens/Bills/Bills';
import CabelTv from './src/screens/CabelTv/CabelTv';
import WalletHistory from './src/screens/WalletHistory/WalletHistory';
import AccountSettings from './src/screens/AccountSettings/AccountSettings';
import Pinpage from './src/screens/Pinpage/Pinpage';
const Stack = createNativeStackNavigator();
const App = ( navigation ) => {
  const { userToken, user } = useContext(AuthContext);

  return (
    <NavigationContainer style={styles.MainContainer}>
    <Stack.Navigator >
      {/* <Stack.Screen  options={{headerStyle: { backgroundColor: '#0c456d', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.03)'} }} name="Log in" component={Login} /> */}

      {userToken ? <Stack.Screen options= { ({navigation}) => ({ headerStyle: { backgroundColor: '#7a7e85', } })} name='Dashboard' component={DashboardTab} /> : <Stack.Screen  options={{headerStyle: { backgroundColor: '#0c456d', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.03)'} }} name="Log in" component={Login} />}  
      
      <Stack.Screen options= { ({navigation}) => ({ headerStyle: { backgroundColor: '#b1b7bd', } })} name="Transactions" component={TransactionsTab} /> 
      <Stack.Screen options= { ({navigation}) => ({ headerStyle: { backgroundColor: '#b1b7bd', } })} name="Airtime" component={Airtime} /> 
      <Stack.Screen options= { ({navigation}) => ({ headerStyle: { backgroundColor: '#b1b7bd', } })} name="Data" component={Data} /> 
      <Stack.Screen options= { ({navigation}) => ({ headerStyle: { backgroundColor: '#b1b7bd', } })} name="Bills" component={Bills} /> 
      <Stack.Screen options= { ({navigation}) => ({ headerStyle: { backgroundColor: '#b1b7bd', } })} name="CableService" component={CabelTv} /> 
      <Stack.Screen options= { ({navigation}) => ({ headerStyle: { backgroundColor: '#b1b7bd', } })} name="WalletHistory" component={WalletHistory} /> 
      <Stack.Screen options= { ({navigation}) => ({ headerStyle: { backgroundColor: '#7a7e85', } })} name="Enter Pin" component={Pinpage} /> 
    </Stack.Navigator>
    
    </NavigationContainer>
  )

}
const styles = StyleSheet.create({
  SetReminder:{
    marginRight: 25,
  },
  Background:{
    backgroundColor: '#e2f0fd'
  },
  MainContainer:{
    backgroundColor: '#e2f0fd'
  }
})

export default App