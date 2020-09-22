import React, { Component } from 'react';
import { View, StatusBar, ImageBackground, Image, ScrollView, KeyboardAvoidingView, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon, Input, } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import Left from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Back from 'react-native-vector-icons/MaterialIcons'
import Color from './../../constant/color';
import { shadow } from 'react-native-paper';

export default class completeOrder extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.checkoutContainer}>
                <View style={{ height: hp('9%'), }}>
                    <View style={{ marginHorizontal: wp('5%'), marginTop: hp('2%'), }}>
                        <Back style={{ marginLeft: -10, marginTop: -5, }} name={'keyboard-arrow-left'} size={40} color="#000"
                            onPress={() => this.props.navigation.goBack()} />
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.maincontainer}>
                        <Text style={styles.textcheckout}>Personal Information</Text>
                        <View style={[styles.textinputcontainer, Color.shadow]}>
                            <TextInput style={styles.textinput1}
                                autoCompleteType="name"
                                keyboardType="email-address"
                                textContentType="emailAddress"
                                placeholder="Name"
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
                        <Text style={styles.textcheckout}>Bank Account Details</Text>
                        <View style={[styles.regioncontainer, Color.shadow]}>

                            <TextInput style={styles.textinput1}
                                autoCompleteType="name"
                                keyboardType="email-address"
                                textContentType="emailAddress"
                                placeholder="Card no."
                                underlineColorAndroid='#fff'

                            />
                            <TextInput style={styles.textinput1}
                                autoCompleteType="name"
                                keyboardType="email-address"
                                textContentType="emailAddress"
                                placeholder="Expiry Date"
                                underlineColorAndroid='#fff'

                            />
                            <TextInput style={styles.textinput1}
                                autoCompleteType="email"
                                keyboardType="email-address"
                                textContentType="emailAddress"
                                placeholder="Code"

                            />
                        </View>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('servicesClient') }} style={styles.checkoutView}>
                            <Text style={styles.checkout}>COMPLETE ORDER</Text>
                        </TouchableOpacity>
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
        backgroundColor: Color.grey,
    },

    regioncontainer: {
        marginTop: 10,
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor: Color.grey,
    },
    textcheckout: {
        color: Color.green,
        fontSize: 20,
    },
    textinput1: {
        fontSize: 20,
        height: hp('10%'),
        marginHorizontal: wp('5%')
    },
    checkoutView: {
        borderWidth: 2,
        borderColor: Color.black,
        marginHorizontal: wp('0%'),
        height: hp('10%'),
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: hp('3%'),
    },
    checkout: {
        color: Color.green,
        fontWeight: '700'
    }
})