import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TextInput, ScrollView, ImageBackground, TouchableOpacity, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Color from './../../constant/color';
import Edit from 'react-native-vector-icons/MaterialIcons'
import Delete from 'react-native-vector-icons/MaterialCommunityIcons'
import Back from 'react-native-vector-icons/MaterialIcons'

export default class shoppingCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    renderRow = ({ item }) => {
        return (
            <View>
                {/* <Image source={item.image1} style={{ width: 50, height: 50, marginRight: 10, borderRadius: 5 }} resizeMode='stretch' /> */}
                <Image source={item.image} style={{ width: 100, height: 100, marginRight: 10, borderRadius: 5 }} resizeMode='stretch' />
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: hp('9%'), }}>
                    <View style={{ marginHorizontal: wp('5%'), marginTop: hp('2%'), }}>
                        <Back style={{ marginLeft: -10, marginTop: -5, }} name={'keyboard-arrow-left'} size={40} color="#000"
                            onPress={() => this.props.navigation.goBack()} />
                    </View>
                </View>
                <Text style={styles.title}>Shopping Cart</Text>
                <ScrollView>
                    <View style={styles.mainView}>

                        <TouchableOpacity style={[styles.mainCart]}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('./../../image/user2.jpg')} style={styles.imageSecond} resizeMode='stretch' />
                                <View style={styles.heartView}>
                                    <View>
                                        <Text style={styles.name}>Product Name</Text>
                                        <Text style={styles.price}>$354.125</Text>
                                    </View>
                                    <View>
                                        <Edit style={{ marginLeft: wp('20%'), }} name={'edit'} size={20} color={Color.greyPrimray}
                                            onPress={
                                                () => this.props.navigation.navigate('#')} />
                                        <Delete style={{ marginLeft: wp('20%'), marginTop: hp('5%'), }} name={'delete'} size={20} color={Color.greyPrimray}
                                            onPress={
                                                () => this.props.navigation.navigate('#')} />
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.mainCart]}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('./../../image/user2.jpg')} style={styles.imageSecond} resizeMode='stretch' />
                                <View style={styles.heartView}>
                                    <View>
                                        <Text style={styles.name}>Product Name</Text>
                                        <Text style={styles.price}>$354.125</Text>
                                    </View>
                                    <View>
                                        <Edit style={{ marginLeft: wp('20%'), }} name={'edit'} size={20} color={Color.greyPrimray}
                                            onPress={
                                                () => this.props.navigation.navigate('#')} />
                                        <Delete style={{ marginLeft: wp('20%'), marginTop: hp('5%'), }} name={'delete'} size={20} color={Color.greyPrimray}
                                            onPress={
                                                () => this.props.navigation.navigate('#')} />
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.mainCart]}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('./../../image/user2.jpg')} style={styles.imageSecond} resizeMode='stretch' />
                                <View style={styles.heartView}>
                                    <View>
                                        <Text style={styles.name}>Product Name</Text>
                                        <Text style={styles.price}>$354.125</Text>
                                    </View>
                                    <View>
                                        <Edit style={{ marginLeft: wp('20%'), }} name={'edit'} size={20} color={Color.greyPrimray}
                                            onPress={
                                                () => this.props.navigation.navigate('#')} />
                                        <Delete style={{ marginLeft: wp('20%'), marginTop: hp('5%'), }} name={'delete'} size={20} color={Color.greyPrimray}
                                            onPress={
                                                () => this.props.navigation.navigate('#')} />
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.totalView}>
                            <Text style={styles.name}>Total Amount</Text>
                            <Text style={styles.price}>$966.54</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress = {() => {this.props.navigation.navigate('completeOrder')}} style={styles.checkoutView}>
                        <Text style={styles.checkout}>CHECKOUT</Text>
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
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    mainView: {
        marginHorizontal: wp('5%'),
    },
    title: {
        color: Color.green,
        marginBottom: hp('3%'),
        fontWeight: '700',
        fontSize: 15,
        marginLeft: wp('5%'),
    },
    mainCart: {
        backgroundColor: Color.geryLight,
        // height: hp('17%'),
        borderRadius: 5,
        padding: 10,
        marginBottom: hp('2%'),
    },
    imageSecond: {
        width: 70, height: 70,
        //  marginRight: 10, 
        borderRadius: 5,
    },
    heartView: {
        flexDirection: 'row',
        marginLeft: wp('5%'),
    },
    name: {
        fontSize: 13,
        fontWeight: '700',
    },
    price: {
        fontSize: 13,
        fontWeight: '700',
        color: Color.green,
    },
    totalView: {
        alignItems: 'flex-end',
        marginTop: hp('0%'),
    },
    border: {
        borderBottomColor: Color.greyPrimray,
        borderBottomWidth: 2,
        marginVertical: hp('2%'),
    },
    checkoutView:{
        borderWidth: 2,
        borderColor: Color.black,
        marginHorizontal: wp('5%'),
        height: hp('10%'),
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: hp('5%'),
    },
    checkout:{
        color: Color.green,
        fontWeight: '700'
    }
});