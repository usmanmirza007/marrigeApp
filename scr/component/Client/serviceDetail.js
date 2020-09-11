import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TextInput, ScrollView, ImageBackground, TouchableOpacity, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Color from './../../constant/color';
import AntIcon from 'react-native-vector-icons/AntDesign'
import IcIcon from 'react-native-vector-icons/MaterialIcons'
import Music from 'react-native-vector-icons/Ionicons'
import Down from 'react-native-vector-icons/Feather'
import Star from 'react-native-vector-icons/Entypo'
import Share from 'react-native-vector-icons/Entypo'
import Send from 'react-native-vector-icons/MaterialIcons'
import { SliderBox } from "react-native-image-slider-box";

export default class serviceDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                { image: require('./../../image/user2.jpg') },
                { image: require('./../../image/user2.jpg') },
                { image: require('./../../image/user2.jpg') },
                { image: require('./../../image/user2.jpg') },
            ],
            ImagesState: [
                require('./../../image/user2.jpg'),
                require('./../../image/user2.jpg'),
                require('./../../image/user2.jpg'),
                require('./../../image/user2.jpg'),
                require('./../../image/user2.jpg'),
            ]

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
                        <IcIcon style={{ marginLeft: -10, marginTop: -5, }} name={'keyboard-arrow-left'} size={40} color="#000"
                            onPress={
                                () => this.props.navigation.navigate('#')} />
                    </View>
                </View>
                <ScrollView>
                    {/* <View style={{ position: 'absolute', marginTop: hp('5%'), marginLeft: wp('5%'), }}>
                        <IcIcon style={{ marginLeft: -10, marginTop: -5, }} name={'keyboard-arrow-left'} size={40} color="#000"
                            onPress={
                                () => this.props.navigation.navigate('#')} />
                    </View> */}
                    <SliderBox
                        // ImageComponent={FastImage}
                        images={this.state.ImagesState}
                        sliderBoxHeight={150}
                        onCurrentImagePressed={index => console.log(`image ${index} pressed`)}
                        dotColor="#fff"
                        inactiveDotColor="#90A4AE"
                        paginationBoxVerticalPadding={20}
                        autoplay
                        circleLoop
                        resizeMethod={'resize'}
                        resizeMode={'stretch'}
                        paginationBoxStyle={{
                            position: "absolute",
                            bottom: 0,
                            padding: 0,
                            alignItems: "center",
                            alignSelf: "center",
                            justifyContent: "center",
                            paddingVertical: 10
                        }}
                        dotStyle={{
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            marginHorizontal: 0,
                            padding: 0,
                            margin: 0,
                            backgroundColor: "rgba(128, 128, 128, 0.92)"
                        }}
                        ImageComponentStyle={{ borderRadius: 15, width: '90%', marginTop: 5 }}
                        imageLoadingColor="#2196F3"
                    />
                    <Text style={styles.productName}>Bridal Artist</Text>

                    <TouchableOpacity style={styles.button}
                        onPress={() => this.props.navigation.navigate('tab')}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: Color.Mustard }}>RESERVE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                        onPress={() => this.props.navigation.navigate('tab')}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: Color.Mustard }}>MESSAGE</Text>
                    </TouchableOpacity>
                    <View style={{ marginHorizontal: wp('5%'), }}>
                        <Text style={styles.text}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</Text>
                        <View style={styles.box}>
                            <View style={styles.reviewView}>
                                <Text style={styles.performance}>Performance</Text>
                                <View style={styles.review}>
                                    <Star style={{}} name={'star'} size={22} color={Color.star}
                                        onPress={() => this.props.navigation.navigate('#')} />
                                    <Star style={{}} name={'star'} size={22} color={Color.star}
                                        onPress={() => this.props.navigation.navigate('#')} />
                                    <Star style={{}} name={'star'} size={22} color={Color.star}
                                        onPress={() => this.props.navigation.navigate('#')} />
                                    <Star style={{}} name={'star'} size={22} color={Color.star}
                                        onPress={() => this.props.navigation.navigate('#')} />
                                    <Star style={{}} name={'star'} size={22} color={Color.greyPrimray}
                                        onPress={() => this.props.navigation.navigate('#')} />
                                </View>
                            </View>
                            <View style={styles.reviewView}>
                                <Text style={styles.result}>Result</Text>
                                <View style={styles.review}>
                                    <Star style={{}} name={'star'} size={22} color={Color.star}
                                        onPress={() => this.props.navigation.navigate('#')} />
                                    <Star style={{}} name={'star'} size={22} color={Color.star}
                                        onPress={() => this.props.navigation.navigate('#')} />
                                    <Star style={{}} name={'star'} size={22} color={Color.star}
                                        onPress={() => this.props.navigation.navigate('#')} />
                                    <Star style={{}} name={'star'} size={22} color={Color.star}
                                        onPress={() => this.props.navigation.navigate('#')} />
                                    <Star style={{}} name={'star'} size={22} color={Color.star}
                                        onPress={() => this.props.navigation.navigate('#')} />
                                </View>
                            </View>
                            <View style={styles.innerBox}>
                                <View style={styles.reviewView}>
                                    <Text style={styles.result}>John Doe</Text>
                                    <View style={styles.review}>
                                        <Star style={{}} name={'star'} size={22} color={Color.star}
                                            onPress={() => this.props.navigation.navigate('#')} />
                                        <Star style={{}} name={'star'} size={22} color={Color.star}
                                            onPress={() => this.props.navigation.navigate('#')} />
                                        <Star style={{}} name={'star'} size={22} color={Color.star}
                                            onPress={() => this.props.navigation.navigate('#')} />
                                        <Star style={{}} name={'star'} size={22} color={Color.star}
                                            onPress={() => this.props.navigation.navigate('#')} />
                                        <Star style={{}} name={'star'} size={22} color={Color.star}
                                            onPress={() => this.props.navigation.navigate('#')} />
                                    </View>

                                </View>
                                <Text style={{ marginLeft: wp('5%'), marginTop: hp('1%'), fontSize: 12 }}>Very Good Very Skilled</Text>
                            </View>
                            <View style={styles.innerBox1}>
                                <View style={styles.reviewView}>
                                    <Text style={styles.result}>John Doe</Text>
                                    <View style={styles.review}>
                                        <Star style={{}} name={'star'} size={22} color={Color.star}
                                            onPress={() => this.props.navigation.navigate('#')} />
                                        <Star style={{}} name={'star'} size={22} color={Color.star}
                                            onPress={() => this.props.navigation.navigate('#')} />
                                        <Star style={{}} name={'star'} size={22} color={Color.star}
                                            onPress={() => this.props.navigation.navigate('#')} />
                                        <Star style={{}} name={'star'} size={22} color={Color.star}
                                            onPress={() => this.props.navigation.navigate('#')} />
                                        <Star style={{}} name={'star'} size={22} color={Color.star}
                                            onPress={() => this.props.navigation.navigate('#')} />
                                    </View>
                                </View>
                                <Text style={{ marginLeft: wp('5%'), marginTop: hp('1%'), fontSize: 12 }}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</Text>
                                <Down style={{ alignSelf: 'center', marginTop: hp('3%'), }} name={'chevrons-down'} size={22} color="#000"
                                    onPress={() => this.props.navigation.navigate('#')} />
                            </View>

                        </View>
                        <View style={[styles.leaveView, shadow]}>
                            <Image source={require('./../../image/user2.jpg')} style={{ width: 20, marginHorizontal: wp('4%'), borderRadius: 30, width: 30, height: 30 }} />
                            <Text>Leave a review</Text>
                        </View>
                    </View>
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
    leaveView: {
        backgroundColor: Color.white,
        marginVertical: hp('3%'),
        flexDirection: 'row',
        height: hp('10%'),
        alignItems: 'center'
    },
    name: {
        fontSize: 15,
        fontWeight: '700',
    },
    productName: {
        alignSelf: 'center',
        fontWeight: '700',
        marginVertical: hp('2%'),
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
    text: {
        fontSize: 12
    },
    john: {
        color: '#000',
        fontSize: 12
    },
    play: {
        color: Color.orange,
        fontSize: 13,
        marginLeft: wp('5%'),
    },
    detail: {
        color: '#000',
        fontWeight: '700',
        fontSize: 13,
    },
    reviewView: {
        flexDirection: 'row',
        marginLeft: wp('5%'),
        marginTop: hp('2%'),
    },
    review: {
        flexDirection: 'row',
        marginLeft: wp('5%'),
    },
    performance: {
        color: Color.greyPrimray,
        fontSize: 12
    },
    result: {
        color: Color.greyPrimray,
        fontSize: 12,
        marginRight: wp('11%'),
    },
    leave: {
        color: Color.greyPrimray,
        fontSize: 12,
    },
    innerBox: {
        backgroundColor: Color.geryLight,
        height: hp('12%'),
        width: wp('80%'),
        borderRadius: 5,
        marginLeft: wp('5%'),
        marginTop: hp('1%'),
    },
    innerBox1: {
        backgroundColor: Color.geryLight,
        height: hp('18%'),
        width: wp('80%'),
        borderRadius: 5,
        marginLeft: wp('5%'),
        marginTop: hp('1%'),
    },
    box: {
        backgroundColor: Color.LightPink,
        borderRadius: 5,
        padding: 5,
        marginTop: hp('2%'),
        height: hp('55%'),

    },
    input: {
        paddingLeft: 10,
        backgroundColor: Color.geryLight,
        color: '#000',
        height: 35,
        width: 220,
        fontWeight: '500',
        borderRadius: 5,
        marginRight: wp('5%'),
    },
    send: {
        backgroundColor: '#67C7E0',
        width: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buy: {
        color: Color.white,

    },
});