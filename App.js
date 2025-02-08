import { StatusBar } from 'expo-status-bar';
import {  Text, View, TouchableOpacity } from 'react-native';
import './global.css'; 

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-black gap-4">
      <Text className=" text-white text-[30px] font-bold"> Goal </Text>
      <Text className="text-white"> Make my Tailwind Work</Text>
   <TouchableOpacity className="bg-blue-500 p-5 rounded-[20px]">
        <Text className="text-white">Press me</Text>
   </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

