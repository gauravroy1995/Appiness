import React from 'react'

import { ExampleContainer, UserData } from '@/Containers'
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ExampleContainer} />
    
      <Stack.Screen name="User" component={UserData} />
    </Stack.Navigator>
  )
}

export default MainNavigator
