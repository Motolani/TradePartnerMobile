import { View, Text, useWindowDimensions, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, {useContext, useState}  from 'react'
import { TextInput, Avatar } from '@react-native-material/core';
import InputWithText from '../../components/InputWithText/InputWithText';
import CustomButton from '../../components/CustomButton/CustomButton';
import { Button } from '@rneui/themed';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AuthContext } from '../../context/AuthContext';
// import { Icon } from 'react-native-vector-icons/Ionicons';
import Logo from '../../../assets/img/logo2.png';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext); 

  const onSubmit = async() => {
    await signIn(email, password);
    console.log(email, password);
  }
  return (
    <View style={styles.container}>
      <View style={styles.topHalf}>  
          <Image source={Logo} style={styles.logo} />
      </View>

      <View style={styles.containerTwo}>
        <InputWithText
          placeholder="Email address"
          value={email}
          setValue={setEmail}
          label="Email Address"
        />
        <InputWithText
          placeholder="password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
          label="Password"
        />
        
        <View style={styles.button}>
          <CustomButton
            text="Log in"
            onPress={onSubmit}
            type="Pinspay"
            textColor="Blue"
          />
        </View>
        <View style={styles.SiginRegisterButtonView}>
          <Text style={styles.SigInText}> Forgot Password? </Text>
          <TouchableOpacity>
            <Button onPress={() => navigation.navigate('Register')} style={styles.SigupRegisterButtonViewTwo} size="sm" type="clear">
              Reset Password
            </Button> 
          </TouchableOpacity>
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
    backgroundColor: "#0c456d",
  },
  containerTwo:{
    flex: 1,
    padding: 20,
    alignItems: "center",
    // backgroundColor: "#cae8f5",
    backgroundColor: "#0c456d",
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

  }
})
export default Login