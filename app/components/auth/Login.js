import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Pressable } from 'react-native'
import Card from '../Card';
import Colors from '../constants/Colors';
import auth from '@react-native-firebase/auth'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const onSignIn = () => {
        
        auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                alert("loged In");
                console.log('================== API call Result ==================');
                console.log(result);
                console.log('================== Result ==================');
            })
            .catch((error) => {
                console.log('=============== API call erroer =====================');
                console.log(error);
                console.log('=============== error =====================');
            });
        
    }

    return (
        <View style={styles.view}>
            <Card style={styles.card}>
                <View style={styles.fieldView}>
                    <TextInput
                        placeholder="email"
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>
                <View style={styles.fieldView}>
                    <TextInput
                        placeholder="password"
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>
                <Pressable
                    style={styles.product}
                    // onPress={() => navigation.navigate('Maintenance')}
                >

                    <Button
                        onPress={() => onSignIn()}
                        title="Sign In"
                    />
                </Pressable>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.MainTheme,
    },
    card: {
        backgroundColor: Colors.SecondTheme,
        // backgroundColor: '#f7287b',
        // backgroundColor: 'red',
        padding: '10%',
        paddingHorizontal: '10%',
        margin: '5%',
        justifyContent: 'center',
        alignContent: 'center',
        
    },
    fieldView: {
        marginBottom: '7%',
        paddingHorizontal: '5%',
        paddingVertical: '0%',
        backgroundColor: Colors.MainTheme,
        // marginHorizontal: 30,
    }
});

export default Login
