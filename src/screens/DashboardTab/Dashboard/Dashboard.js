import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground} from 'react-native'
import React, {useContext, useState}  from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Logo from '../../../../assets/img/logo4.png'
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../../../context/AuthContext';
import IMG from '../../../../assets/img/backgroundSamp.png'

const Dashboard = ({navigation}) => {

  const { user, walletBalance, signOut } = useContext(AuthContext); 
  const [showBalance, setShowBalance] = useState(false);

  const toggleBalance = () => {
    if(showBalance){
      setShowBalance(false);
    }else{
      setShowBalance(true);
    }
  }
  // {user.name}
  return (
    <View style={styles.container}>
      <View style={styles.preBalanceContainer}>
        <TouchableOpacity style={styles.AvatarContainer} >
          <Icon name="happy" size={68} color="#bcc0c5" style={styles.Avatar} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.userNameContainer}>
          <Text style={styles.userNameHi} > Hello, </Text>
          <Text style={styles.userName} > {user.name} </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutContainer} onPress={() => signOut()}>
          <Icon name="log-in-outline" size={68} color="#14407f" style={styles.logout} />
        </TouchableOpacity>
      </View>
      <View style={styles.balanceCardContainer}>
        <View style={styles.balanceCard}>
          <ImageBackground source={IMG} resizeMode="cover" style={styles.image}>
            <View style={styles.balanceMajorContainer}>
              <View style={styles.balanceCaptionContainer}>
                <Text style={styles.balanceCaption}>Avaliable Balance</Text>
              </View>
              <View style={styles.balanceAndToggle}>
                {showBalance && <Text style={styles.theBalance}>₦ {walletBalance}</Text>}
                {!showBalance && <Text style={styles.theBalance}>₦ *******</Text>}

                <TouchableOpacity style={styles.toggleContainer} onPress={() => toggleBalance()}>
                  <Icon name="eye" size={28} color="#5cdb93" style={styles.toggle}/>
                </TouchableOpacity>
              </View>
              <View style={styles.fundWalletContainer}>
                <TouchableOpacity >
                  <Icon name="wallet" size={28} color="#5cdb93" style={styles.fundWallet}/>
                </TouchableOpacity>
                <TouchableOpacity >
                  <Text style={styles.fundWalletCaption}> Fund Wallet</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
      <ScrollView style={styles.mainBottomContainer}>
          
          <View style={styles.menuOptions}>
            <View style={styles.menuOptionsTop}>

              <View style={styles.ContainerFirstOne}>
                <TouchableOpacity onPress={() => navigation.navigate('Airtime')}>
                  <Icon name="call"  size={42} color="#0c3258" style={styles.airtime}/>
                  <Text style={styles.optionCaption}>Airtime</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.ContainerFirstTwo}>
                <TouchableOpacity onPress={() => navigation.navigate('Data')}>
                  <Icon name="chatbubbles"  size={42} color="#0c3258" style={styles.data}/>
                  <Text style={styles.optionCaptionData}>Data</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.ContainerFirstThree}>
                <TouchableOpacity onPress={() => navigation.navigate('Bills')}>
                  <Icon name="cash"  size={42} color="#0c3258" style={styles.bills}/>
                  <Text style={styles.optionCaptionBills}>Bills</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.menuOptionsMiddle}>

              <View style={styles.ContainerSecondOne}>
                <TouchableOpacity onPress={() => navigation.navigate('Transactions')}>
                  <Icon name="receipt"  size={42} color="#0c3258" style={styles.transactions}/>
                  <Text style={styles.optionCaptionTransactions}>Transactions</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.ContainerSecondTwo}>
                <TouchableOpacity onPress={() => navigation.navigate('WalletHistory')}>
                  <Icon name="card"  size={42} color="#0c3258" style={styles.wallet}/>
                  <Text style={styles.optionCaptionWallet}>Wallet History</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.ContainerSecondThree}>
                <TouchableOpacity onPress={() => navigation.navigate('CableService')}>
                  <Icon name="tv"  size={42} color="#0c3258" style={styles.bills}/>
                  <Text style={styles.optionCaptionSoon}>Cable Service</Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#7a7e85',
  },
  balanceCardContainer:{
    alignItems: 'center',
  },
  balanceCard:{
    width: hp('43%'),
    height: hp('22%'),
    backgroundColor: '#0c3258',
    marginTop: 10,
    borderRadius: 20,
  },
  image:{
    position: 'relative',
    // opacity: .4,
    width: hp('42%'),
    height: hp('30%'),
    marginLeft:2
  },
  Avatar:{
  },
  AvatarContainer:{
    // marginLeft: 18,
    marginTop: 10,
    marginLeft: 20
  },
  balanceCaptionContainer:{
    marginLeft: 25
  },
  balanceCaption:{
    fontWeight:'bold',
    color: '#dbdedf',
    marginTop:20,
    // fontSize: 15
  },
  balanceAndToggle:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 30,
    marginLeft: 5
  },
  theBalance:{
    marginLeft: 25,
    color: '#5cdb93',
    fontWeight:'bold',
    fontSize:18,
    marginTop: 4
  },
  toggleContainer:{
    paddingLeft: hp('24%')
  },
  fundWalletContainer:{
    marginTop: 25,
    marginLeft: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  balanceMajorContainer:{
    marginTop: 10
  },
  fundWalletCaptionContainer:{
    marginTop: 15,
    marginLeft: 25,

  },
  fundWalletCaption:{
    color: '#5cdb93',
    fontWeight:'bold',
    marginTop:7
    // fontSize:15,
  },
  preBalanceContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  userName:{
    color: '#bcc0c5',
    fontWeight:'bold',
    marginTop:5,
    fontSize:18,
    lineHeight:18
  },
  userNameHi:{
    color: '#bcc0c5',
    fontWeight:'bold',
    marginTop:13,
    fontSize:18,
    lineHeight:18
  },
  userNameContainer:{
    marginLeft: 15,
    marginTop: 14,
  },
  logoutContainer:{
    marginTop: 10,
    marginLeft: 105
  },
  menuOptions:{
    backgroundColor: '#b1b7bd',
    marginTop: 60,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    height:hp('45%'),

  },
  optionCaption:{
  },
  airtime:{
    
  },
  ContainerFirstOne:{
    marginLeft: hp('5%'),
    marginTop: hp('2.5%'),
  },
  ContainerFirstTwo:{
    marginLeft: hp('10%'),
    marginTop: hp('2.5%'),
  },
  ContainerFirstThree:{
    marginLeft: hp('10%'),
    marginTop: hp('2.5%'),
  },
  optionCaptionData:{
    marginLeft: 5,
    marginTop:10,
    fontWeight: '600'
  },
  optionCaptionBills:{
    marginLeft: 6,
    marginTop:10,
    fontWeight: '600'
  },
  menuOptionsTop:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 30
  },
  menuOptionsMiddle:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 25
  },
  ContainerSecondOne:{
    marginLeft: hp('3%'),
    marginTop: hp('2.5%'),
  },
  ContainerSecondTwo:{
    marginLeft: hp('8%'),
    marginTop: hp('2.5%'),
  },
  ContainerSecondThree:{
    marginLeft: hp('7%'),
    marginTop: hp('2.5%'),
  },
  transactions:{
    marginLeft: 20
  },
  optionCaptionWallet:{
    marginLeft: -25,
    marginTop:10,
    fontWeight: '600'
  },
  optionCaptionSoon:{
    marginLeft: -22,
    marginTop:10,
    fontWeight: '600'
  },
  optionCaptionTransactions:{
    marginTop:10,
    fontWeight: '600'
  },
  optionCaption:{
    marginTop:10,
    fontWeight: '600'
    
  }
})
export default Dashboard