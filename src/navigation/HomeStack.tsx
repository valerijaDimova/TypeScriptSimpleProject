import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MasterScreen from '../screens/master/MasterScreen';
import DetailsScreen from '../screens/details/DetailsScreen';
import { Screens } from "../consts/navigation"
import { HomeStackParamList } from '../types/navigation';
import  Colors  from '../styles/Colors';
const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack: React.FC = () => {
    return (
      <Stack.Navigator initialRouteName={Screens.Home.Master} >
        <Stack.Screen
          name={Screens.Home.Master}
          component={MasterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Screens.Home.Details}
          component={DetailsScreen}
          options={{ headerShown: false }}
        />
        

      </Stack.Navigator>
    );
  };

export default HomeStack;