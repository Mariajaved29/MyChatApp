import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Login, SignUp, Dashboard} from '../container';
import {color} from '../utility';

const Stack = createNativeStackNavigator();

const NavContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='Login'
      screenOptions={
        {
          headerShown: true,
          headerStyle: {backgroundColor: color.DARK_GRAY},
          headerTintColor: color.WHITE,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          }
        }
      }
      >
        <Stack.Screen 
        name="Login" 
        component={Login} 
        options= {{headerShown: false}}
        />
        <Stack.Screen
        name="SignUp" 
        component={SignUp} 
        options= {{headerShown: false}}
        />
        <Stack.Screen 
        name="Dashboard" 
        component={Dashboard}
        options={{
          headerLeft: null,
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default NavContainer;