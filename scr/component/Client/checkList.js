import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, ScrollView, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import Color from '../../constant/color';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TextInput } from 'react-native-paper';
import AntIcon from 'react-native-vector-icons/AntDesign'

export default class checkList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                 <View style={{ height: hp('9%'), }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp('5%'), marginTop: hp('2%'), }}>
                        <View style={{ flexDirection: 'row' }}>
                            <AntIcon style={{ marginLeft: wp('0%'), }} name={'hearto'} size={24} color="#000"
                                onPress={
                                    () => this.props.navigation.navigate('#')} />
                        <Image source={require('./../../image/user2.jpg')} style={{ width: 20, marginLeft: wp('4%'), }} />

                        </View>
                        <Image source={require('./../../image/Logo.png')} style={{ width: 20, marginLeft: wp('4%'), }} />
                    </View>
                </View>
                <ScrollView>
                   <View style={{marginHorizontal: wp('5%'),}}>

                   </View>
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
});

