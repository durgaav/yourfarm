import React,{useState,useEffect} from 'react';
import {View,Text,Dimensions,TextInput,TouchableHighlight,TouchableOpacity,Image,ToastAndroid} from 'react-native';
import Login from '../assets/images/login-img1.svg';
import Backgroundimg from '../assets/images/bottom-background.svg';
import Phone from '../assets/images/phone.svg';
import auth from '@react-native-firebase/auth';
import Splash2 from '../assets/images/splash-2.svg';
import Logo from '../assets/images/logo.svg';
import { useTranslation } from 'react-i18next';
import './translation/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Btn from '../assets/images/bottom-background.svg';


const LoginPage=({navigation})=>{

const {width,height} = Dimensions.get('window')
const [phone, setPhone] = useState('+91');
const { t, i18n } = useTranslation();
const[isTamil,setIstamil]=useState('');
const[finalno,setFinalno]=useState();
let lanTamil;

const verifyphone =()=>{

    if(phone.length===0){
        console.log('Please enter your phone number');
        ToastAndroid.show('Please enter your phone number',ToastAndroid.BOTTOM);
    }else if(phone.length != 13){
        console.log('Phone number must be 10 digits');
        ToastAndroid.show('Phone number must be 10 digits',ToastAndroid.BOTTOM);
    }else{
        console.log('wrong');
      setFinalno('+91',phone);
        navigation.navigate("OTP",{phone});
    }  
}

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

    return(

        <View style={{backgroundColor:'white'}}>
                 <Btn height={height*1.5}/>
             <View style={{alignItems:'center',flexDirection:'column',position:'absolute',top:height*0.1,marginHorizontal:10}}>
              <Image source={require('../assets/images/loginlogo.png')} style={{width:width-50,height:height*0.27,marginLeft:20,marginRight:20}}/>
            {(isTamil==="Ta")?<Text style={{color:'#043328',fontWeight:'bold',fontSize:25,marginTop:20,fontFamily:'Poppins-BoldItalic',marginHorizontal:10}}>{t('login_header')}</Text>:
            <Text style={{color:'#043328',fontWeight:'bold',fontSize:25,marginTop:20,fontFamily:'Poppins-BoldItalic',marginHorizontal:10}}>{t('login_headeren')}</Text>}

                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',flexDirection:'column',marginVertical:20,paddingTop:10}}>
                    <View>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',flexDirection:'row'}}>
                        <Image source={require('../assets/images/phone.png')} style={{marginRight:10,width:20,height:20}}/>
                    <TextInput
                        style={{height: 40, width:width*0.7, borderColor: 'gray',color:'black'}}
                        onChangeText={(text) => setPhone(text)}
                        inlineImagePadding={2}
                       // underlineColorAndroid="transparent"
                        value={phone}
                        placeholder={(isTamil==="Ta")?t("placeholder_mobile"):t("placeholder_mobileen")}
                        placeholderTextColor={'black'}
                        keyboardType='phone-pad'
                        maxLength={13}
                    />
                        </View>
                        
                    <View style={{height:height*0.001,backgroundColor:'black',width:width*0.8}}/>

                    </View>
                       
                    </View>

   <TouchableHighlight onPress={()=>verifyphone()}style={{marginTop:90,justifyContent:'center'}} underlayColor='#6EBC1B'>
       <View style={{backgroundColor:'#6EBC1B',width:270,height:50,borderRadius:50,}}>
           {(isTamil==="Ta")?<Text style={{marginHorizontal:45,marginVertical:10,color:'#FFFFFF',fontSize:22,fontFamily:'Poppins-Thin'}}>{t('sendotp')}</Text>:
           <Text style={{marginHorizontal:80,marginVertical:10,color:'#FFFFFF',fontSize:22,fontFamily:'Poppins-Thin'}}>{t('sendotpen')}</Text>}
        </View>
   </TouchableHighlight>
           
    
        </View>
        </View>



    )
};





export default LoginPage;
