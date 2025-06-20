import {StyleSheet, Text, View} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';

const Home: React.FC<StackScreenProps<any>> = () => {
  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
