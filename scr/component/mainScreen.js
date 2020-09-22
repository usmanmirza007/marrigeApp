import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, Dimensions, ImageBackground, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import Color from './../constant/color';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class mainScreen extends Component {

    render() {
        return (
            <ScrollView>
                <ImageBackground source={require('./../image/background.png')} style={styles.back} resizeMode='stretch' >
                    <View style={styles.container}>
                        <Image source={require('./../image/Logo.png')} style={styles.imageSecond} resizeMode='stretch' />
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: '5%', borderWidth: 2, marginBottom: hp('2%'), borderColor: Color.black, borderRadius: 5, height: 50, }}
                            onPress={() => this.props.navigation.navigate('mainScreenService')}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: Color.green }}>SERVICES</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: '5%', borderWidth: 2, borderColor: Color.black, borderRadius: 5, height: 50, marginBottom: 0, }}
                            onPress={() => this.props.navigation.navigate('mainScreenClient')}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: Color.green }}>CLIENT</Text>
                        </TouchableOpacity>
                        {/* <Image source={require('./../image/asset.png')} style={styles.back} resizeMode='stretch' /> */}
                    </View>
                </ImageBackground>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
    },
    imageSecond: {
        width: 200,
        height: 200,
        borderRadius: 5,
        marginBottom: hp('0%'),
        alignSelf: 'center'
    },
    back: {
        height: windowHeight,
        width: windowWidth
    },
});

