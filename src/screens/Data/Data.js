import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, {useContext, useState}  from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { SelectList } from 'react-native-dropdown-select-list';
import BillsInputWithText from '../../components/BillsInputWithText/BillsInputWithText';
import CustomButtonTwo from '../../components/CustomButtonTwo/CustomButtonTwo';

const Data = () => {
  const [selectPlan, setSelectPlan] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [network, setNetwork] = useState('');

  const Networks =[
    { value: 'AIRTEL' },
    { value: 'GLO' },
    { value: 'MTN' },
    { value: '9MOBILE' },
    { value: 'SMILE' },
    { value: 'NTEL' },
    { value: 'SPECTRANET' },
    { value: 'SWIFT' },
  ];  

  const Plans =[
    { value: '250MB 1 Night @ ₦25.00'},
    { value: '50MB 1 Day @ ₦50.00' },
    { value: '500MB 1 Night @ ₦50.00' },
    { value: '150MB 1 Day @ ₦100.00' },
    { value: '1GB 5 Nights @ ₦100.00' },
    { value: '1.25GB 1 Day @ ₦200.00' },
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
      <View style={styles.selectPlan}>
        <Text style={styles.Label}>Select Plan</Text>
        <SelectList
            boxStyles= {{ backgroundColor: '#dbdedf' }}
            dropdownStyles= {{ backgroundColor: '#dbdedf' }}
            style={styles.selectNetwork}
            labeltext={'Select Plan'}
            label={'Select Plan'}
            data={Plans}
            save={'key'}
            textlabel={'Select Plan'}
            setSelected={(val) => setSelectPlan(val)} 
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
      paddingTop: 45,
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
  selectPlan:{
    paddingLeft: 25,
      paddingTop: 40,
      width: 400,
  }
})
export default Data