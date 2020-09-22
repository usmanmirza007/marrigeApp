import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import servicesClient from '../component/Client/servicesClient';
import shop from '../component/Client/shop';
import reservations from '../component/Client/reservations';
import checkList from '../component/Client/checkList';
import Color from '../constant/color';
import Home from 'react-native-vector-icons/MaterialCommunityIcons'
import AntIcon from 'react-native-vector-icons/Feather'
import Calendar from 'react-native-vector-icons/MaterialCommunityIcons'
import Check from 'react-native-vector-icons/MaterialIcons'

const TabScreens = createMaterialBottomTabNavigator({
   
    servicesClient:{
        screen: servicesClient,
        navigationOptions: {
            tabBarLabel: "Services",
            tabBarIcon: ({ tintColor }) => (
                <Home style={{ marginLeft: wp('0%'), }} name={'home-heart'} size={24} color={tintColor}
                onPress={ () => this.props.navigation.navigate('#')} />
            )
        },
    },
    shop:{
        screen: shop,
        navigationOptions: {
            tabBarLabel: "Shop",
            tabBarIcon: ({ tintColor }) => (
                <AntIcon style={{ marginLeft: wp('0%'), }} name={'shopping-cart'} size={24} color={tintColor}
                onPress={ () => this.props.navigation.navigate('#')} />
            )
        },
    },
    reservations:{
        screen: reservations,
        navigationOptions: {
            tabBarLabel: "Reservations",
            tabBarIcon: ({ tintColor }) => (
                <Calendar style={{ marginLeft: wp('0%'), }} name={'calendar-heart'} size={24} color={tintColor}
                onPress={ () => this.props.navigation.navigate('#')} />
            )
        },
    },
    checkList:{
        screen: checkList,
        navigationOptions: {
            tabBarLabel: "Check List",
            tabBarIcon: ({ tintColor }) => (
                <Check style={{ marginLeft: wp('0%'), }} name={'preview'} size={24} color={tintColor}
                onPress={ () => this.props.navigation.navigate('#')} />
            )
        },
    },
}, {
    order: ['servicesClient', 'shop', 'reservations', 'checkList',],
    initialRouteName: 'servicesClient',
    activeColor: Color.green,
    inactiveColor: Color.greyPrimray,
    barStyle: {backgroundColor: Color.geryLight, shadowOpacity: 0.6, elevation: 8, shadowOffset:{height: 5, width: 0} },
  },);

export default (TabScreens);