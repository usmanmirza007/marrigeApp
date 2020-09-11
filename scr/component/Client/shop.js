import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, ScrollView,TextInput,FlatList, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import Color from '../../constant/color';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Chat from 'react-native-vector-icons/Ionicons'
import FeaIcon from 'react-native-vector-icons/Feather'


export default class shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagesMost: [
                { key: 1, image: require('./../../image/gift.png') },
                { key: 2, image: require('./../../image/gift1.jpg') },
                { key: 3, image: require('./../../image/gift2.png') },
                { key: 4, image: require('./../../image/gift1.jpg') },
                { key: 5, image: require('./../../image/gift.png') },
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
                            <Chat style={{ marginLeft: wp('0%'), }} name={'chatbubble-outline'} size={24} color="#000" />
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
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.input}
                                placeholder="Search Results"
                                placeholderTextColor={Color.greyPrimray}
                                value={this.state.chooseDate}
                                onChangeText={chooseDate => this.setState({ chooseDate })} />
                            <FeaIcon style={{ alignSelf: 'center' }} name={'search'} size={24} color={Color.greyPrimray}
                                onPress={
                                    () => this.props.navigation.navigate('#')} />
                        </View>
                        <FlatList
                            numColumns={2}
                            keyExtractor={(item, index) => item.key + ""}
                            data={this.state.imagesMost}
                            renderItem={({ item }) =>
                                <TouchableOpacity style={{}} onPress={() => { this.props.navigation.navigate('#') }}>
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
    homeImage: {
        width: 130,
        height: 130,
        marginRight: wp('5%'),
        marginBottom: hp('3%'),
        borderRadius: 20
    },
});

