import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, ScrollView, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import Color from '../../constant/color';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TextInput } from 'react-native-paper';

export default class signInClient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            mob_number: '',
            countryCode: '',
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
                        label='User Name'
                        placeholder="User Name"
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
                    <Text style={{ marginLeft: wp('5%'), marginVertical: hp('2%'), }}>Don't have an account? <Text style={{ textDecorationLine: 'underline', color: Color.green }} onPress={() => this.props.navigation.navigate('signUpClient')}>Sign Up</Text></Text>
                    <Text style={{ alignSelf: 'center', marginTop: hp('1%'), }}>SIGN IN WITH </Text>
                    <View style={styles.iconView}>
                        <TouchableOpacity>
                            <Image source={require('./../../image/download.png')} style={styles.icon} resizeMode='stretch' />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('./../../image/fb.png')} style={styles.icon} resizeMode='stretch' />
                        </TouchableOpacity>
                    </View>
                    <ImageBackground source={require('./../../image/asset.png')} style={{ width: '100%', height: 150 }} resizeMode='stretch'>
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', borderWidth: 2, marginTop: hp('10%'), borderColor: Color.black, borderRadius: 5, height: 50, marginHorizontal: wp('5%'), }}
                            onPress={() => this.props.navigation.navigate('tab')}>
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
        borderRadius: 5,
        // marginBottom: hp('5%'),
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
        height: 40
    },
    choose: {
        fontSize: 15,
        color: '#666666'
    },
    iconView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: wp('25%'),
        marginTop: hp('3%')

    }
});

