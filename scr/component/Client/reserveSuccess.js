import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TextInput, ScrollView, ImageBackground, TouchableOpacity, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Color from './../../constant/color';
import IcIcon from 'react-native-vector-icons/MaterialIcons'
import CalendarPicker from 'react-native-calendar-picker';
import DateTimePickerModal from "react-native-modal-datetime-picker"
import moment from 'moment';

export default class reserveSuccess extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: hp('0%'), }}>
                    <View style={{ marginHorizontal: wp('5%'), marginTop: hp('2%'), }}>
                        <IcIcon style={{ marginLeft: -10, marginTop: 5, position: 'absolute', zIndex: 1 }} name={'keyboard-arrow-left'} size={40} color="#000"
                            onPress={() => this.props.navigation.goBack()} />
                    </View>
                </View>
                <ScrollView>
                    <Image source={require('./../../image/user2.jpg')} style={styles.check} resizeMode='stretch' />
                    <Text style={[styles.input1]}>Your Reservation Has Been Made</Text>

                    <Text style={styles.productName}>Bridal Artist</Text>
                    <TouchableOpacity style={styles.button}
                        onPress={() => this.props.navigation.navigate('reserveDate')}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15,}}>RESERVE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                        onPress={() => this.props.navigation.navigate('#')}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15,}}>MESSAGE</Text>
                    </TouchableOpacity>
                    <Text style={styles.text}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</Text>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('servicesClient') }} style={styles.checkoutView}>
                        <Text style={styles.checkout}>CONTINUE</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#969696',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    text: {
        fontSize: 12,
        marginHorizontal: wp('5%'),
        // textAlign: 'center',
    },
    productName: {
        alignSelf: 'center',
        fontWeight: '700',
        marginVertical: hp('2%'),
        marginTop: hp('15%'),
    },
    button: {

        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2, marginBottom: hp('2%'),
        borderColor: Color.black,
        borderRadius: 5,
        height: 50,
        marginHorizontal: wp('5%'),
    },
    check: {
        width: '100%',
        height: 200,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50
    },
    input1: {
        alignSelf: 'center',
        marginTop: hp('20%'),
        position: 'absolute',
        fontSize: 20,
        fontWeight: '900',
        color: Color.white,
        width: '60%',
        textAlign: 'center'
    },
    checkoutView: {
        borderWidth: 2,
        borderColor: Color.black,
        marginHorizontal: wp('5%'),
        height: hp('10%'),
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: hp('3%'),
        marginTop: hp('5%'),

    },
    checkout: {
        color: Color.black,
        fontWeight: '700'
    }
});