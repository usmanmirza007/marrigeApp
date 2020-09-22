import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, ScrollView, Dimensions, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import Color from '../../constant/color';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class mainScreenClient extends Component {

    render() {
        return (
            <ScrollView>
                {/* <ImageBackground source={require('./../../image/background.png')} style={styles.back}  > */}

                    <View style={styles.container}>
                        <Image source={require('./../../image/Logo.png')} style={styles.imageSecond} resizeMode='stretch' />
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', borderWidth: 2, marginBottom: hp('2%'), borderColor: Color.black, borderRadius: 5, height: 50, marginHorizontal: '5%', }}
                            onPress={() => this.props.navigation.navigate('signUpService')}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: Color.green }}>SIGN UP</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', borderWidth: 2, marginBottom: 50, borderColor: Color.black, borderRadius: 5, height: 50, marginHorizontal: '5%', }}
                            onPress={() => this.props.navigation.navigate('signInService')}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: Color.green }}>SIGN IN</Text>
                        </TouchableOpacity>
                        <Image source={require('./../../image/asset.png')} style={{ height: 200, width: '100%' }} resizeMode='stretch' />

                    </View>
                {/* </ImageBackground> */}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // justifyContent: 'center',
    },
    imageSecond: {
        width: 200,
        height: 200,
        //  marginRight: 10, 
        borderRadius: 5,
        marginBottom: hp('10%'),
        alignSelf: 'center',

    },
    back: {
        height: 150,
        width: '100%'
    },
});

