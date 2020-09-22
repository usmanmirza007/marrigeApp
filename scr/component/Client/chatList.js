import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Modal, TextInput, ImageBackground, TouchableOpacity, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Color from './../../constant/color';
import color from './../../constant/color';

export default class chatList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [
                { image: require('./../../image/user2.jpg'), name: 'Jhon Doe', time: '8:40 PM', text: 'Ipsum dollar sit, amet' },
                { image: require('./../../image/user2.jpg'), name: 'Jhon Doe', time: '8:40 PM', text: 'Ipsum dollar sit, amet' },
                { image: require('./../../image/user2.jpg'), name: 'Jhon Doe', time: '8:40 PM', text: 'Ipsum dollar sit, amet' },
                { image: require('./../../image/user2.jpg'), name: 'Jhon Doe', time: '8:40 PM', text: 'Ipsum dollar sit, amet' },
                { image: require('./../../image/user2.jpg'), name: 'Jhon Doe', time: '8:40 PM', text: 'Ipsum dollar sit, amet' },
                { image: require('./../../image/user2.jpg'), name: 'Jhon Doe', time: '8:40 PM', text: 'Ipsum dollar sit, amet' },
                { image: require('./../../image/user2.jpg'), name: 'Jhon Doe', time: '8:40 PM', text: 'Ipsum dollar sit, amet' },
                { image: require('./../../image/user2.jpg'), name: 'Jhon Doe', time: '8:40 PM', text: 'Ipsum dollar sit, amet' },
                { image: require('./../../image/user2.jpg'), name: 'Jhon Doe', time: '8:40 PM', text: 'Ipsum dollar sit, amet' },

            ]
        };
    }
    renderRow = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('chat')}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: Color.grey, paddingHorizontal: 10, marginTop: 0, marginHorizontal: '2%', alignItems: 'center' }}>
                    <View>
                        <View style={styles.viewjhon}>
                            <Image style={{ height: 50, width: 50, borderRadius: 50 / 2, marginRight: 10, }}
                                source={item.image} />
                            <View style={{ justifyContent: 'center', }}>
                                <Text>{item.name}</Text>
                                <Text style={{ color: Color.green }}>{item.text}</Text>
                            </View>
                        </View>
                    </View>
                        <Text style={{ fontSize: 12, color: '#000' }}>{item.time}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <View style={styles.container}>

                <View style={{ height: hp('9%'), }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp('5%'), marginTop: hp('2%'), }}>
                        {/* <Image source={require('./../../image/Logo.png')} style={{ width: 20, marginLeft: wp('4%'), width: 40, height: 40 }} /> */}
                        <View></View>
                        <View style={{ flexDirection: 'row' }}>
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
                    <View style={styles.main}>
                        <FlatList
                            data={this.state.userData}
                            renderItem={this.renderRow}
                            keyExtractor={(item, index) => index.toString()}
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

    },
    main: {
        marginHorizontal: wp('5%'),

    },
    listView: {
        backgroundColor: '#F9E5EE',
        height: hp('8%'),
        marginHorizontal: wp('5%'),
        borderRadius: 5,
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',


    },
    textView: {
        fontSize: 15,
        marginHorizontal: wp('5%'),

    },
    innerView: {

        fontSize: 10
    },
    viewjhon: {
        flexDirection: 'row',
        marginVertical: hp('2%')
    },



});


