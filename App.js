import * as React from 'react';
import {Text, View, Image, SafeAreaView, ScrollView} from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import Fontisto from '@expo/vector-icons/Fontisto';
import HomeScreen from './screens/HomeScreen';

function PlacesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Places</Text>
    </View>
  );
}


function ServicesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Services</Text>
    </View>
  );
}


function NotificationScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notification</Text>
    </View>
  );
}


function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile</Text>
    </View>
  );
}





const Tab = createBottomTabNavigator();

 export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
              return  <AntDesign name="home" size={24} color="black" /> ;
          } else if (route.name === 'Places') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
            return <Entypo name="location-pin" size={24} color="black" />;
          }
          else if (route.name === 'Services') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
            return <Feather name="grid" size={24} color="black" />;}
          
          else if (route.name === 'Notification') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
              return <Fontisto name="bell" size={24} color="black" />;}
          
          else  {
                iconName = focused ? 'ios-list' : 'ios-list-outline';
                return <MaterialCommunityIcons name="account-circle-outline" size={24} color="black" />;}    

       
               
           
          
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Tab.Screen name="Places" component={PlacesScreen} />
        <Tab.Screen name="Services" component={ServicesScreen} />
        <Tab.Screen name="Notification" component={NotificationScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />  
      </Tab.Navigator>
    </NavigationContainer>
  );
}



