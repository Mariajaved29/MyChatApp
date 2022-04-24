import 
{ 
  SafeAreaView, 
  Text,
  View 
} 
from 'react-native'
import React, {useState} from 'react'
import {globalStyle, color} from '../../utility'
import {InputField, Logo, RoundCornerButton} from '../../component'


const SignUp = ({navigation}) => {
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
    alert(JSON.stringify(credentials));
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