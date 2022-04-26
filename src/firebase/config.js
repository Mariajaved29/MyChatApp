import firebase from 'firebase/compat/app';

const firebaseConfig ={
    apiKey: 'AIzaSyDGN9ISfdlmWmU8PcmSF4XjrC6Je6HTwcg',
    databaseURL: 'https://mychatapp-2ba00-default-rtdb.firebaseio.com/',
    projectId: 'mychatapp-2ba00',
    appId: '1:808472151396:android:41ce24494cf629d85e2671'
}

export default firebase.initializeApp(firebaseConfig);