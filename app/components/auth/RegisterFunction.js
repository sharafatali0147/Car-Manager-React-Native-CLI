import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Pressable, Text } from 'react-native'
// import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import Card from '../Card';

const RegisterFunction = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [carNumberPlate, setcarNumberPlate] = useState('');
    
    const onSignUp = () => {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then((result) => {
                console.log('User account created & signed in!');

                firestore()
                    .collection("users")
                    .doc(auth().currentUser.uid).set({
                        name,
                        email,
                        password,
                        carNumberPlate
                    }).then(() => {

                        setName('');
                        setEmail('');
                        setPassword('');
            
                        navigation.navigate('Main');
                    }).catch();
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {

                    console.log('That email address is already in use!');
                    alert("That email address is already in use!");
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                    alert("That email address is invalid!");
                }

                console.error(error);
            });
    }

    return (
        <View style={styles.view}>
            <Card style={styles.card}>
                <View style={styles.fieldView}> 
                    <TextInput
                        placeholder="Name"
                        value={name}
                        onChangeText={(name) => setName(name)}
                    />
                </View>
                <View style={styles.fieldView}>
                    <TextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>
                <View style={styles.fieldView}>
                    <TextInput
                        placeholder="Password"
                        value={password}
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>
                <View style={styles.fieldView}>
                    <TextInput
                        placeholder="Car Number Plate"
                        value={carNumberPlate}
                        secureTextEntry={false}
                        onChangeText={(carNumber) => setcarNumberPlate(carNumber)}
                    />
                </View>

                <Button
                    // onPress={() => navigation.navigate('Main')}
                    onPress={() => onSignUp()}
                    title="Sign Up"
                />
                {/* <Pressable
                    onPress = {() => navigation.navigate('Main')}
                >
                    <Text>go Main</Text>
                </Pressable> */}
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fffff0',
    },
    card: {
        backgroundColor: '#008080',
        // backgroundColor: '#f7287b',
        // backgroundColor: 'red',
        padding: 20,
        paddingHorizontal: 40,
        margin: 30,
        justifyContent: 'center',
        alignContent: 'center',
        
    },
    fieldView: {
        marginBottom: 14,
        paddingHorizontal: 7,
        backgroundColor: '#fffff0',
        // marginHorizontal: 30,
    }
});

export default RegisterFunction
