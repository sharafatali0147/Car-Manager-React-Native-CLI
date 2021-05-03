import React, { useEffect} from 'react'
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  ScrollView,
  Image,
  Linking,
    Share,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';
// import Theme from '../Constants/Theme';
// import Swiper from 'react-native-swiper';
// import Header from '../Components/Header';
import Card from '../Card'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../constants/Colors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../redux/actions/actions';

const iconeSize = Colors.iconeSize;
const iconColor = Colors.btnColor;


const Feed = ({ navigation }) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.userState.currentUser)

    useEffect(() => {
        dispatch(fetchUser());
    }, []);

    if (!currentUser) {
        return (
            <View style={styles.container}>
                <Card style={styles.card}>
                <ActivityIndicator size='large' color='green' />
                <Text>
                    Current user Loading...
                </Text>
                </Card>
            </View>
        );
    }
    
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.userName}>Welcome! {currentUser.name}</Text>
            <Text style={{color: Colors.gray, fontSize: 17}}>Car Number: {currentUser.carNumberPlate }</Text>
            <View style={styles.subContainer}>
                <TouchableOpacity
                    style={styles.product}
                    onPress={() => navigation.navigate('Fuel')}
                >
                    <MaterialCommunityIcons name='fuel' size={iconeSize} color={iconColor} />
                    <Text style={styles.sourceName}>Fuel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.product}
                    onPress={() => navigation.navigate('Maintenance')}
                >
                    <MaterialIcons name='car-repair' size={iconeSize} color={iconColor} />
                    <Text style={styles.sourceName}>Maintenance</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.product}
                    onPress={() => navigation.navigate('SpareParts')}
                >
                    <MaterialCommunityIcons name='car-cog' size={iconeSize} color={iconColor} />
                    <Text style={styles.sourceName}>Spare Parts</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.subContainer}>
                <TouchableOpacity
                    style={styles.product}
                    onPress={() => navigation.navigate('Cleaning')}
                >
                    <MaterialCommunityIcons name='car-wash' size={iconeSize} color={iconColor} />
                    <Text style={styles.sourceName}>Cleaning</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.product}
                    onPress={() => navigation.navigate('EngineTuning')}
                >
                    <MaterialCommunityIcons name='engine' size={iconeSize} color={iconColor} />
                    <Text style={styles.sourceName}>Engine Tuning</Text>
                </TouchableOpacity>
                
                
                <TouchableOpacity
                    style={styles.product}
                    onPress={() => navigation.navigate('Service')}
                >
                    <MaterialIcons name='miscellaneous-services' size={iconeSize} color={iconColor} />
                    <Text style={styles.sourceName}>Service</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.subContainer}>
                <TouchableOpacity
                    style={styles.product}
                    onPress={() => navigation.navigate('Album')}
                >
                    <MaterialCommunityIcons name='image-album' size={iconeSize} color={iconColor} />
                    <Text style={styles.sourceName}>Album</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.product}
                    onPress={() => navigation.navigate('About')}
                >
                    <AntDesign name="infocirlceo" size={iconeSize} color={iconColor} />

                    <Text style={styles.sourceName}>About us</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.product}
                    onPress={() => Linking.openURL('https://play.google.com')}
                >
                    <MaterialIcons name="feedback" size={iconeSize} color={iconColor} />
                    <Text style={styles.sourceName}>Feedback</Text>
                </TouchableOpacity>
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
    container: {
    flex: 1,
    backgroundColor: '#008080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    padding: 20,
    marginHorizontal: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
