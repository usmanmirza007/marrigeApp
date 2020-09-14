import {createStackNavigator} from 'react-navigation-stack';
import SafeAreaView from 'react-native-safe-area-context';
import { createAppContainer } from 'react-navigation';
import mainScreen from './../component/mainScreen';
import dashBoardBottomClent from './dashBoardBottomClient';
import mainScreenService from '../component/Client/mainScreenService';
import mainScreenClient from '../component/Client/mainScreenClient';
import signUpClient from '../component/Client/signUpClient';
import signInClient from '../component/Client/signInClient';
import checkOut from '../component/Client/checkOut';
import serviceList from '../component/Client/serviceList';
import serviceDetail from '../component/Client/serviceDetail';
import reserveDate from '../component/Client/reserveDate';
import reserveTime from '../component/Client/reserveTime';
import chatList from '../component/Client/chatList';
import reserveSuccess from '../component/Client/reserveSuccess';
import completeOrder from '../component/Client/comleteOrder';
import signInService from '../component/Services/signInService';
import signUpService from '../component/Services/signUpService';
import signUpContinue from '../component/Services/signUpContinue';
import signUpContinueLast from '../component/Services/signUpContinueLast';
import addToCard from '../component/Services/addToCard';
import logOut from '../component/Services/logOut';
import dashBoardBottomClient from './dashBoardBottomClient';
import dashBoradBottomService from './dashBoradBottomService';

const Route =  createStackNavigator({
    
    mainScreen: {
        screen: mainScreen,
        navigationOptions: {
            headerShown: false
        },
    },
    logOut: {
        screen: logOut,
        navigationOptions: {
            headerShown: false
        },
    },
    reserveSuccess: {
        screen: reserveSuccess,
        navigationOptions: {
            headerShown: false
        },
    },
    chatList: {
        screen: chatList,
        navigationOptions: {
            headerShown: false
        },
    },
    completeOrder: {
        screen: completeOrder,
        navigationOptions: {
            headerShown: false
        },
    },
    serviceList: {
        screen: serviceList,
        navigationOptions: {
            headerShown: false
        },
    },
    reserveDate: {
        screen: reserveDate,
        navigationOptions: {
            headerShown: false
        },
    },
    addToCard: {
        screen: addToCard,
        navigationOptions: {
            headerShown: false
        },
    },
    reserveTime: {
        screen: reserveTime,
        navigationOptions: {
            headerShown: false
        },
    },
    serviceDetail: {
        screen: serviceDetail,
        navigationOptions: {
            headerShown: false
        },
    },
    mainScreenClient: {
        screen: mainScreenClient,
        navigationOptions: {
            headerShown: false
        },
    },
    mainScreenService: {
        screen: mainScreenService,
        navigationOptions: {
            headerShown: false
        },
    },
    signUpClient: {
        screen: signUpClient,
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
    signInClient: {
        screen: signInClient,
        navigationOptions: {
            headerShown: false
        },
    },
    signInService: {
        screen: signInService,
        navigationOptions: {
            headerShown: false
        },
    },
    signUpService: {
        screen: signUpService,
        navigationOptions: {
            headerShown: false
        },
    },
    signUpContinue: {
        screen: signUpContinue,
        navigationOptions: {
            headerShown: false
        },
    },
    signUpContinueLast: {
        screen: signUpContinueLast,
        navigationOptions: {
            headerShown: false
        },
    },
    tab: {
        screen: dashBoardBottomClient,
        navigationOptions: {
            headerShown: false
        },
    },
    tab2: {
        screen: dashBoradBottomService,
        navigationOptions: {
            headerShown: false
        },
    },
  },{
      initialRouteName: 'mainScreen'
  })

export default createAppContainer(Route);

