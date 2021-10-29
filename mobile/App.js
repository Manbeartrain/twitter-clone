import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import tempImg from './assets/icon.png'
import { Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import Discover from './components/DiscoverScreen';
import Notificatitons from './components/NotificationsScreen';
import Messages from './components/MessagesScreen';

const Tab = createBottomTabNavigator();

function LogoTitle() {
  return (
    <Icon
      size={28}
      color="gray"
      type='feather'
      name='feather'
    />
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { height: 90, paddingVertical: 15, },
      }}>
        <Tab.Screen name="Home" component={Home} options={{
          headerTitle: (props) => <LogoTitle {...props} />, headerStyle: { height: 100 }, tabBarIcon: ({ tintColor }) => (
            <Icon
              name="home"
              type="ionic"
              size={30}
            />
          )
        }} />
        <Tab.Screen name="Discover" component={Discover} options={{
          headerTitle: (props) => <LogoTitle {...props} />, headerStyle: { height: 100 }, tabBarIcon: ({ tintColor }) => (
            <Icon
              name="search"
              type="ionic"
              size={30}
            />
          )
        }} />
        <Tab.Screen name="Notifications" component={Notificatitons} options={{
          headerTitle: (props) => <LogoTitle {...props} />, headerStyle: { height: 100 }, tabBarIcon: ({ tintColor }) => (
            <Icon
              name="notifications"
              type="ionic"
              size={30}
            />
          )
        }} />
        <Tab.Screen name="Messages" component={Messages} options={{
          headerTitle: (props) => <LogoTitle {...props} />, headerStyle: { height: 100 }, tabBarIcon: ({ tintColor }) => (
            <Icon
              name="send"
              type="ionic"
              size={30}
            />
          )
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
