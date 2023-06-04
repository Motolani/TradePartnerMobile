import { View, Text, useWindowDimensions, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, {useContext, useState}  from 'react'
import { TextInput, Avatar } from '@react-native-material/core';
import InputWithText from '../../components/InputWithText/InputWithText';
import CustomButton from '../../components/CustomButton/CustomButton';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AuthContext } from '../../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomButtonTwo from '../../components/CustomButtonTwo/CustomButtonTwo';

const Pinpage = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [first, setFirst] = useState(null);
  const [firstIndex, setFirstIndex] = useState(false);
  const [second, setSecond] = useState(null);
  const [secondIndex, setSecondIndex] = useState(false);
  const [third, setThird] = useState(null);
  const [thirdIndex, setThirdIndex] = useState(false);
  const [fourth, setFourth] = useState(null);
  const [fourthIndex, setFourthIndex] = useState(false);
  const [activateSubmit, setActivateSubmit] = useState(false);


  const { signIn } = useContext(AuthContext); 

  const onSubmit = async() => {
    await signIn(email, password);
    console.log(email, password);
  }

  const enterDigits = (value) =>{
    console.log('here')
    console.log(first)
    if(first == null){
      if(value != 'back'){
        setFirst(value) 
        setFirstIndex(true)
      }
      console.log(first)
      
    }else if(first != null && second == null){
      if(value == 'back'){
        setFirst(null)
        setFirstIndex(false)
      }else{
        setSecond(value)
        setSecondIndex(true)
      }
    }else if(first != null && second != null && third == null){
      if(value == 'back'){
        setSecond(null)
        setSecondIndex(false)
      }else{
        setThird(value)
        setThirdIndex(true)
      }
    }else if(first != null && second != null && third != null && fourth == null){
      if(value == 'back'){
        setThird(null)
        setThirdIndex(false)
      }else{
        setFourth(value)
        setFourthIndex(true)
      }
    }else if(first != null && second != null && third != null && fourth != null){
      if(value == 'back'){
        setFourth(null)
        setFourthIndex(false)
      }
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerTwo}>
        <View style={styles.digitsViews}>
          {firstIndex ? <View style={styles.digitsViewRowFirstFilled}></View> : <View style={styles.digitsViewRowFirst}></View> }
          {secondIndex ? <View style={styles.digitsViewRowSecondFilled}></View>:<View style={styles.digitsViewRowSecond}></View>}
          {thirdIndex ? <View style={styles.digitsViewRowThirdFilled}></View>:<View style={styles.digitsViewRowThird}></View>}
          {fourthIndex ? <View style={styles.digitsViewRowFourthFilled}></View>:<View style={styles.digitsViewRowFourth}></View>}
        </View>

        <View style={styles.digits}>
          <TouchableOpacity onPress={() => enterDigits(1)}>
            <View style={styles.digitsRowFirst}>
              <Text style={styles.digitsRowFirstText}>1</Text>
            </View>
          </TouchableOpacity >
          <TouchableOpacity onPress={() => enterDigits(2)}>
            <View style={styles.digitsRowSecond}>
              <Text style={styles.digitsRowFirstText}>2</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => enterDigits(3)}>
            <View style={styles.digitsRowThird}>
              <Text style={styles.digitsRowFirstText}>3</Text>
            </View>
          </TouchableOpacity>
        </View>
        
        <View style={styles.digits}>
          <TouchableOpacity onPress={() => enterDigits(4)}>
            <View style={styles.digitsRowFirst}>
              <Text style={styles.digitsRowFirstText}>4</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => enterDigits(5)}>
            <View style={styles.digitsRowSecond}>
              <Text style={styles.digitsRowFirstText}>5</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => enterDigits(6)}>
            <View style={styles.digitsRowThird}>
              <Text style={styles.digitsRowFirstText}>6</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.digits}>
          <TouchableOpacity onPress={() => enterDigits(7)}>
            <View style={styles.digitsRowFirst}>
              <Text style={styles.digitsRowFirstText}>7</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => enterDigits(8)}>
            <View style={styles.digitsRowSecond}>
              <Text style={styles.digitsRowFirstText}>8</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => enterDigits(9)}>
            <View style={styles.digitsRowThird}>
              <Text style={styles.digitsRowFirstText}>9</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.digits}>
          <TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => enterDigits(0)}>
            <View style={styles.digitsRowSecondLast}>
              <Text style={styles.digitsRowFirstText}>0</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => enterDigits('back')}>
            <View style={styles.digitsRowThirdLast}>
              <Icon name="backspace"  size={42} color="#0c456d" style={styles.back}/>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
        {fourthIndex ? <CustomButtonTwo
          text="Confirm"
          // onPress={() => navigation.navigate('Pinpage')}
          type="PinspayTwo"
          textColor="Green"
        />:<CustomButtonTwo
        text="Enter Pin"
        disabled={true}
        // onPress={() => navigation.navigate('Pinpage')}
        type="Disabled"
        textColor="Disabled"
      /> }
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 20,
    alignItems: "center",
    // backgroundColor: "#cae8f5",
    backgroundColor: "#7a7e85",
  },
  containerTwo:{
    flex: 1,
    padding: 20,
    alignItems: "center",
    // backgroundColor: "#cae8f5",
    backgroundColor: "#7a7e85",
  },
  button:{
    marginTop:30,
  },
  SiginRegisterButtonView:{
    flexDirection: 'row',
    marginTop: 1,
    alignContent: "center",

  },
  SigupRegisterButtonViewTwo:{
    marginTop: -8,
  },
  topHalf:{
    height: hp('33%'),
    // width: hp('100%'),
    // backgroundColor: '#0598db',
  },
  logo:{
    marginTop: 80,
    //  width: hp('30%'),
    //  height: hp('33%'),

  },
  digits:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: hp('2.5%')
  },
  digitsRowFirst:{
    width: hp('8%'),
    height: hp('8%'),
    backgroundColor: '#5cdb93',
    borderRadius: 40,
    marginTop: 10,
    borderColor: '#0c456d',
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  digitsRowFirstText:{
    paddingTop: hp('3%'),
    color: '#0c456d',
    fontWeight:'bold'
  },
  digitsViewRowFirst:{
    width: hp('8%'),
    height: hp('8%'),
    backgroundColor: '#b1b7bd',
    borderRadius: 40,
    marginTop: 10,
    borderColor: '#0c456d',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  digitsViewRowSecond:{
    width: hp('8%'),
    height: hp('8%'),
    backgroundColor: '#b1b7bd',
    borderRadius: 40,
    marginTop: 10,
    borderColor: '#0c456d',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: hp('1%')
  },
  digitsViewRowThird:{
    width: hp('8%'),
    height: hp('8%'),
    backgroundColor: '#b1b7bd',
    borderRadius: 40,
    marginTop: 10,
    borderColor: '#0c456d',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: hp('1%')
  },
  digitsViewRowFourth:{
    width: hp('8%'),
    height: hp('8%'),
    backgroundColor: '#b1b7bd',
    borderRadius: 40,
    marginTop: 10,
    borderColor: '#0c456d',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  digitsViews:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: hp('8%')
  },
  digitsRowSecond:{
    width: hp('8%'),
    height: hp('8%'),
    backgroundColor: '#5cdb93',
    borderRadius: 40,
    marginTop: 10,
    borderColor: '#0c456d',
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: hp('3%')
  },
  digitsRowThird:{
    width: hp('8%'),
    height: hp('8%'),
    backgroundColor: '#5cdb93',
    borderRadius: 40,
    marginTop: 10,
    borderColor: '#0c456d',
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  digitsRowSecondLast:{
    width: hp('8%'),
    height: hp('8%'),
    backgroundColor: '#5cdb93',
    borderRadius: 40,
    marginTop: 10,
    borderColor: '#0c456d',
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // marginHorizontal: hp('1%'),
    marginLeft: hp(10)
  },
  digitsRowThirdLast:{
    marginTop: hp('3%'),
    marginLeft: hp(6)
  },
  digitsViewRowFirstFilled:{
    width: hp('8%'),
    height: hp('8%'),
    backgroundColor: '#0c456d',
    borderRadius: 40,
    marginTop: 10,
    borderColor: '#0c456d',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  digitsViewRowSecondFilled:{
    width: hp('8%'),
    height: hp('8%'),
    backgroundColor: '#0c456d',
    borderRadius: 40,
    marginTop: 10,
    borderColor: '#0c456d',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: hp('1%')
  },
  digitsViewRowThirdFilled:{
    width: hp('8%'),
    height: hp('8%'),
    backgroundColor: '#0c456d',
    borderRadius: 40,
    marginTop: 10,
    borderColor: '#0c456d',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: hp('1%')
  },
  digitsViewRowFourthFilled:{
    width: hp('8%'),
    height: hp('8%'),
    backgroundColor: '#0c456d',
    borderRadius: 40,
    marginTop: 10,
    borderColor: '#0c456d',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})
export default Pinpage