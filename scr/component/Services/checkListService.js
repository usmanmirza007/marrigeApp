import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Modal, TextInput, ImageBackground, TouchableOpacity, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Color from './../../constant/color';
import Star from 'react-native-vector-icons/Foundation';
import Chat from 'react-native-vector-icons/Ionicons'

export default class checkListService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [
                { name: 'Jhon Doe', starIcon: 'star', text: 'Very Good, Very Skilled' },
                { name: 'Jhon Doe', starIcon: 'star', text: 'Loream ipsum dolor sit amet, consecture edipicising sed do temporor incide' },
                { name: 'Jhon Doe', starIcon: 'star', text: 'Very Good, Very Skilled' },
                { name: 'Jhon Doe', starIcon: 'star', text: 'Loream ipsum dolor sit amet, consecture edipicising sed do temporor incide' },

            ]
        };
    }
    renderRow = ({ item }) => {
        return (
                <View style={styles.viewContainer}>
                    <View style={styles.starView}>
                        <View style={{ justifyContent: 'center', marginHorizontal: wp('2%') }}>
                            <Text style={{ color: 'grey' }}>{item.name} </Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginHorizontal: wp('5%'), marginVertical: hp('2%') }} >
                            <Star name={item.starIcon} size={20} color={Color.Mustard} />
                            <Star name={item.starIcon} size={20} color={Color.Mustard} />
                            <Star name={item.starIcon} size={20} color={Color.Mustard} />
                            <Star name={item.starIcon} size={20} color={Color.Mustard} />
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', marginHorizontal: wp('2%'), bottom: 10 }}>
                        <Text>{item.text}</Text>
                    </View>
                </View>
        )
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
        backgroundColor: '#fff',

    },
    main: {
        marginHorizontal: wp('5%'),

    },
    viewContainer: {
        marginVertical: hp('2%'),
        backgroundColor: '#F9E5EE',
        height: hp('15%'),
        justifyContent: 'space-between',
        borderRadius: 5,
    },
    starView:{ flexDirection: 'row', justifyContent: 'space-between', }


});


