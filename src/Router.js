import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

import {Login,Register } from './pages'

const Stack=createStackNavigator();

function Router () {
    return(
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
              <Stack.Screen name="Login" component={Login}/>
              <Stack.Screen name="Register" component={Register}/>
          </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Router