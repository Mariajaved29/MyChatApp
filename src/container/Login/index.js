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


const Login = ({navigation}) => {
  const globalState = useContext(Store);
  const { dispatchLoaderAction } = globalState;
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
const {email, password} = credentials;

const handleOnChange = (name, value) => {
  setCredentials({
    ...credentials,
    [name]: value,
  })
}
const onLoginPress = () => {
  if(!email) {
    alert('Email Is Required');
  }else if (!password){
    alert('Password Is Required');
  }else{
    dispatchLoaderAction({
      type: LOADING_START,
    });
    setTimeout(() => {
      dispatchLoaderAction({
        type: LOADING_STOP,
      });
    }, 2000);
  }
}
  return (
    <SafeAreaView style={[globalStyle.flex1, {backgroundColor: color.BLACK}]}>
      <View style={[globalStyle.containerCentered]}>
        <Logo />
      </View>
      <View style={[globalStyle.flex2, globalStyle.sectionCentered]}>
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
        <RoundCornerButton 
        title='Login' 
        onPress={() => onLoginPress()}
        />
        <Text
        style={{
          fontSize: 28,
          fontWeight: 'bold',
          color: color.LIGHT_GREEN,
        }}
        onPress={() => navigation.navigate('SignUp')}
        >
          Sign Up
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default Login