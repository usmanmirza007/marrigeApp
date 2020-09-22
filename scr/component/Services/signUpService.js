import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, ScrollView, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import Color from '../../constant/color';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TextInput } from 'react-native-paper';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';



export default class signUpService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            mob_number: '',
            countryCode: '',
            radio_props: [
                { gender: 0, label: 'Male' },
                { gender: 1, label: 'Female' },
            ]
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Image source={require('./../../image/Logo.png')} style={styles.imageSecond} resizeMode='stretch' />
                    <TextInput
                        style={styles.input}
                        mode='outlined'
                        theme={{
                            colors: {
                                primary: '#5AA9A3',
                            }
                        }}
                        label='Full Name'
                        placeholder="Full Name"
                        placeholderTextColor={'#000'}
                        value={this.state.fname}
                        onChangeText={fname => this.setState({ fname })}
                    />
                    <TextInput
                        style={styles.input}
                        mode='outlined'
                        theme={{
                            colors: {
                                primary: '#5AA9A3',
                            }
                        }}
                        label='Email Address'
                        placeholder="Email Address"
                        placeholderTextColor={'#000'}
                        value={this.state.fname}
                        onChangeText={fname => this.setState({ fname })}
                    />
                    <TextInput
                        style={styles.input}
                        mode='outlined'
                        theme={{
                            colors: {
                                primary: '#5AA9A3',
                            }
                        }}
                        label='Password'
                        placeholder="Password"
                        placeholderTextColor={'#000'}
                        value={this.state.fname}
                        onChangeText={fname => this.setState({ fname })}
                    />
                    <Text style={{marginLeft: wp('5%'), marginVertical: hp('3%'), }}>Already have an account? <Text style={{textDecorationLine: 'underline', color: Color.green}} onPress={() => this.props.navigation.navigate('signInService')}>Sign In</Text></Text>
                    
                    <ImageBackground source={require('./../../image/asset.png')} style={{ width: '100%', height: 150 }} resizeMode='stretch'>
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', borderWidth: 2, marginTop: hp('10%'), borderColor: Color.black, borderRadius: 5, height: 50, marginHorizontal: wp('5%'), }}
                            onPress={() => this.props.navigation.navigate('signUpContinue')}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: Color.black }}>CONTINUE</Text>
                        </TouchableOpacity>
                    </ImageBackground >
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    imageSecond: {
        width: 200,
        height: 200,
        //  marginRight: 10, 
        borderRadius: 5,
        marginBottom: hp('5%'),
        alignSelf: 'center'
    },
    icon: {
        width: 30,
        height: 25,
        //  marginRight: 10, 
        marginBottom: hp('5%'),
        alignSelf: 'center'
    },
    input: {
        // marginTop: wp('12%'),
        marginHorizontal: wp('5%'),
        backgroundColor: '#fff',
        marginBottom: hp('2%'),
    },
    radioButton: {
        marginRight: 30,
        marginTop: 0
    },
    mainRadioView: {
        marginLeft: wp('5%'),
        marginTop: hp('3%')
    },
    choose: {
        fontSize: 15,
        color: '#666666'
    },
    iconView:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: wp('25%'),
        marginTop: hp('3%')

    }
});

