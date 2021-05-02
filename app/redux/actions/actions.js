import firebase from 'firebase';
import { USER_POSTS_STATE_CHANGE, USER_STATE_CHANGE } from '../constants/constants';

export const fetchUser = () => {
    return (dispatch) => {
        firebase.firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((snapshot) => {
                if (snapshot.exists) {
                    dispatch({
                        type: USER_STATE_CHANGE,
                        payload: { currentUser: snapshot.data() }
                    });
                } else {
                    console.log("user does not exist");
                }
            })
            .catch((error) => {
                console.log("error from fetchUser", error);
            });
    };
}

// export const fetchUserPosts = () => {
//     return ((dispatch) => {
//         firebase.firestore()
//             .collection("posts")
//             .doc(firebase.auth().currentUser.uid)
//             .collection("userPosts")
//             .orderBy("creation", "asc")
//             .get()
//             .then((snapshot) => {
//                 let posts = snapshot.docs.map(doc => {
//                     const data = doc.data();
//                     const id = doc.id;
//                     return {id, ...data}
//                 })
//                 console.log("posts: ", posts);

//                 dispatch({
//                         type: USER_POSTS_STATE_CHANGE,
//                         payload: posts
//                     });
//             })
//     })
// }