import React, {useState} from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, ImageBackground  } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native'

const SignInPage = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const navbtn = useNavigation();

  return (
    <KeyboardAvoidingView  className="flex-1">
        <ImageBackground 
  source={require('../assets/Star.png')} 
  className="flex-1 bg-[#0D0D1B]" 
  resizeMode="cover">
    <SafeAreaView className="flex-1 justify-center items-center  gap-6">
    <Image source={require('../assets/Logo.png')} className="" style={{ width: 50, height: 50, resizeMode: 'contain' }}/>
        <Text className="text-white font-medium text-[25px] flex-wrap px-28 text-center">Sign in to your Account</Text>
        <View className="flex-row gap-2">
            <Text className="text-white font-light">Don’t have an account?</Text>
        <TouchableOpacity onPress={() => navbtn.navigate('Login')}><Text className="text-[#4D81E7]">Sign Up</Text>
        </TouchableOpacity>
        </View>
<View>
<View className="bg-white text-white w-[327px] h-[50px] flex-row items-center rounded-t-[10px] px-4">
<Feather name="mail" size={24} color="#0052B4" className="font-bold" />
<TextInput placeholder="Email"  className="flex-1 text-black ml-2"/>
</View>
<View className="bg-white text-white w-[327px] h-[50px] flex-row items-center rounded-b-[10px] px-4">
<MaterialIcons
 name="lock-outline" size={24} color="#0052B4" className="font-bold" />
<TextInput placeholder="Password"  className="flex-1 text-black ml-2" secureTextEntry={!passwordVisible}/>
<TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} hitSlop={40}>
<Feather
name={passwordVisible ? 'eye' : 'eye-off'} size={20} color="#ACB5BB" className="" />  
    </TouchableOpacity>
</View>
</View>

<TouchableOpacity className="">
<Text className="text-white underline">Forgot Your Password ?</Text>
 </TouchableOpacity>
 <TouchableOpacity className="bg-[#1D61E7] w-[327px] h-[50px] rounded-[10px] flex-row items-center justify-center">
 <Text className="text-white">Log In</Text>
    </TouchableOpacity>  
   </SafeAreaView>
 </ImageBackground>
   </KeyboardAvoidingView>
  )
}

export default SignInPage