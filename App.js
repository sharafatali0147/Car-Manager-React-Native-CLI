/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, ActivityIndicator, Button} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import auth from '@react-native-firebase/auth';

import rootReducer from './app/redux/reducers/combineReducer';
import MainScreen from './app/components/Main';
import FuelScreen from './app/components/screens/Fuel';
import SparePartsScreen from './app/components/screens/PurchaseOfSpareParts';
import CleaningScreen from './app/components/screens/Cleaning';
import EngineTuningScreen from './app/components/screens/EngineTuning';
import ServiceScreen from './app/components/screens/Service';
import AlbumScreen from './app/components/screens/Album';
import AboutScreen from './app/components/screens/About';
import MaintenanceScreen from './app/components/screens/Maintenance';
import LandingScreen  from './app/components/auth/Landing';
import LoginScreen  from './app/components/auth/Login';
import RegisterScreen from './app/components/auth/RegisterFunction';
import Card from './app/components/Card';
import Colors from './app/components/constants/Colors';
// import ImagePIcker from './app/components/common/ImagePIcker';



const Stack = createStackNavigator();
const store = createStore(rootReducer, applyMiddleware(thunk));

const App = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);


  // user checking from firebase
  const userFetching = async () => {

    auth().onAuthStateChanged((user) => {
        if (!user) {
          setLoggedIn(false);
          console.log("user not found", user);
          setLoaded(true);
        } else {
          setLoggedIn(true);
          const userObj = { userId: user.uid, userEmail: user.email }
          setCurrentUser(userObj);
          // console.log("user", user);
          setLoaded(true);
        }
      })
  }

  useEffect(() => {
    userFetching();
    // console.log("useEffect as did mount one time rendring!");
  }, []);
  
  if (!loaded) {
      return (
        <View style={styles.container}>
          <Card style={styles.card}>
            <ActivityIndicator size='large' color='green' />
            <Text>
              Current user Loading...
            </Text>
          </Card>
        </View>
      )
    }

    // if user not found then display this code snippet
  if (!loggedIn) {

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing" >
          <Stack.Screen
            name="Landing"
            component={LandingScreen}
            options={{ headerShown: true, title: 'Welcome Screen' }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{headerShown: true, title: "Please Register"}}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: true, title: "Please Login"}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    ); 
  }

  if (loggedIn) {
    return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main" >
          {/* ======= auth ====== */}
          
          {/* ======= End of auth ===== */}
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{ headerShown: true, title: 'Car Manager',  }}
          />
          <Stack.Screen
            name="Fuel"
            component={FuelScreen}
            options={{ headerShown: true, title: 'Add Cost of Refueling', }}
            navigation={props.navigation}
          />
          <Stack.Screen
            name="Maintenance"
            component={MaintenanceScreen}
            options={{ headerShown: true, title: 'Add Cost of Maintenance' }}
          />
          <Stack.Screen
            name="SpareParts"
            component={SparePartsScreen}
            options={{ headerShown: true, title: 'Add Cost of Spare parts' }}
          />
          <Stack.Screen
            name="Cleaning"
            component={CleaningScreen}
            options={{ headerShown: true, title: 'Add Cost of Car Cleaning' }}
          />
          <Stack.Screen
            name="EngineTuning"
            component={EngineTuningScreen}
            options={{ headerShown: true, title: 'Add Cost of EngineTuning' }}
          />
          <Stack.Screen
            name="Service"
            component={ServiceScreen}
            options={{ headerShown: true, title: 'Add Cost of Service' }}
          />
          <Stack.Screen
            name="Album"
            component={AlbumScreen}
            options={{ headerShown: true, title: 'Album Screen' }}
          />
          <Stack.Screen
            name="About"
            component={AboutScreen}
            options={{ headerShown: true, title: 'About Screen' }}
          />
          {/* <Stack.Screen
            name="ImagePIcker"
            component={ImagePIcker}
            options={{ headerShown: true, title: 'About Screen' }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
  }
};

const styles = StyleSheet.create({
  
});

export default App;
