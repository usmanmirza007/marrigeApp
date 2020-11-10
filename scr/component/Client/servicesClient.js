import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, ScrollView, Dimensions, FlatList, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import Color from '../../constant/color';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TextInput } from 'react-native-paper';
import Chat from 'react-native-vector-icons/Ionicons'
const Width = Dimensions.get('window').width

export default class servicesClient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagesMost: [
                { key: 1, image: require('./../../image/images.png'), name: 'Product name' },
                { key: 2, image: require('./../../image/images.png'), name: 'Product name' },
                { key: 3, image: require('./../../image/images.png'), name: 'Product name' },
                { key: 4, image: require('./../../image/images.png'), name: 'Product name' },
                { key: 5, image: require('./../../image/images.png'), name: 'Product name' },
                { key: 6, image: require('./../../image/images.png'), name: 'Product name' },
                { key: 7, image: require('./../../image/images.png'), name: 'Product name' },
            ],
            col: 2
        };
    }

    render() {
        const { col } = this.state

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
                        <Text style={styles.choose}>Choose a Service</Text>
                        <FlatList
                            numColumns={col}
                            keyExtractor={(item, index) => item.key + ""}
                            data={this.state.imagesMost}
                            renderItem={({ item }) =>
                                <TouchableOpacity style={{
                                    borderRadius: 5,
                                    borderWidth: 2,
                                    borderColor: Color.green,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    // width: 130,
                                    width: (Width - 25 * col) / col,
                                    height: 100,
                                    marginRight: 15,
                                    marginBottom: 10,
                                }} onPress={() => { this.props.navigation.navigate('serviceList') }}>
                                    <Text style={styles.name}>{item.name}</Text>
                                </TouchableOpacity>
                            }
                        />
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
    choose: {
        fontWeight: '700',
        fontSize: 15,
        marginBottom: 10,
    },

    name: {
        fontSize: 12,
    }
});

