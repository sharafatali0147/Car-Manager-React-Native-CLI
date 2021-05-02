import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import auth from '@react-native-firebase/auth'
import { useSelector } from 'react-redux';

const Profile = () => {
  const [currentUser, setCurrentUser] = useState(null);
  
  const state = useSelector(state => state.rootReducer.userState())
    
    // user checking from firebase
  // const userFetching = async () => {

  //   auth().onAuthStateChanged((user) => {
  //       if (!user) {
  //         console.log("user not found", user);
  //       } else {
  //         const userObj = { userId: user.uid, userEmail: user.email }
  //         setCurrentUser(userObj);
  //       }
  //     })
  // }

  useEffect(() => {
    // userFetching();
    // console.log("useEffect as did mount one time rendring!");
  }, []);

    return (
        <View>
            {/* <Text>user: { currentUser.userEmail}</Text> */}
        </View>
    )
}

export default Profile
