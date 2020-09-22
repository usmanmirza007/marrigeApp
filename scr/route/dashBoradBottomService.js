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
import AntIcon from 'react-native-vector-icons/Feather'
import Calendar from 'react-native-vector-icons/MaterialCommunityIcons'
import Check from 'react-native-vector-icons/MaterialIcons'

const TabScreens = createMaterialBottomTabNavigator({
   
    services:{
        screen: services,
        navigationOptions: {
            tabBarLabel: "Home",
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
                <AntIcon style={{ marginLeft: wp('0%'), }} name={'shopping-cart'} size={24} color={tintColor}
                onPress={ () => this.props.navigation.navigate('#')} />
            )
        },
    },
    reservationsService:{
        screen: reservationsService,
        navigationOptions: {
            tabBarLabel: "Booking",
            tabBarIcon: ({ tintColor }) => (
                <Calendar style={{ marginLeft: wp('0%'), }} name={'calendar-heart'} size={24} color={tintColor}
                onPress={ () => this.props.navigation.navigate('#')} />
            )
        },
    },
    checkListService:{
        screen: checkListService,
        navigationOptions: {
            tabBarLabel: "Reviews",
            tabBarIcon: ({ tintColor }) => (
                <Check style={{ marginLeft: wp('0%'), }} name={'preview'} size={24} color={tintColor}
                onPress={ () => this.props.navigation.navigate('#')} />
            )
        },
    },
}, {
    order: ['services', 'shopService', 'reservationsService', 'checkListService',],
    initialRouteName: 'services',
    activeColor: Color.green,
    inactiveColor: Color.greyPrimray,
    barStyle: { backgroundColor: Color.geryLight, shadowOpacity: 0.6, elevation: 8, shadowOffset:{height: 5, width: 0} },
  },);

export default (TabScreens);