import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, TextInput, ScrollView, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import Color from '../../constant/color';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Chat from 'react-native-vector-icons/Ionicons'

export default class services extends Component {
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
                        <Image source={require('./../../image/Logo.png')} style={{ width: 20, marginLeft: wp('4%'), width: 40, height: 40 }} />
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('chatList')}>
                                <Chat style={{ marginLeft: wp('0%'), }} name={'chatbubble-outline'} size={24} color="#000" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('logOut')}>
                                <Image source={require('./../../image/user2.jpg')} style={{ width: 20, marginLeft: wp('4%'), borderRadius: 30, width: 30, height: 30 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <View style={{ marginHorizontal: wp('5%'), }}>
                        <Text style={{marginVertical: hp('2%'), fontWeight: 'bold'}}>Upcoming Bookings</Text>
                        <TouchableOpacity style={[styles.mainCart]}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('./../../image/user2.jpg')} style={styles.imageSecond} resizeMode='stretch' />
                                <View style={styles.heartView}>
                                    <View>
                                        <Text style={styles.name}>Product Name</Text>
                                        <Text style={styles.price}>Date: 12-04-2020</Text>
                                        <Text style={styles.price}>Time: 13:00</Text>
                                    </View>
                                    <TouchableOpacity style={styles.CANCEL}>
                                        <Text style={{ fontSize: 12 }}>CANCEL</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.mainCart]}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('./../../image/user2.jpg')} style={styles.imageSecond} resizeMode='stretch' />
                                <View style={styles.heartView}>
                                    <View>
                                        <Text style={styles.name}>Product Name</Text>
                                        <Text style={styles.price}>Date: 12-04-2020</Text>
                                        <Text style={styles.price}>Time: 13:00</Text>
                                    </View>
                                    <TouchableOpacity style={styles.CANCEL}>
                                        <Text style={{ fontSize: 12 }}>CANCEL</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
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
    inputView: {
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: Color.LightMustard,
        marginBottom: hp('3%'),
    },
    input: {
        alignSelf: 'center',
        paddingLeft: 10,
        color: '#000',
        height: 35,
        width: 250,
        fontWeight: '500',
    },
    CANCEL: {
        backgroundColor: Color.Mustard,
        width: wp('25%'),
        marginLeft: wp('25%'),
        height: hp('5%'),
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('2%'),
    },
    mainCart: {
        backgroundColor: Color.Pink,
        // height: hp('17%'),
        borderRadius: 5,
        padding: 10,
        marginBottom: hp('2%'),
    },
    imageSecond: {
        width: 80,
        height: 100,
        //  marginRight: 10, 
        borderRadius: 10,
    },
    heartView: {
        // flexDirection: 'row',
        marginLeft: wp('5%'),
    },
    name: {
        fontSize: 13,
        fontWeight: '700',
    },
    price: {
        fontSize: 13,
        color: Color.black,
    },
});

