import 
{ 
  SafeAreaView, 
  Text,
  View 
} 
from 'react-native'
import React, {useState, useContext} from 'react'
import {globalStyle, color} from '../../utility'
import {InputField, Logo, RoundCornerButton} from '../../component'
import { Store } from '../../context/store'
import { LOADING_START, LOADING_STOP } from '../../context/actions/types'
import signUpRequest from '../../network/signup'
import {setAsyncStorage} from '../../asyncStorage'
import { setUniqueValue } from '../../utility/constants'
import firebase from '../../firebase/config'


const SignUp = ({navigation}) => {
  const globalState = useContext(Store);
  const { dispatchLoaderAction } = globalState;

  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
const {name,email, password, confirmPassword} = credentials;

const handleOnChange = (name, value) => {
  setCredentials({
    ...credentials,
    [name]: value,
  })
}
const onSignUpPress = () => {
  if(!name) {
    alert('Username Is Required');
  }
  else if(!email) {
    alert('Email Is Required');
  }else if (!password){
    alert('Password Is Required');
  }else if (password !== confirmPassword){
    alert('Password Did Not Match');
  }
  else{
    dispatchLoaderAction({
      type: LOADING_START,
    });
    signUpRequest(email, password)
    .then(() => {
      console.log(firebase.auth().currentUser.uid);
      let uid = firebase.auth().currentUser.uid;
      let profileImg = '';
      AddUser(name, email, uid, profileImg)
      .then(() => {
        setAsyncStorage(keys.uuid, uid)
        setUniqueValue(uid);
        dispatchLoaderAction({
          type: LOADING_STOP,
        });
        navigation.navigate('Dashboard')
      })
      .catch((err) => {
        dispatchLoaderAction({
          type: LOADING_STOP,
        })
        alert(err);
      })
    })
    .catch((err) => {
      dispatchLoaderAction({
        type: LOADING_STOP,
      })
      alert(err);
    })
  }
}
  return (
    <SafeAreaView style={[globalStyle.flex1, {backgroundColor: color.BLACK}]}>
      <View style={[globalStyle.containerCentered]}>
        <Logo />
      </View>
      <View style={[globalStyle.flex2, globalStyle.sectionCentered]}>
      <InputField
        placeholder='Enter Username' 
        value={name}
        onChangeText={(text) => handleOnChange('name', text)}
        />
        <InputField
        placeholder='Enter Email' 
        value={email}
        onChangeText={(text) => handleOnChange('email', text)}
        />
        <InputField 
        placeholder='Enter Password' 
        secureTextEntry={true} 
        value={password}
        onChangeText={(text) => handleOnChange('password', text)}
        />
        <InputField
        placeholder='Confirm Password' 
        value={confirmPassword}
        secureTextEntry={true} 
        onChangeText={(text) => handleOnChange('confirmPassword', text)}
        />
        <RoundCornerButton 
        title='SignUp' 
        onPress={() => onSignUpPress()}
        />
        <Text
        style={{
          fontSize: 28,
          fontWeight: 'bold',
          color: color.LIGHT_GREEN,
        }}
        onPress={() => navigation.navigate('Login')}
        >
          Login
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default SignUp