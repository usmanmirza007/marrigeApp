import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, ScrollView, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import Color from '../../constant/color';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TextInput } from 'react-native-paper';


export default class signUpContinue extends Component {
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
                     <View style={{marginVertical: hp('10%'),}}>
                     <TextInput
                        style={styles.input}
                        mode='outlined'
                        theme={{
                            colors: {
                                primary: '#5AA9A3',
                            }
                        }}
                        label='Company Name'
                        placeholder="Company Name"
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
                        label='Address'
                        placeholder="Address"
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
                        label='Description'
                        placeholder="Description"
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
                        label='Mobile Number'
                        placeholder="Mobile Number"
                        placeholderTextColor={'#000'}
                        value={this.state.fname}
                        onChangeText={fname => this.setState({ fname })}
                    />
                     </View>
                    <ImageBackground source={require('./../../image/asset.png')} style={{ width: '100%', height: 200, flex: 1 }} resizeMode='stretch'>
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', borderWidth: 2, marginTop: hp('15%'), borderColor: Color.black, borderRadius: 5, height: 50, marginHorizontal: wp('5%'), }}
                            onPress={() => this.props.navigation.navigate('signUpContinueLast')}>
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

