import React, { Component } from 'react';
import { View, StatusBar, ImageBackground, Image, ScrollView, KeyboardAvoidingView, Text, Button, TouchableOpacity, StyleSheet, ColorPropType } from 'react-native';
import { Icon, Input, } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Camera from 'react-native-vector-icons/SimpleLineIcons'
import Color from './../../constant/color';
export default class logOut extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.checkoutContainer}>

                <View style={{ height: hp('9%'), }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp('5%'), marginTop: hp('2%'), }}>
                        {/* <Image source={require('./../../image/Logo.png')} style={{ width: 20, marginLeft: wp('4%'), width: 40, height: 40 }} /> */}
                       <View></View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('mainScreen')}>
                                <Text>LOGOUT</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.maincontainer}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: hp('5%') }}>
                            <Image style={{ height: 70, width: 70, borderRadius: 70 / 2, }}
                                source={require('./../../image/user2.jpg')} />
                            <View style={{ borderWidth: 1, borderColor: 'grey', backgroundColor: '#fff', marginVertical: hp('-1.5%'), height: 25, width: 25, borderRadius: 25 / 2, alignItems: 'center', justifyContent: 'center' }}>
                                <Camera
                                    name={'camera'} size={15} color="#5AA9A3" />
                            </View>
                        </View>
                        {/*second View */}
                        <View style={[styles.textinputcontainer, Color.shadow]}>
                            <TextInput style={styles.textinput1}
                                autoCompleteType="name"
                                keyboardType="email-address"
                                textContentType="emailAddress"
                                placeholder="Company Name"
                                underlineColorAndroid='#fff'
                            />
                            <TextInput style={styles.textinput1}
                                autoCompleteType="name"
                                keyboardType="email-address"
                                textContentType="emailAddress"
                                placeholder="Email"
                                underlineColorAndroid='#fff' />

                            <TextInput style={styles.textinput1}
                                autoCompleteType="email"
                                keyboardType="email-address"
                                textContentType="emailAddress"
                                placeholder="Phone no."
                            />

                        </View>
                        {/* View of region */}
                        <View style={[styles.regioncontainer, Color.shadow]}>

                            <TextInput style={styles.textinput1}
                                autoCompleteType="name"
                                keyboardType="email-address"
                                textContentType="emailAddress"
                                placeholder="Address."
                                underlineColorAndroid='#fff'

                            />
                            <TextInput style={styles.textinput1}
                                autoCompleteType="name"
                                keyboardType="email-address"
                                textContentType="emailAddress"
                                placeholder="Description"
                                underlineColorAndroid='#fff'

                            />
                            <TextInput style={styles.textinput1}
                                autoCompleteType="email"
                                keyboardType="email-address"
                                textContentType="emailAddress"
                                placeholder="Price"

                            />
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

        );

    }
}
const styles = StyleSheet.create({
    checkoutContainer: {
        flex: 1,
        backgroundColor: '#fff',


    },
    touchableopacity: {
        marginTop: 10
    },
    maincontainer: {
        marginHorizontal: wp('5%')

    },

    textinputcontainer: {
        marginVertical: hp('2%'),
        borderRadius: 5,
        backgroundColor: Color.grey

    },

    regioncontainer: {
        marginTop: 10,
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor: Color.grey

    },
    textinput1: {
        fontSize: 20,
        height: hp('10%'),
        marginHorizontal: wp('5%')

    },

})