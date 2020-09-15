import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, TextInput, Dimensions, ScrollView, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import Color from '../../constant/color';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Chat from 'react-native-vector-icons/Ionicons'
import CalendarPicker from 'react-native-calendar-picker';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Send from 'react-native-vector-icons/MaterialIcons'

export default class reservations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStartDate: null,
        };
        this.onDateChange = this.onDateChange.bind(this);
    }
    onDateChange(date) {
        this.setState({
            selectedStartDate: date,
        });
    }

    render() {
        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';
        return (
            <View style={styles.container}>
                <View style={{ height: hp('9%'), }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp('5%'), marginTop: hp('2%'), }}>
                        <Image source={require('./../../image/Logo.png')} style={{ width: 20, marginLeft: wp('4%'), width: 40, height: 40 }} />
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('chatList')}>
                                <Chat style={{ marginLeft: wp('0%'), }} name={'chatbubble-outline'} size={24} color="#000" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('#')}>
                                <Image source={require('./../../image/user2.jpg')} style={{ width: 20, marginLeft: wp('4%'), borderRadius: 30, width: 30, height: 30 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <View style={{ backgroundColor: Color.geryLight, marginVertical: hp('3%'), }}>
                        <CalendarPicker
                            onDateChange={this.onDateChange}
                            todayBackgroundColor="#f2e"
                            selectedDayColor="#7300e6"
                        // selectedDayTextColor="green"
                        // textStyle={{
                        //     fontFamily: 'Cochin',
                        //     color: '#983',
                        //   }}
                        // startFromMonday={true}
                        />
                    </View>
                    <View style={{ marginHorizontal: wp('5%'), }}>
                        {/* <Text>SELECTED DATE:{startDate}</Text> */}
                        <View style={styles.boxView}>
                            <View style={styles.inputView}>
                                <Text style={styles.time}>7:00 pm</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Client Name"
                                    placeholderTextColor={'#000'}
                                    value={this.state.fname}
                                    onChangeText={fname => this.setState({ fname })}
                                />
                            </View>
                            <View style={styles.inputView}>
                                <Text style={styles.time}>7:00 pm</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Client Name"
                                    placeholderTextColor={'#000'}
                                    value={this.state.fname}
                                    onChangeText={fname => this.setState({ fname })}
                                />
                            </View>
                            <TouchableOpacity style={styles.CANCEL}>
                                <Text style={{ fontSize: 12 }}>Book an Appointment</Text>
                            </TouchableOpacity>
                        </View>
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
    boxView: {
        backgroundColor: Color.Pink,
        height: windowHeight - 300,
        borderRadius: 10,
        marginBottom: hp('5%'),
    },
    input: {
        backgroundColor: '#fff',
        width: windowWidth - 140,
        height: hp('8%'),

    },
    CANCEL: {
        backgroundColor: Color.Mustard,
        width: windowWidth - 100,
        height: hp('6%'),
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('5%'),
        marginLeft: 35,
    },
    inputView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: hp('5%'),
        marginHorizontal: '5%',
    },
    time: {
        alignSelf: 'center',
        color: Color.white
    },
});

