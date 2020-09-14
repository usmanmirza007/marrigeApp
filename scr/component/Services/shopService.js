import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, ScrollView,TextInput,FlatList, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import Color from '../../constant/color';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Chat from 'react-native-vector-icons/Ionicons'
import FeaIcon from 'react-native-vector-icons/Feather'


export default class shopService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagesMost: [
                { key: 1, image: require('./../../image/gift.png') },
                { key: 2, image: require('./../../image/gift1.jpg') },
                { key: 3, image: require('./../../image/gift2.png') },
                { key: 6, image: require('./../../image/gift1.jpg') },
            ]
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
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('services') }} style={styles.checkoutView}>
                            <Text style={styles.checkout}>ADD PRODUCT</Text>
                        </TouchableOpacity>
                        <FlatList
                            numColumns={2}
                            keyExtractor={(item, index) => item.key + ""}
                            data={this.state.imagesMost}
                            renderItem={({ item }) =>
                                <TouchableOpacity style={{}} onPress={() => { this.props.navigation.navigate('addToCard') }}>
                                    <Image source={item.image} style={styles.homeImage} resizeMode='stretch' />
                                </TouchableOpacity>
                            }
                        />
                        
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
    homeImage: {
        width: 135,
        height: 130,
        marginRight: wp('5%'),
        marginBottom: hp('3%'),
        borderRadius: 20
    },
    checkoutView: {
        borderWidth: 2,
        borderColor: Color.black,
        marginHorizontal: wp('0%'),
        height: hp('10%'),
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: hp('3%'),
    },
    checkout: {
        color: Color.Mustard,
        fontWeight: '700'
    }
});

