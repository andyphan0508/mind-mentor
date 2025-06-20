import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from '../screens/Home';
import {View} from 'react-native';
// import ContactsList from '../screens/Contacts';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  // const {t} = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Trang chủ') {
            iconName = 'home'; // Icon name for Home
          } else if (route.name === 'Danh sách') {
            iconName = 'contacts'; // Icon name for Profile
          } else if (route.name === 'Thông tin') {
            iconName = 'info'; // Icon name for About
          } else if (route.name === 'Menu') {
            iconName = 'menu'; // Icon name for Menu
          }

          return (
            <MaterialIcons name={`${iconName}`} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: '#18538C',

        tabBarInactiveTintColor: 'gray',
        // headerShown: false,
        headerStyle: {
          backgroundColor: '#18538C',
        },
        headerTitleStyle: {
          color: 'white',
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={() => <View></View>} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
