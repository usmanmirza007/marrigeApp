import {createStackNavigator} from 'react-navigation-stack';
import SafeAreaView from 'react-native-safe-area-context';
import { createAppContainer } from 'react-navigation';
import mainScreen from './../component/mainScreen';
import dashBoardBottomTab from './dashBoardBottomTab';
import selection_signIn from '../component/Client/selection_signIn';
import selection_signUp from '../component/Client/selection_signUp';
import signUp from '../component/Client/signUp';
import signIn from '../component/Client/signIn';
import checkOut from '../component/Client/checkOut';
import serviceList from '../component/Client/serviceList';
import serviceDetail from '../component/Client/serviceDetail';

const Route =  createStackNavigator({
    
    mainScreen: {
        screen: mainScreen,
        navigationOptions: {
            headerShown: false
        },
    },
    serviceList: {
        screen: serviceList,
        serviceList: {
            headerShown: false
        },
    },
    serviceDetail: {
        screen: serviceDetail,
        navigationOptions: {
            headerShown: false
        },
    },
    selection_signIn: {
        screen: selection_signIn,
        navigationOptions: {
            headerShown: false
        },
    },
    selection_signUp: {
        screen: selection_signUp,
        navigationOptions: {
            headerShown: false
        },
    },
    signUp: {
        screen: signUp,
        navigationOptions: {
            headerShown: false
        },
    },
    checkOut: {
        screen: checkOut,
        navigationOptions: {
            headerShown: false
        },
    },
    signIn: {
        screen: signIn,
        navigationOptions: {
            headerShown: false
        },
    },
    tab: {
        screen: dashBoardBottomTab,
        navigationOptions: {
            headerShown: false
        },
    },
  },{
      initialRouteName: 'mainScreen'
  })

export default createAppContainer(Route);

