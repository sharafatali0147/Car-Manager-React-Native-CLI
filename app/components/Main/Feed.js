import React from 'react'
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  ScrollView,
  Image,
  Linking,
  Share,
} from 'react-native';
// import Theme from '../Constants/Theme';
// import Swiper from 'react-native-swiper';
// import Header from '../Components/Header';
import Card from '../Card'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../constants/Colors';

const iconeSize = Colors.iconeSize;
const iconColor = Colors.btnColor;


const Feed = ({navigation}) => {
    
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.userName}>Welcome! Ali(fetchName)</Text>
            <View style={styles.subContainer}>
                <Pressable
                    style={styles.product}
                    onPress={() => navigation.navigate('Fuel')}
                >
                    <MaterialCommunityIcons name='fuel' size={iconeSize} color={iconColor} />
                    <Text style={styles.sourceName}>Fuel</Text>
                </Pressable>
                <Pressable
                    style={styles.product}
                    onPress={() => navigation.navigate('Maintenance')}
                >
                    <MaterialIcons name='car-repair' size={iconeSize} color={iconColor} />
                    <Text style={styles.sourceName}>Maintenance</Text>
                </Pressable>
                <Pressable
                    style={styles.product}
                    onPress={() => navigation.navigate('SpareParts')}
                >
                    <MaterialCommunityIcons name='car-cog' size={iconeSize} color={iconColor} />
                    <Text style={styles.sourceName}>Spare Parts</Text>
                </Pressable>
            </View>
            <View style={styles.subContainer}>
                <Pressable
                    style={styles.product}
                    onPress={() => navigation.navigate('Cleaning')}
                >
                    <MaterialCommunityIcons name='car-wash' size={iconeSize} color={iconColor} />
                    <Text style={styles.sourceName}>Cleaning</Text>
                </Pressable>
                <Pressable
                    style={styles.product}
                    onPress={() => navigation.navigate('EngineTuning')}
                >
                    <MaterialCommunityIcons name='engine' size={iconeSize} color={iconColor} />
                    <Text style={styles.sourceName}>Engine Tuning</Text>
                </Pressable>
                
                
                <Pressable
                    style={styles.product}
                    onPress={() => navigation.navigate('Service')}
                >
                    <MaterialIcons name='miscellaneous-services' size={iconeSize} color={iconColor} />
                    <Text style={styles.sourceName}>Service</Text>
                </Pressable>
            </View>
            <View style={styles.subContainer}>
                <Pressable
                    style={styles.product}
                    onPress={() => navigation.navigate('Album')}
                >
                    <MaterialCommunityIcons name='image-album' size={iconeSize} color={iconColor} />
                    <Text style={styles.sourceName}>Album</Text>
                </Pressable>
                <Pressable
                    style={styles.product}
                    onPress={() => navigation.navigate('About')}
                >
                    <AntDesign name="infocirlceo" size={iconeSize} color={iconColor} />

                    <Text style={styles.sourceName}>About us</Text>
                </Pressable>

                <Pressable
                    style={styles.product}
                    onPress={() => Linking.openURL('https://play.google.com')}
                >
                    <MaterialIcons name="feedback" size={iconeSize} color={iconColor} />
                    <Text style={styles.sourceName}>Feedback</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Feed

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: '5%',
        backgroundColor: Colors.MainTheme,
        // justifyContent: 'space-between'
        
    },
    userName: {
        fontSize: 18,
        color: Colors.btnColor,
        // fontFamily: Theme.fontFamily,
        marginVertical: '2%',
        marginHorizontal: '5%',
        fontWeight: 'bold',
  },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: '5%',
        // paddingHorizontal: '5%',
        // flexDirection: 'row',
        // marginBottom: '10%',
        // justifyContent: 'space-between',
        // marginHorizontal: '5%',
        // marginBottom: '3%',
    },
    product: {
        alignItems: 'center',
        // justifyContent: 'space-between',
        margin: '10%'
    },
    sourceName: {
        // color: Theme.redColor,
        fontSize: 13,
        marginTop: '6%',
    },    
})
