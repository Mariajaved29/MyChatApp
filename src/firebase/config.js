import firebase, { Firebase } from "react-native-firebase";

const firebaseConfig ={
    apiKey: 'AIzaSyAYCnJwmTFG7IwIllDg4StqOo3X9Axeozg',
    databaseURL: 'https://mychat-aff0a-default-rtdb.firebaseio.com/',
    projectId: 'mychat-aff0a',
    appId: '1:107205123310:android:0b805cbd538b2d893867ff'
}

export default Firebase.initializeApp(firebaseConfig);