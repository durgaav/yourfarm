import React,{useState,useRef,useEffect} from 'react';
import {View,Text,Dimensions,Pressable,TextInput,ToastAndroid} from 'react-native';
import Backgroundimg from '../assets/images/bottom-background.svg';
import Phone from '../assets/images/phone.svg';
import auth from '@react-native-firebase/auth';
import OTPTextInput from "react-native-otp-textinput";
import { useTranslation } from 'react-i18next';
import './translation/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';


const OTPScreen =({route:{params:{phone},},navigation})=>{
  

  const signInWithMobileNumber = async () => {
    const confirmation = await auth().signInWithPhoneNumber(phone,user);
    console.log(phone);
   // if(phone != null){
         setConfirm(confirmation);
         setUser(user);
         console.log('kjnsixgy');
         console.log(!user);
   // }else if(phone == null){
      //  console.log('Feilds cannot be blank');
    //}else{
       // console.log('Something went wrong');
  //  }
  }

 
const [count,setcount]=useState(()=> signInWithMobileNumber());
let otpInputRef = useRef(null);
const{width,height} = Dimensions.get('window');
const [user,setUser] = useState('');
const [confirm, setConfirm] = useState(null);
const [code, setCode] = useState(null);
const[login,setLogin]=useState(true);
const { t, i18n } = useTranslation();
const[isTamil,setIstamil]=useState('');


const getAsyncvalue= async()=>{
  const LANGUAGE = await AsyncStorage.getItem('tamil');
  console.log('language ',LANGUAGE);
  console.log(LANGUAGE);
  setIstamil(LANGUAGE);
  console.log('login data',isTamil);
}

useEffect(() => {
 getAsyncvalue();
  }, [])

  const confirmCode = async () => {
   if(isTamil==="Ta"){
    try {
      await confirm.confirm(code);
      setLogin(true);
      console.log(login);
      ToastAndroid.show('உள்நுழைந்துள்ளது',ToastAndroid.BOTTOM);
      navigation.navigate('Home');
      console.log('sucess');
    setUser(null);
    } catch (error) {
      console.log('Invalid code.');
      ToastAndroid.show('ஏதோ தவறு நடைபெற்றிருக்கிறது!மீண்டும் முயர்ச்சிகவும்',ToastAndroid.BOTTOM);
      console.log(error);
     
    }
   }else{
    try {
      await confirm.confirm(code);
      setLogin(true);
      console.log(login);
      ToastAndroid.show('Loggedin Successfully',ToastAndroid.BOTTOM);
      navigation.navigate('Home');
      console.log('sucess');
    setUser(null);
    } catch (error) {
      console.log('Invalid code.');
      ToastAndroid.show('Something went wrong! Please Try again',ToastAndroid.BOTTOM);
      console.log(error);
     
    }
   }
  };


    return(
<View>
    <Backgroundimg height={height*1.6}/>
    <View style={{position:'absolute',top:width*0.32,margin:10,justifyContent:'center',alignItems:'center',}}>
     {(isTamil === "Ta")? <Text style={{color:'#043328',fontWeight:'bold',fontSize:25,fontFamily:'Poppins-Medium'}}>
           {t('otp_header_text')} </Text>:
        <Text style={{color:'#043328',fontWeight:'bold',fontSize:25,margin:20,fontFamily:'Poppins-Medium'}}> {t('otp_header_texten')}</Text>} 

       <OTPTextInput
            ref={otpInputRef}
            containerStyle={{marginVertical:40}}
            textInputStyle={{ borderRadius: 7,
            borderWidth: 2,width:width*0.13,
            backgroundColor: "#E9E9E9"}}
            inputCount={6}
            useRef
            tintColor="#E9E9E9"
            handleTextChange={(text) => setCode(text)}

          />
                <Pressable onPress={()=> confirmCode()}style={{marginTop:29,justifyContent:'center'}} underlayColor='#6EBC1B'>
       <View style={{backgroundColor:'#6EBC1B',width:270,height:50,borderRadius:50,}}>
         {(isTamil==="Ta")?<Text style={{marginHorizontal:80,marginVertical:10,color:'#FFFFFF',fontSize:22,fontFamily:'Poppins-Bold'}}>{t('done')}</Text>:
         <Text style={{marginHorizontal:100,marginVertical:10,color:'#FFFFFF',fontSize:22,fontFamily:'Poppins-Bold'}}>{t('doneen')}</Text>}
         
         </View>
   </Pressable>

           <Text style={{color:'#666666',fontSize:15,justifyContent:'center',alignItems:'center',marginTop:15,fontFamily:'Poppins-Medium'}}>Resend code in 00:23</Text>

    </View>
</View>
    )
};

export default OTPScreen;