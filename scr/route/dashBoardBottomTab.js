import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import services from './../component/Client/services';
import shop from './../component/Client/shop';
import reservations from './../component/Client/reservations';
import checkList from './../component/Client/checkList';
import Color from './../constant/color';
import AntIcon from 'react-native-vector-icons/AntDesign'

const TabScreens = createMaterialBottomTabNavigator({
   
    services:{
        screen: services,
        navigationOptions: {
            tabBarLabel: "Services",
            tabBarIcon: ({ tintColor }) => (
                <AntIcon style={{ marginLeft: wp('0%'), }} name={'hearto'} size={24} color={tintColor}
                onPress={ () => this.props.navigation.navigate('#')} />
            )
        },
    },
    shop:{
        screen: shop,
        navigationOptions: {
            tabBarLabel: "Shop",
            tabBarIcon: ({ tintColor }) => (
                <AntIcon style={{ marginLeft: wp('0%'), }} name={'hearto'} size={24} color={tintColor}
                onPress={ () => this.props.navigation.navigate('#')} />
            )
        },
    },
    reservations:{
        screen: reservations,
        navigationOptions: {
            tabBarLabel: "Reservations",
            tabBarIcon: ({ tintColor }) => (
                <AntIcon style={{ marginLeft: wp('0%'), }} name={'hearto'} size={24} color={tintColor}
                onPress={ () => this.props.navigation.navigate('#')} />
            )
        },
    },
    checkList:{
        screen: checkList,
        navigationOptions: {
            tabBarLabel: "Check List",
            tabBarIcon: ({ tintColor }) => (
                <AntIcon style={{ marginLeft: wp('0%'), }} name={'hearto'} size={24} color={tintColor}
                onPress={ () => this.props.navigation.navigate('#')} />
            )
        },
    },
}, {
    order: ['services', 'shop', 'reservations', 'checkList',],
    initialRouteName: 'services',
    activeColor: '#fff',
    inactiveColor: Color.greyPrimray,
    barStyle: { backgroundColor: Color.Mustard},
  },);

export default (TabScreens);