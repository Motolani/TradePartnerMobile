import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, {useContext, useState}  from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { SelectList } from 'react-native-dropdown-select-list';
import BillsInputWithText from '../../components/BillsInputWithText/BillsInputWithText';
import CustomButtonTwo from '../../components/CustomButtonTwo/CustomButtonTwo';

const Airtime = ({navigation}) => {
  const [amount, setAmount] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [network, setNetwork] = useState('');

  const Networks =[
    { value: 'AIRTEL' },
    { value: 'GLO' },
    { value: 'MTN' },
    { value: '9MOBILE' },
    { value: 'SMILE' },
  ];  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.selectNetwork}>



      {/* <View style={styles.dropdown}> */}
        <Text style={styles.Label}>Select Network</Text>
        <SelectList
            boxStyles= {{ backgroundColor: '#dbdedf' }}
            dropdownStyles= {{ backgroundColor: '#dbdedf' }}
            style={styles.selectNetwork}
            labeltext={'Select Network'}
            label={'Select Network'}
            data={Networks}
            save={'key'}
            textlabel={'Select Network'}
            setSelected={(val) => setNetwork(val)} 
        />
    {/* </View> */}


      </View>
      <View style={styles.enterAmount}>
        <BillsInputWithText 
          placeholder="Enter Amount"
          value={amount}
          setValue={setAmount}
          label="Enter Amount"
        />
      </View>

      <View style={styles.enterPhone}>
        <BillsInputWithText 
          placeholder="Enter recipient phone number"
          value={phoneNumber}
          setValue={setPhoneNumber}
          label="Enter recipient phone number"
        />
      </View>

      <View style={styles.submitButtonContainer}>
        <CustomButtonTwo
          text="Continue"
          onPress={() => navigation.navigate('Enter Pin')}
          type="PinspayTwo"
          textColor="Green"
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#b1b7bd',
        // paddingBottom:100
    },
    selectNetwork:{
      paddingLeft: 25,
      paddingTop: 50,
      width: 400,
    },
    enterPhone:{
      paddingTop: 15,
      paddingLeft: 25,
    },
    enterAmount:{
      paddingTop: 40,
      paddingLeft: 25,
    },
    submitButtonContainer:{
      alignSelf: 'center',
      paddingTop: 15,
    },

    Label:{
      color: '#043c6a',
      fontWeight: 'bold',
      marginLeft: 10,
      marginBottom:6,
      alignItems: 'flex-start',
  },

})
export default Airtime