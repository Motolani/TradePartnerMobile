import { View, Text, StyleSheet } from 'react-native'
import {React, useState, useContext, useEffect,} from 'react'
import { SelectList } from 'react-native-dropdown-select-list';

const DropDownInput = ({ theLabel, dropdownElement, inputLabel}) => {
[selected, setSelected] = useState('');



  return (
    <View style={styles.dropdown}>
        <Text style={styles.Label}>{theLabel}</Text>
        <SelectList
            boxStyles= {{ backgroundColor: '#dbdedf' }}
            dropdownStyles= {{ backgroundColor: '#dbdedf' }}
            style={styles.selectList}
            labeltext={inputLabel}
            label={'lists'}
            data={dropdownElement}
            save={'key'}
            textlabel={inputLabel}
            setSelected={(val) => setSelected(val)} 
        />
    </View>
  )
}

export default DropDownInput

const styles = StyleSheet.create({
    dropdown:{
        paddingTop: 5,
        width: 380,
    },
    Label:{
        color: '#043c6a',
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom:6,
        alignItems: 'flex-start',
    },
    selectList:{
        backgroundColor: '#FFFFFF',
    }
})