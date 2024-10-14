import React from 'react';
import {Text, View, Image, SafeAreaView} from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';


const Portfolio = () => {
  return (<SafeAreaView className="h-full bg-slate-100  p-2 " >
          <View className="mt-6">  
            <View className="flex-row  items-stretch justify-between mb-4 " >
            {/**first component begins*/}
              <View className="w-14 h-14  rounded">
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
             <View className="mt-6 w-80 h-44 rounded-lg justify-center">
            
              <Image

              source={require("./assets/ghanacard.png")}
              className = "w-full h-full rounded-lg justify-center"
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
  </SafeAreaView>
    
  
  );
};

export default Portfolio;
