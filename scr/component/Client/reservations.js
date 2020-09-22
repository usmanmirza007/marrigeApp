import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, TextInput, ScrollView, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import Color from '../../constant/color';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Chat from 'react-native-vector-icons/Ionicons'
import FeaIcon from 'react-native-vector-icons/Feather'
import Heart from 'react-native-vector-icons/AntDesign'
import Delete from 'react-native-vector-icons/MaterialCommunityIcons'

export default class reservations extends Component {
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
                        {/* <Image source={require('./../../image/Logo.png')} style={{ width: 20, marginLeft: wp('4%'), width: 40, height: 40 }} /> */}
                        <View></View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('chatList')}>
                                <Chat style={{ marginLeft: wp('0%'), }} name={'chatbubble-outline'} size={24} color="#000" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('checkOut')}>
                                <Image source={require('./../../image/cart.png')} style={{ width: 20, marginLeft: wp('4%'), }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('#')}>
                                <Image source={require('./../../image/user2.jpg')} style={{ width: 20, marginLeft: wp('4%'), borderRadius: 30, width: 30, height: 30 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <View style={{ marginHorizontal: wp('5%'), }}>
                        <View style={[styles.inputView, shadow]}>
                            <TextInput
                                style={styles.input}
                                placeholder="Search Results"
                                placeholderTextColor={Color.greyPrimray}
                                value={this.state.chooseDate}
                                onChangeText={chooseDate => this.setState({ chooseDate })} />
                            <View style={{ justifyContent: 'center', }}>
                                <FeaIcon style={{ marginRight: 20, }} name={'search'} size={24} color={Color.black}
                                    onPress={
                                        () => this.props.navigation.navigate('#')} />
                            </View>
                        </View>
                        <TouchableOpacity style={[styles.mainCart, shadow]}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={require('./../../image/user2.jpg')} style={styles.imageSecond} resizeMode='stretch' />
                                    <View style={{ marginLeft: '5%', }}>
                                        <Text style={styles.name}>Product Name</Text>
                                        <Text style={styles.price}>$354.125</Text>
                                        <Text style={styles.price}>Time: 13:00</Text>

                                    </View>
                                </View>
                                <View style={{ justifyContent: 'flex-end' }}>
                                    <TouchableOpacity style={styles.CANCEL}>
                                        <Text style={{ fontSize: 12 }}>CANCEL</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.mainCart, shadow]}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={require('./../../image/user2.jpg')} style={styles.imageSecond} resizeMode='stretch' />
                                    <View style={{ marginLeft: '5%', }}>
                                        <Text style={styles.name}>Product Name</Text>
                                        <Text style={styles.price}>$354.125</Text>
                                        <Text style={styles.price}>Time: 13:00</Text>

                                    </View>
                                </View>
                                <View style={{ justifyContent: 'flex-end' }}>
                                    <TouchableOpacity style={styles.CANCEL}>
                                        <Text style={{ fontSize: 12 }}>CANCEL</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.mainCart, shadow]}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={require('./../../image/user2.jpg')} style={styles.imageSecond} resizeMode='stretch' />
                                    <View style={{ marginLeft: '5%', }}>
                                        <Text style={styles.name}>Product Name</Text>
                                        <Text style={styles.price}>$354.125</Text>
                                        <Text style={styles.price}>Time: 13:00</Text>

                                    </View>
                                </View>
                                <View style={{ justifyContent: 'flex-end' }}>
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

const shadow = {
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 8,
    shadowOffset: {
        width: 0,
        height: 4
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
        justifyContent: 'space-between',
        borderRadius: 5,
        backgroundColor: Color.grey,
        marginVertical: hp('3%'),
    },
    input: {
        alignSelf: 'center',
        paddingLeft: 10,
        color: '#000',
        height: 35,
        fontWeight: '500',
    },
    CANCEL: {
        backgroundColor: Color.green,
        width: wp('25%'),
        height: hp('5%'),
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
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
    mainCart: {
        backgroundColor: Color.geryLight,
        // height: hp('17%'),
        borderRadius: 5,
        padding: 10,
        marginBottom: hp('2%'),
    },
});

