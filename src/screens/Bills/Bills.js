import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, {useContext, useState}  from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { SelectList } from 'react-native-dropdown-select-list';
import BillsInputWithText from '../../components/BillsInputWithText/BillsInputWithText';
import CustomButtonTwo from '../../components/CustomButtonTwo/CustomButtonTwo';

const Bills = () => {
  const [amount, setAmount] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [meterNumber, setMeterNumber] = useState('');
  const [provider, setProvider] = useState('');

  const Discos =[
    { value: 'Eko Disco Prepaid'},
    { value: 'Eko Disco Postpaid' },
    { value: 'Enugu Disco Prepaid' },
    { value: 'Enugu Disco Postpaid' },
    { value: 'Ibadan Disco Prepaid' },
    { value: 'Ibadan Disco Postpaid' },
    { value: 'Ikeja Disco Prepaid' },
    { value: 'Ikeja Disco Postpaid' },
    { value: 'Abuja Disco Prepaid' },
    { value: 'Abuja Disco Postpaid' },
    
  ];  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.selectNetwork}>

        <Text style={styles.Label}>Select Provider</Text>
        <SelectList
            boxStyles= {{ backgroundColor: '#dbdedf' }}
            dropdownStyles= {{ backgroundColor: '#dbdedf' }}
            style={styles.selectNetwork}
            labeltext={'Select Provider'}
            label={'Select Provider'}
            data={Discos}
            save={'key'}
            textlabel={'Select Provider'}
            setSelected={(val) => setProvider(val)} 
        />

      <View style={styles.enterMeter}>
        <BillsInputWithText 
          placeholder="Enter Meter Number"
          value={meterNumber}
          setValue={setMeterNumber}
          label="Meter Number"
        />
      </View>

      </View>
      <View style={styles.enterAmount}>
        <BillsInputWithText 
          placeholder="Enter Amount"
          value={amount}
          setValue={setAmount}
          label="Amount"
        />
      </View>

      <View style={styles.enterPhone}>
        <BillsInputWithText 
          placeholder="Enter Phone Number"
          value={phoneNumber}
          setValue={setPhoneNumber}
          label="Phone Number"
        />
      </View>

      <View style={styles.submitButtonContainer}>
        <CustomButtonTwo
          text="Continue"
          // onPress={onSubmit}
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
      paddingTop: 25,
      paddingLeft: 25,
    },
    enterAmount:{
      paddingTop: 20,
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
  enterMeter:{
    paddingTop: 40,
  }
})
export default Bills