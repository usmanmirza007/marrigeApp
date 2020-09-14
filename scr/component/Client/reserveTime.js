import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TextInput, ScrollView, ImageBackground, TouchableOpacity, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Color from './../../constant/color';
import IcIcon from 'react-native-vector-icons/MaterialIcons'
import CalendarPicker from 'react-native-calendar-picker';
import DateTimePickerModal from "react-native-modal-datetime-picker"
import moment from 'moment';

export default class reserveDate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStartDate: null,

            chooseDate: '',
            isVisibleDate: false,
            chooseTime: '',
            isVisibleTime: false
        };
        this.onDateChange = this.onDateChange.bind(this);
    }
    onDateChange(date) {
        this.setState({
            selectedStartDate: date,
        });
        console.log(this.state.selectedStartDate)

    }

    handlePicker = (date) => {
        this.setState({
            isVisibleDate: false,
            chooseDate: moment(date).format('h:mm:ss')
        })
    };

    hidePicker = () => {
        this.setState({
            isVisibleDate: false,

        })
    };

    showPicker = () => {
        this.setState({
            isVisibleDate: true,
        })
    };

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

                    <TouchableOpacity style={[styles.input1, shadow]} onPress={this.showPicker}>
                        <TextInput
                            style={{ alignSelf: 'center', color: '#000', fontWeight: '500', }}

                            //   label='Offer Description'
                            placeholder="Select Time"
                            placeholderTextColor={'#000'}
                            editable={false}
                            value={this.state.chooseDate}
                            onChangeText={chooseDate => this.setState({ chooseDate })}
                        />
                    </TouchableOpacity>
                    <Text style={styles.productName}>Bridal Artist</Text>
                    <TouchableOpacity style={styles.button}
                        onPress={() => this.props.navigation.navigate('reserveDate')}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: Color.Mustard }}>RESERVE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                        onPress={() => this.props.navigation.navigate('#')}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: Color.Mustard }}>MESSAGE</Text>
                    </TouchableOpacity>
                    <Text style={styles.text}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</Text>
                    <DateTimePickerModal
                        isVisible={this.state.isVisibleDate}
                        onConfirm={this.handlePicker}
                        onCancel={this.hidePicker}
                        mode={'time'}
                        datePickerModeAndroid={'spinner'}
                    />
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('reserveSuccess') }} style={styles.checkoutView}>
                        <Text style={styles.checkout}>RESERVE DATE</Text>
                    </TouchableOpacity>
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
        backgroundColor: Color.LightMustard,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    text: {
        fontSize: 12,
        marginHorizontal: wp('5%'),
    },
    productName: {
        alignSelf: 'center',
        fontWeight: '700',
        marginVertical: hp('2%'),
        marginTop: hp('10%'),
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
        width: wp('60%'),
        height: hp('10%'),
        backgroundColor: '#fff',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: hp('-20%'),
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