import React, { Component } from 'react';
import { View, StatusBar, ImageBackground, Image, ScrollView, KeyboardAvoidingView, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon, Input, } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Camera from 'react-native-vector-icons/SimpleLineIcons'
import Back from 'react-native-vector-icons/MaterialIcons'

export default class logOut extends Component {
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
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: hp('5%') }}>
                            <Image style={{ height: 70, width: 70, borderRadius: 70 / 2, }}
                                source={require('./../../image/user2.jpg')} />
                            <View style={{ borderWidth: 1, borderColor: 'grey', backgroundColor: '#fff', marginVertical: hp('-1.5%'), height: 25, width: 25, borderRadius: 25 / 2, alignItems: 'center', justifyContent: 'center' }}>
                                <Camera
                                    name={'camera'} size={15} color="#EEBC26" />
                            </View>
                        </View>
                        {/*second View */}
                        <View style={styles.textinputcontainer}>
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
                        <View style={styles.regioncontainer}>

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
        backgroundColor: '#F9E5EE',

    },

    regioncontainer: {
        marginTop: 10,
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor: '#F9E5EE',
    },
    textcheckout: {
        color: '#EEBC26',
        fontSize: 20,
    },
    textinput1: {
        fontSize: 20,
        height: hp('10%'),
        marginHorizontal: wp('5%')

    },

    opacityview: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchableopacity1: {
        justifyContent: 'center',
        borderRadius: 5,
        height: 50,
        width: '90%',
        borderWidth: 1

    },
    opacitytext: {
        textAlign: 'center',
        fontSize: 20,
        color: '#EEBC26'
    },

})