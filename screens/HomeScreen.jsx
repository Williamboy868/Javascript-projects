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




function HomeScreen() {
    return (    
      <SafeAreaView className="h-full bg-slate-100  overflow-auto scroll-smooth" >
     <ScrollView> 
      <View className="mt-6 scroll-smooth">  
        <View className="flex-row   justify-between mb-4 p-2 items-center" >
        {/**first component begins*/}
          <View className="w-11 h-10  rounded">
            <Image
             source={require("./assets/shit.png")
             }
             className="w-full h-full"
            />
          </View>
          {/**first component ends */}
          {/***second component begins */}  
          <View>
            <Text className="font-extrabold text-xl">Home</Text>
          </View>
          {/**second component ends */}
          {/**third component begins */}
          <View>
          <MaterialCommunityIcons name="message-text-outline" size={24} color="black" /></View> 
          {/**third component ends */}       
        </View>
        <View className="py-6 bg-orange-300">
          <View className="flex-row space-x-2 pl-4">
        <Octicons name="location" size={24} color="black" />
              <Text className="text-sm">You are currently here</Text>
           </View>   
              <Text className="font-extrabold text-xl pl-4">AE-1847-5095</Text>
  
              </View>
        {/**Ghanacard starts */}
         <View className="mt-6 w-80 h-44 rounded-lg justify-items-center">
        
         <Image
  
          source={require("./assets/ghanacard.png")}
          className = "w-full h-full rounded-lg justify-items-center mx-5"
        />
          
         </View>
         {/**Ghanacard ends */}
         <View>
          <Text className="text-sm text-neutral-400">
            This is NOT a digital version of your Ghanacard.It is only a representation of your
            Ghanacard data as supplied by the National Identification Authority
          </Text>
          </View>
          <View className="flex-row space-x-4">
            {/**publicnotes box */}
            <View className="py-20 px-20 w-20 rounded-lg bg-white">
              <View><Text>Public Notices </Text></View>
            </View>
            {/**jobs box */}
            <View className="py-20 px-20 w-20 rounded-lg bg-white">
  
            </View>
            </View>    
         
  
       </View> 
      </ScrollView>    
  </SafeAreaView>
  
  
    );
  }
  
  
  export default HomeScreen