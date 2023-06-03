import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, {useContext, useState}  from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import IMG from '../../../../assets/img/backgroundSamp.png'
import Icon from 'react-native-vector-icons/Ionicons';
import SearchInputField from '../../../components/SearchInputField/SearchInputField';

const BillsTransactions = () => {
    const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
        <View style={styles.overlay}>
            <View style={styles.searchBar}>
                <SearchInputField 
                    value={search}
                    onChangeText={setSearch}
                    placeholder='Search'
                />
                <View style={styles.searchButtonView}>
                    <TouchableOpacity style={styles.searchButtonContainer}>
                        <Icon name="search" size={28} color="#5cdb93" style={styles.searchButton}/>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <View style={styles.theTransCase}>
                    <View>
                        <Text style={styles.timestampDay}>Today</Text>
                    </View>
                    <View style={styles.historiesContainer}>
                        <View style={styles.typeIconContainer}>
                            <Icon name='cash' size={35} color="#0c456d" style={styles.typeIcon}/>
                        </View>
                        <View style={styles.general}>
                            <View style={styles.topRow}>
                                <View>
                                    <Text style={styles.transTheType}> Electricty </Text>
                                </View>
                                <View style={styles.theAmountContainer}>
                                    <Text style={styles.theAmount}> ₦ 1,600.00 </Text>
                                </View>
                            </View>

                            <View style={styles.downRow}>
                                <View>
                                    <Text style={styles.reciever}> IKEDC </Text>
                                </View>
                                <View style={styles.theStatusContainer}>
                                    <Text style={styles.theStatus}> Successful </Text>
                                </View>
                            </View>  
                        </View>

                    </View>
                </View>
                
                <View style={styles.theTransCase}>
                    <View>
                        {/* <Text style={styles.timestampDay}>Today</Text> */}
                    </View>
                    <View style={styles.historiesContainer}>
                        <View style={styles.typeIconContainer}>
                            <Icon name='cash' size={35} color="#0c456d" style={styles.typeIcon}/>
                        </View>
                        <View style={styles.general}>
                            <View style={styles.topRow}>
                                <View>
                                    <Text style={styles.transTheType}> Electricty </Text>
                                </View>
                                <View style={styles.theAmountContainer}>
                                    <Text style={styles.theAmount}> ₦ 1,600.00 </Text>
                                </View>
                            </View>

                            <View style={styles.downRow}>
                                <View>
                                    <Text style={styles.reciever}> IKEDC </Text>
                                </View>
                                <View style={styles.theStatusContainer}>
                                    <Text style={styles.theStatus}> Successful </Text>
                                </View>
                            </View>  
                        </View>

                    </View>
                </View>

                <View style={styles.theTransCase}>
                    <View>
                        {/* <Text style={styles.timestampDay}>Today</Text> */}
                    </View>
                    <View style={styles.historiesContainer}>
                        <View style={styles.typeIconContainer}>
                            <Icon name='cash' size={35} color="#0c456d" style={styles.typeIcon}/>
                        </View>
                        <View style={styles.general}>
                            <View style={styles.topRow}>
                                <View>
                                    <Text style={styles.transTheType}> Electricty </Text>
                                </View>
                                <View style={styles.theAmountContainer}>
                                    <Text style={styles.theAmount}> ₦ 1,600.00 </Text>
                                </View>
                            </View>

                            <View style={styles.downRow}>
                                <View>
                                    <Text style={styles.reciever}> IKEDC </Text>
                                </View>
                                <View style={styles.theStatusContainer}>
                                    <Text style={styles.theStatus}> Successful </Text>
                                </View>
                            </View>  
                        </View>

                    </View>
                </View>

                <View style={styles.theTransCase}>
                    <View>
                        {/* <Text style={styles.timestampDay}>Today</Text> */}
                    </View>
                    <View style={styles.historiesContainer}>
                        <View style={styles.typeIconContainer}>
                            <Icon name='cash' size={35} color="#0c456d" style={styles.typeIcon}/>
                        </View>
                        <View style={styles.general}>
                            <View style={styles.topRow}>
                                <View>
                                    <Text style={styles.transTheType}> Electricty </Text>
                                </View>
                                <View style={styles.theAmountContainer}>
                                    <Text style={styles.theAmount}> ₦ 1,600.00 </Text>
                                </View>
                            </View>

                            <View style={styles.downRow}>
                                <View>
                                    <Text style={styles.reciever}> IKEDC </Text>
                                </View>
                                <View style={styles.theStatusContainer}>
                                    <Text style={styles.theStatus}> Successful </Text>
                                </View>
                            </View>  
                        </View>

                    </View>
                </View>

                <View style={styles.theTransCase}>
                    <View>
                        {/* <Text style={styles.timestampDay}>Today</Text> */}
                    </View>
                    <View style={styles.historiesContainer}>
                        <View style={styles.typeIconContainer}>
                            <Icon name='cash' size={35} color="#0c456d" style={styles.typeIcon}/>
                        </View>
                        <View style={styles.general}>
                            <View style={styles.topRow}>
                                <View>
                                    <Text style={styles.transTheType}> Electricty </Text>
                                </View>
                                <View style={styles.theAmountContainer}>
                                    <Text style={styles.theAmount}> ₦ 1,600.00 </Text>
                                </View>
                            </View>

                            <View style={styles.downRow}>
                                <View>
                                    <Text style={styles.reciever}> IKEDC </Text>
                                </View>
                                <View style={styles.theStatusContainer}>
                                    <Text style={styles.theStatus}> Successful </Text>
                                </View>
                            </View>  
                        </View>

                    </View>
                </View>

                <View style={styles.theTransCase}>
                    <View>
                        {/* <Text style={styles.timestampDay}>Today</Text> */}
                    </View>
                    <View style={styles.historiesContainer}>
                        <View style={styles.typeIconContainer}>
                            <Icon name='cash' size={35} color="#0c456d" style={styles.typeIcon}/>
                        </View>
                        <View style={styles.general}>
                            <View style={styles.topRow}>
                                <View>
                                    <Text style={styles.transTheType}> Electricty </Text>
                                </View>
                                <View style={styles.theAmountContainer}>
                                    <Text style={styles.theAmount}> ₦ 1,600.00 </Text>
                                </View>
                            </View>

                            <View style={styles.downRow}>
                                <View>
                                    <Text style={styles.reciever}> IKEDC </Text>
                                </View>
                                <View style={styles.theStatusContainer}>
                                    <Text style={styles.theStatus}> Successful </Text>
                                </View>
                            </View>  
                        </View>

                    </View>
                </View>

                <View style={styles.theTransCase}>
                    <View>
                        <Text style={styles.timestampDay}>Yesterday</Text>
                    </View>
                    <View style={styles.historiesContainer}>
                        <View style={styles.typeIconContainer}>
                            <Icon name='cash' size={35} color="#0c456d" style={styles.typeIcon}/>
                        </View>
                        <View style={styles.general}>
                            <View style={styles.topRow}>
                                <View>
                                    <Text style={styles.transTheType}> Electricty </Text>
                                </View>
                                <View style={styles.theAmountContainer}>
                                    <Text style={styles.theAmount}> ₦ 1,600.00 </Text>
                                </View>
                            </View>

                            <View style={styles.downRow}>
                                <View>
                                    <Text style={styles.reciever}> IKEDC </Text>
                                </View>
                                <View style={styles.theStatusContainer}>
                                    <Text style={styles.theStatus}> Successful </Text>
                                </View>
                            </View>  
                        </View>

                    </View>
                </View>

                <View style={styles.theTransCase}>
                    <View>
                        {/* <Text style={styles.timestampDay}>Today</Text> */}
                    </View>
                    <View style={styles.historiesContainer}>
                        <View style={styles.typeIconContainer}>
                            <Icon name='cash' size={35} color="#0c456d" style={styles.typeIcon}/>
                        </View>
                        <View style={styles.general}>
                            <View style={styles.topRow}>
                                <View>
                                    <Text style={styles.transTheType}> Electricty </Text>
                                </View>
                                <View style={styles.theAmountContainer}>
                                    <Text style={styles.theAmount}> ₦ 1,600.00 </Text>
                                </View>
                            </View>

                            <View style={styles.downRow}>
                                <View>
                                    <Text style={styles.reciever}> IKEDC </Text>
                                </View>
                                <View style={styles.theStatusContainer}>
                                    <Text style={styles.theStatus}> Successful </Text>
                                </View>
                            </View>  
                        </View>

                    </View>
                </View>

            </ScrollView>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        position: 'relative',
        // width: hp('42%'),
        // height: hp('10%'),
        // marginLeft:2
        flex: 1,
        resizeMode: 'cover',
        // opacity: .3

    },
    container:{
        flex: 1,
        backgroundColor:'#b1b7bd',
        paddingBottom:100
    },
    overlay:{
        alignItems: 'center',
        marginTop: 7,
    },
    searchBar:{
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    searchButtonContainer:{
        width: hp('6%'),
        height: hp('5%'),
        backgroundColor: '#0c456d',
        borderRadius: 10,
        marginTop: 10,
        borderColor: '#0c456d',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchButtonView:{
        paddingLeft: 10
    },
    historiesContainer:{
        width: hp('43%'),
        height: hp('9%'),
        backgroundColor: '#89929b',
        borderRadius: 20,
        marginTop: 10,
        borderColor: '#ffffff',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    timestampDay:{
        color: '#0c456d',
        fontWeight: '700'
    },
    topRow:{
        paddingLeft:40
    },
    transTheType:{
        color:"#0c3156",
        fontWeight: '600'
    },
    theAmount:{
        color: '#5cdb93',
        fontWeight: '600'

    },
    general:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: -42,

    },
    typeIcon:{
    },
    typeIconContainer:{
        marginTop: 43,
        marginLeft: -10,
    },
    downRow:{
        paddingLeft: 55

    },
    theAmountContainer:{
        paddingTop: 13
    },
    theStatusContainer:{
        marginTop: 10,
        width: hp(9),
        height: hp(3),
        backgroundColor: '#5cdb93',
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#5cdb93',
        justifyContent: 'center'

    },
    theStatus:{
        fontWeight: '600',
        color: '#0c456d'
    },
    reciever:{
        fontWeight: '500',
        color:"#0c3156"
    },
    theTransCase:{
        marginBottom: 10
    }
})
export default BillsTransactions