import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import services from '../component/Services/services';
import shopService from '../component/Services/shopService';
import reservationsService from '../component/Services/reservationsService';
import checkListService from '../component/Services/checkListService';

import Color from '../constant/color';
import Home from 'react-native-vector-icons/MaterialCommunityIcons'
import AntIcon from 'react-native-vector-icons/AntDesign'
import Calendar from 'react-native-vector-icons/MaterialCommunityIcons'
import Check from 'react-native-vector-icons/MaterialCommunityIcons'

const TabScreens = createMaterialBottomTabNavigator({
   
    services:{
        screen: services,
        navigationOptions: {
            tabBarLabel: "Services",
            tabBarIcon: ({ tintColor }) => (
                <Home style={{ marginLeft: wp('0%'), }} name={'home-heart'} size={24} color={tintColor}
                onPress={ () => this.props.navigation.navigate('#')} />
            )
        },
    },
    shopService:{
        screen: shopService,
        navigationOptions: {
            tabBarLabel: "Shop",
            tabBarIcon: ({ tintColor }) => (
                <AntIcon style={{ marginLeft: wp('0%'), }} name={'hearto'} size={24} color={tintColor}
                onPress={ () => this.props.navigation.navigate('#')} />
            )
        },
    },
    reservationsService:{
        screen: reservationsService,
        navigationOptions: {
            tabBarLabel: "Reservations",
            tabBarIcon: ({ tintColor }) => (
                <Calendar style={{ marginLeft: wp('0%'), }} name={'calendar-heart'} size={24} color={tintColor}
                onPress={ () => this.props.navigation.navigate('#')} />
            )
        },
    },
    checkListService:{
        screen: checkListService,
        navigationOptions: {
            tabBarLabel: "Check List",
            tabBarIcon: ({ tintColor }) => (
                <Check style={{ marginLeft: wp('0%'), }} name={'comment-check-outline'} size={24} color={tintColor}
                onPress={ () => this.props.navigation.navigate('#')} />
            )
        },
    },
}, {
    order: ['services', 'shopService', 'reservationsService', 'checkListService',],
    initialRouteName: 'services',
    activeColor: '#fff',
    inactiveColor: Color.greyPrimray,
    barStyle: { backgroundColor: Color.Mustard},
  },);

export default (TabScreens);