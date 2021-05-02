import React from 'react'
import { Button, View, StyleSheet } from 'react-native'
import Card from '../Card';
import Colors from '../constants/Colors';


export const Landing = (props) => {
    const { navigation } = props;

    return (
        <View style={styles.view}>
            <Card style={styles.card}>
                <View style={styles.btnView}>
                    <Button
                        title="Login"
                        onPress={() => navigation.navigate("Login")}
                    />
                </View>
                <View style={styles.btnView}>
                    <Button
                        title="Register"
                        onPress={() => navigation.navigate("Register")}
                    />
                </View>             
            </Card>
        </View>
    )
}

export default Landing;

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.MainTheme,
    },
    btnView: {
        marginBottom: 10,
        marginHorizontal: 30,
    },
    card: {
        // backgroundColor: '#c717fc',
        backgroundColor: Colors.SecondTheme,
        // backgroundColor: 'red',
        paddingVertical: 20,
        marginHorizontal: 30,
        justifyContent: 'center',
    }
});
