import React, { Component } from 'react';
import { View, StatusBar,StyleSheet, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import Color from '../../constant/color';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class selection_signUp extends Component {

    render() {
        return (
            <View style={styles.container}>
                    <Image source={require('./../../image/Logo.png')} style={styles.imageSecond} resizeMode='stretch' />
                    <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center',  borderWidth: 2, marginBottom: hp('2%'), borderColor: Color.black, borderRadius: 5, height: 50,  width: '90%', }}
                        onPress={() => this.props.navigation.navigate('adminScreen')}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: Color.Mustard }}>SERVICE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center',  borderWidth: 2, borderColor: Color.black, borderRadius: 5, height: 50,  width: '90%', }}
                        onPress={() => this.props.navigation.navigate('signUp')}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: Color.Mustard }}>CLIENT</Text>
                    </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    imageSecond: {
        width: 200,
         height: 200,
        //  marginRight: 10, 
        borderRadius: 5,
        marginBottom: hp('10%'),
    },
});

