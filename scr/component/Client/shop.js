import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, Dimensions, ScrollView, TextInput, FlatList, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import Color from '../../constant/color';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Chat from 'react-native-vector-icons/Ionicons'
import FeaIcon from 'react-native-vector-icons/Feather'
const Width = Dimensions.get('window').width

export default class shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagesMost: [
                { key: 1, image: require('./../../image/user2.jpg') },
                { key: 2, image: require('./../../image/user2.jpg') },
                { key: 3, image: require('./../../image/user2.jpg') },
                { key: 4, image: require('./../../image/gift.png') },
                { key: 5, image: require('./../../image/gift.png') },
                { key: 6, image: require('./../../image/gift.png') },
            ],
            col: 2
        };
    }

    render() {
        const {col} = this.state
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
                        <FlatList
                            numColumns={col}
                            keyExtractor={(item, index) => item.key + ""}
                            data={this.state.imagesMost}

                            renderItem={({ item }) =>
                                <TouchableOpacity style={{}} onPress={() => { this.props.navigation.navigate('addToCard') }}>
                                    <Image source={item.image} 
                                    style={{
                                        width: (Width-20*col)/col,
                                        // width: 140,
                                        height: 130,
                                        marginRight: wp('5%'),
                                        marginBottom: hp('3%'),
                                        // borderRadius: 20,
                                        // backgroundColor: '#000'
                                    }} />
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
    homeImage: {

    },
});

