import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
// import styles from '../../../style';

const BillsInputWithText = ({value, setValue, placeholder, secureTextEntry, keyboardType, maxLength, label, editable, selectTextOnFocus }) => {
  return (
    <View>
        <Text style={styles.Label}>{label}</Text>
        <TextInput 
          boxStyles= {{ backgroundColor: '#dbdedf' }}
          value={value}
          onChangeText= {setValue}
          placeholder={placeholder}
          style={styles.customInput}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          maxLength={maxLength}
          editable={editable}
          selectTextOnFocus={selectTextOnFocus}
          />
    </View>
  )
  
}
const styles = StyleSheet.create({ 
  customInput:{
    backgroundColor: "#dbdedf",
    marginTop: 8,
    marginVertical: 5,
    width: 380,
    borderColor: '#777777',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 15,
    paddingLeft: 25,
    marginBottom: 25 ,
    
},
Label:{
    fontWeight: 'bold',
    marginLeft: 14,
    color: '#043c6a'
    
}
});
export default BillsInputWithText

