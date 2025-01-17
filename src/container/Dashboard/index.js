import { 
  View, 
  Text,
  Alert
 } 
 from 'react-native'
import React, { useLayoutEffect } from 'react'
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'
import { color } from '../../utility'


const Dashboard = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <SimpleLineIcon 
        name='logout' 
        size={26} 
        color={color.WHITE}
        style={{right: 10}}
        onPress={() => Alert.alert('Logout', 'Are You Sure To Logout', [
          {
            text:'Yes',
            onPress: () => alert('logged out'),
          },
          {
            text:'No'
          }],
          {
            cancelable: false
          }
        )}
        />
  )
    });
  }, [navigation]);
  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  )
}

export default Dashboard;