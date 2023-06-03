import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, {useContext, useState}  from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { SelectList } from 'react-native-dropdown-select-list';
import BillsInputWithText from '../../components/BillsInputWithText/BillsInputWithText';
import CustomButtonTwo from '../../components/CustomButtonTwo/CustomButtonTwo';

const CabelTv = () => {
  const [selectPlan, setSelectPlan] = useState('');
  const [provider, setProvider] = useState('');
  const [smartCard, setSmartCard] = useState('');
  const [amount, setAmount] = useState('');


  const Networks =[
    { value: 'DSTV' },
    { value: 'GOTV' },
    { value: 'STARTIMES' },
    { value: 'SHOWMAX' },
  ];  

  const Plans =[
    { value: 'DStv Premium | 10 Month'},
    { value: 'DStv Premium | 12 Month'},
    { value: 'DStv Premium + French 11 Bouquet E36 | 1 Month'},
    { value: 'DStv Premium French | 1 Month' },
    { value: 'DStv Premium French | 2 Month' },
    { value: 'DStv Premium French | 3 Month' },
  ]; 
  return (
    <ScrollView style={styles.container}>
      <View style={styles.selectNetwork}>



      {/* <View style={styles.dropdown}> */}
        <Text style={styles.Label}>Select Provider</Text>
        <SelectList
            boxStyles= {{ backgroundColor: '#dbdedf' }}
            dropdownStyles= {{ backgroundColor: '#dbdedf' }}
            style={styles.selectNetwork}
            labeltext={'Choose a provider'}
            label={'Choose a provider'}
            data={Networks}
            save={'key'}
            textlabel={'Choose a provider'}
            setSelected={(val) => setProvider(val)} 
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
          placeholder="Smartcard Number"
          value={smartCard}
          setValue={setSmartCard}
          label="Enter Smartcard Number"
        />
      </View>

      <View style={styles.enterDisplayAmount}>
        <BillsInputWithText 
          placeholder="Amount"
          value={amount}
          setValue={setAmount}
          label="Display Amount"
          editable={false}
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
  },
  enterDisplayAmount:{
    paddingTop: 23,
    paddingLeft: 25,
  }
})
export default CabelTv