import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
// import auth from '@react-native-firebase/auth'
import { useSelector } from 'react-redux';
import Card from '../Card';
import Colors from '../constants/Colors';
import auth from '@react-native-firebase/auth';

const Profile = () => {
  const currentUser = useSelector(state => state.userState.currentUser)

    return (
      <View style={styles.containerGallery}>
        <View style={styles.container}>
          <Card style={styles.mainCard}>
            <Text style={styles.fontStyle}>Name: { currentUser.name }</Text>
          </Card>
          <Card style={styles.mainCard}>
            <Text style={styles.fontStyle}>Email: { currentUser.email }</Text>
          </Card>
            {/* <Card style={styles.mainCard}>
              <Text>Password: { currentUser.password }</Text>
            </Card> */}
          <Card style={styles.mainCard}>
              <Text style={styles.fontStyle}>Car Number: { currentUser.carNumberPlate }</Text>
          </Card>
          <TouchableOpacity
            onPress={() => auth().signOut()}
            style={{ alignItems: 'center', marginTop: '10%' }}
          >
            <Card style={styles.mainCard}>
                <Text style={styles.fontStyle}>LOG OUT</Text>
            </Card>
          </TouchableOpacity>
        </View>
      </View>
    )
}

export default Profile

const styles = StyleSheet.create({
  container: {
        flexDirection: 'column',
  },
  mainCard: {
    marginHorizontal: '5%',
    marginTop: '5%',
    padding: '3%',
    justifyContent: 'center',
    // alignItems: 'center'
  },
  containerGallery: {
    backgroundColor: '#008080',
    flex: 1,
    justifyContent: 'center'
  },
  fontStyle: {
    fontSize: 18,
    color: Colors.btnColor,
    fontWeight: 'bold',
  }
})