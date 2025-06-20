/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {RouteParams} from './src/navigations/RouteParamsList';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NavigationContainer} from '@react-navigation/native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  const screens = RouteParams;

  return (
    <SafeAreaView>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({route}) => ({
            headerShown: true,
            headerTitle: route.name,
            headerBackTitleVisible: true,
          })}>
          {screens.map(({name, component, title}) => (
            <Stack.Screen key={name} name={title} component={component} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
