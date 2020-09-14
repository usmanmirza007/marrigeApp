import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, ScrollView, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import Color from '../../constant/color';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TextInput } from 'react-native-paper';
import Calendar from 'react-native-vector-icons/SimpleLineIcons'


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
                    <View style={{ alignItems: 'center', marginTop: hp('15%'), }}>
                        <Text style={styles.add}>ADD PHOTO</Text>
                        <TouchableOpacity style={styles.imagePicker}>
                            <Calendar style={{ marginLeft: wp('0%'), }} name={'camera'} size={24} color='#fff'
                                onPress={() => this.props.navigation.navigate('#')} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginTop: hp('20%'), borderWidth: 2, marginBottom: hp('2%'), borderColor: Color.black, borderRadius: 5, height: 50, marginHorizontal: wp('5%'), }}
                        onPress={() => this.props.navigation.navigate('tab2')}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: Color.Mustard }}>CONTINUE</Text>
                    </TouchableOpacity>
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
    imagePicker: {
        backgroundColor: Color.greyPrimray,
        height: hp('30%'),
        width: wp('50%'),
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Color.black,
        alignItems: 'center',
        justifyContent: 'center'
    },
    add:{
        color: Color.Mustard,
        marginBottom: hp('3%'),
        fontWeight: '700'
    }
});

