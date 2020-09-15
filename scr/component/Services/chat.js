import React, { Component } from 'react';
import { View, StatusBar, StyleSheet,ImageBackground,Dimensions, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import Color from '../../constant/color';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source = {require('./../../image/chatImage.png')} resizeMode = {'stretch'} style={{width: windowWidth, height: '100%'}} />
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
});

