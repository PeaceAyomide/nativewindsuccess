import React, {useState} from 'react'
import { View, Text, Image, ImageBackground, SafeAreaView, KeyboardAvoidingView,TouchableOpacity, TextInput, Keyboard, Modal, TouchableWithoutFeedback, Platform } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import Ionicons
from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome
from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CountryPicker from 'react-native-country-picker-modal'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
 const navbtn = useNavigation();
    const [passwordVisible, setPasswordVisible] = useState(false);

    // Date picker state
  const [date, setDate] = useState(new Date());
  const [displayDate, setDisplayDate] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  // Phone & country picker state
  const [countryCode, setCountryCode] = useState('NG');
  const [country, setCountry] = useState(null);
  const [callingCode, setCallingCode] = useState('234');
  const [phoneNumber, setPhoneNumber] = useState('');

// Custom wrapper for the country picker
const CustomCountryPicker = ({
  countryCode = 'NG',
  onSelect,
  withFilter = true,
  withFlag = true,
  withCountryNameButton = false,
  withCallingCode = true,
}) => {
  return (
    <CountryPicker
      countryCode={countryCode}
      onSelect={onSelect}
      withFilter={withFilter}
      withFlag={withFlag}
      withCountryNameButton={withCountryNameButton}
      withCallingCode={withCallingCode}
    />
  );
};

  const onDateChange = (event, selectedDate) => {
    if (selectedDate && event.type !== 'dismissed') {
      setDate(selectedDate);
      const formattedDate = selectedDate.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
      setDisplayDate(formattedDate);
    }
    if (Platform.OS === 'android') {
      setShowPicker(false);
    }
  };

  const showDatepicker = () => {
    setShowPicker(true);
    Keyboard.dismiss();
  };




  return (
   
        <ImageBackground source={require('../assets/Star.png')} 
  className="flex-1 bg-[#0D0D1B]" 
  resizeMode="cover">
  
    <SafeAreaView className="flex-1 justify-center items-center  gap-6">
    <Image source={require('../assets/Logo.png')} className="" style={{ width: 50, height: 50, resizeMode: 'contain' }}/>
   
    <Text className="text-white font-medium text-[25px] flex-wrap px-25 text-center">Create account</Text>
        <View className="flex-row gap-2">
            <Text className="text-white font-light">Already have an account?</Text>
        <TouchableOpacity onPress={() => navbtn.navigate('SignIn')}><Text className="text-[#4D81E7]">Login</Text>
        </TouchableOpacity>
        </View>
<View>
<View className="bg-white text-white w-[327px] h-[50px] flex-row items-center rounded-t-[10px] px-4">
<Ionicons name="person-circle-outline" size={24} color="#0052B4" className="font-bold" />
<TextInput placeholder="Name"  className="flex-1 text-black ml-2"/>
</View>
<View className="bg-white text-white w-[327px] h-[50px] flex-row items-center px-4">
<Feather name="mail" size={24} color="#0052B4" className="font-bold" />
<TextInput placeholder="Email"  className="flex-1 text-black ml-2"/>
</View>
{/* Calender */}
<TouchableOpacity
                onPress={showDatepicker}
 className="bg-white text-white w-[327px] h-[50px] flex-row items-center px-4">
<FontAwesome name="calendar" size={24} color="#0052B4" className="font-bold" />
<TextInput placeholder="Calender"        
value={displayDate}
editable={false}
pointerEvents="none"
placeholderTextColor="grey"
className="flex-1 text-black ml-3"/>
<FontAwesome name="calendar" size={24} color="#ACB5BB" className="font-bold" />
</TouchableOpacity>
{showPicker && (
                <Modal
                  transparent={true}
                  animationType="fade"
                  visible={showPicker}
                  onRequestClose={() => setShowPicker(false)}
                >
                  <TouchableWithoutFeedback onPress={() => setShowPicker(false)}>
                    <View className="flex-1 bg-black/50 justify-center items-center">
                      <TouchableWithoutFeedback>
                        <View className="bg-white rounded-[20px] p-[20px] w-[90%] max-w-[400px]">
                          <View className="flex-row justify-between items-center mb-[20px] px-[10px]">
                            <Text className="text-[18px] font-semibold text-[#33196B]">
                              Select Date
                            </Text>
                            <TouchableOpacity onPress={() => setShowPicker(false)}>
                              <Text className="text-[16px] font-semibold text-[#8A52F3]">
                                Done
                              </Text>
                            </TouchableOpacity>
                          </View>
                          <DateTimePicker
                            value={date}
                            mode="date"
                            display={
                              Platform.OS === 'ios' ? 'spinner' : 'calendar'
                            }
                            onChange={onDateChange}
                            maximumDate={new Date(2100, 11, 31)}
                            minimumDate={new Date(1900, 0, 1)}
                            textColor="#33196B"
                            className="bg-white"
                          />
                        </View>
                      </TouchableWithoutFeedback>
                    </View>
                  </TouchableWithoutFeedback>
                </Modal>
              )}
{/* End of Calender */}

{/* Contact */}
<TouchableOpacity className="bg-white text-white w-[327px] h-[50px] flex-row items-center px-4">
<CustomCountryPicker
                  countryCode={countryCode}
                  onSelect={(country) => {
                    setCountryCode(country.cca2);
                    setCountry(country);
                    setCallingCode(country.callingCode[0]);
                  }}
                />
                <Text className=" text-[#33196B]">+{callingCode}</Text>
<TextInput placeholder="" placeholderTextColor="grey" className="flex-1 text-black ml-2"/>
</TouchableOpacity>
{/* End of Contact */}
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
<TouchableOpacity className="bg-[#1D61E7] w-[327px] h-[50px] rounded-[10px] flex-row items-center justify-center">
 <Text className="text-white">Register</Text>
    </TouchableOpacity>  
    </SafeAreaView>
  </ImageBackground>
 
  )
}

export default Login