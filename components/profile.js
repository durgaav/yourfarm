import React,{useState,useEffect} from 'react';
import {Text,View,TouchableHighlight,Dimensions,Pressable,TextInput,Image,ScrollView,ToastAndroid} from 'react-native';
import Tamil from '../assets/images/Tamil.svg.svg';
import English from '../assets/images/E.svg';
import Profile from '../assets/images/avatar.svg';
import Nofify from '../assets/images/notification.svg';
import Location from '../assets/images/location.svg';
import Logout from '../assets/images/logout.svg';
import Backgroundimg from '../assets/images/bottom-background.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';
import auth, { firebase } from '@react-native-firebase/auth';
import './translation/i18n';


const ProfileScreen = ({ navigation,route:{params:{user},},}) => {

  const {width,height} = Dimensions.get('window');
  const [prof,setProf]=useState('');
  const [pincode,setPincode] = useState('');
  const [mobileno,setMobileno]=useState('');
  const [location,setLocation]=useState('');
  const[email,setEmail]=useState('');
  const [final,setFinal]=useState(false);
  const { t, i18n } = useTranslation();
  const [isTamil,setIstamil]=useState('');
  let LANGUAGE;

const saveFunction=()=>{
  if(prof===''&&pincode===''&&mobileno===''&&location===''&&email===''){
    if(isTamil==="Ta"){
      ToastAndroid.show('புலங்கள் காலியாக இருக்கக்கூடாது',ToastAndroid.BOTTOM);
    }else{
      ToastAndroid.show('Feilds cannot be blank',ToastAndroid.BOTTOM);
  
    }
  }else{
  console.log(user);
  console.log(final);
  setFinal(true);
  console.log(final);
  console.log(prof);
  console.log(pincode);
  console.log(mobileno);
  console.log(location);
  console.log(email);
  console.log(final);
  if(isTamil==="Ta"){
    ToastAndroid.show('சுயவிவரம் சேமிக்கப்பட்டது',ToastAndroid.BOTTOM);
  }else{
    ToastAndroid.show('Changes Saved',ToastAndroid.BOTTOM);

  }
  }

}
const signOutuser = async() => {
  await   firebase.auth().signOut();
    console.log(user);
    console.log(!user);
    console.log('last update',LANGUAGE);
    if(isTamil ==="Ta"){
      ToastAndroid.show('Logout Successfully',ToastAndroid.BOTTOM);

    }else{
      ToastAndroid.show('Logout Successfully',ToastAndroid.BOTTOM);
    }
    navigation.navigate('Splash',{name:'Splash'})
    }
    
const getAsyncvalue= async()=>{
  
     LANGUAGE = await AsyncStorage.getItem('tamil');
      console.log('language ',LANGUAGE);
      console.log(LANGUAGE);
      setIstamil(LANGUAGE);
      console.log('login data',isTamil);
  }
  
  useEffect(() => {
     getAsyncvalue();
      }, [])

    return (
<View style={{width:width,height:height}}>
  <ScrollView style={{width:width}}>
  <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20,marginVertical:10,height:55}}>
                    
                    {(isTamil==="Ta")? <Text style={{fontSize:24,fontWeight:'bold',color:'#333333',fontFamily:'Poppins-Regular'}}>{t('profile')}</Text>: 
                    <Text style={{fontSize:24,fontWeight:'bold',color:'#333333',fontFamily:'Poppins-Regular'}}>{t('profileen')}</Text>}   
                    <View style={{flexDirection:'row',marginVertical:5}}>
                
                        <View style={{width:25,height:25,borderRadius:50,backgroundColor:'grey',marginHorizontal:5,marginTop:4,justifyContent:'center',padding:3}}>
                            <Pressable onPress={()=>setIstamil('Ta')}><Tamil /></Pressable>
                        </View>
                        <View >
                        <Pressable onPress={()=>setIstamil('En')}>
                          <Image source={require('../assets/images/english.png')} style={{width:25,height:25,borderRadius:50,backgroundColor:'grey',marginHorizontal:5,marginTop:4,padding:3}}/>
                        </Pressable>

                        </View>
                        
              
                    </View>
              
              </View>
              <View>
              <Backgroundimg height={height*0.9}/>

              </View>



               <View style={{position:'absolute',top:55}}>

                <View style={{height:height*0.15,width:width,backgroundColor:'grey'}} >
                  <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20,alignItems:'center',marginVertical:10}}>
                      <View style={{flexDirection:'column'}}>
                        {(isTamil==="Ta")? <Text style={{fontSize:17,color:'black',fontFamily:'Poppins-Regular'}}>{t('name')}</Text>: <Text style={{fontSize:17,color:'black',fontFamily:'Poppins-Regular'}}>{t('nameen')}</Text>}
                      <Text style={{fontSize:19,color:'black',fontWeight:'bold',fontFamily:'Poppins-Regular'}}>DurgaDevi</Text>
                      </View>
                    <Image source={require('../assets/images/farmer.png')} style={{width:90,height:90,borderRadius:50}}/>
                  </View>
                </View>

                {(final)?
                <View>


                <View style={{flexDirection:'column',marginHorizontal:20,marginVertical:7}}>
                    <View>
                    {(isTamil === "Ta")?<Text style={{color:'#666666',fontSize:17,marginVertical:3,fontFamily:'Poppins-Regular'}}>{t('profession')}</Text>:
                    <Text style={{color:'#666666',fontSize:17,marginVertical:3,fontFamily:'Poppins-Regular'}}>{t('professionen')}</Text>} 
                      <Text style={{marginVertical:3,color:'black',fontFamily:'Poppins-Regular'}}>{prof}</Text>
                      <View style={{backgroundColor:'black',width:width*0.9,height:height*0.001,marginVertical:5}}/>
                    </View>
                </View> 
                <View style={{flexDirection:'column',marginHorizontal:20,marginVertical:7}}>
                    <View>
                    {(isTamil ==="Ta")?<Text style={{color:'#666666',fontSize:17,marginVertical:3,fontFamily:'Poppins-Regular'}}>{t('pincode')}</Text>:
                    <Text style={{color:'#666666',fontSize:17,marginVertical:3,fontFamily:'Poppins-Regular'}}>{t('pincodeen')}</Text>} 
                      <Text style={{marginVertical:3,color:'black',fontFamily:'Poppins-Regular'}}>{pincode}</Text>
                      <View style={{backgroundColor:'black',width:width*0.9,height:height*0.001,marginVertical:5}}/>
                    </View>
                </View> 
                <View style={{flexDirection:'column',marginHorizontal:20,marginVertical:7}}>
                    <View>
                    {(isTamil ==="Ta")?<Text style={{color:'#666666',fontSize:17,marginVertical:3,fontFamily:'Poppins-Regular'}}>{t('placeholder_mobile')}</Text>:
                    <Text style={{color:'#666666',fontSize:17,marginVertical:3,fontFamily:'Poppins-Regular'}}>{t('placeholder_mobileen')}</Text>} 
                      <Text style={{marginVertical:3,color:'black',fontFamily:'Poppins-Regular'}}>{mobileno}</Text>
                      <View style={{backgroundColor:'black',width:width*0.9,height:height*0.001,marginVertical:5}}/>
                    </View>
                </View> 
                <View style={{flexDirection:'column',marginHorizontal:20,marginVertical:7}}>
                    <View>
                    {(isTamil ==="Ta")?<Text style={{color:'#666666',fontSize:17,marginVertical:3,fontFamily:'Poppins-Regular'}}>{t('location')}</Text>:
                    <Text style={{color:'#666666',fontSize:17,marginVertical:3,fontFamily:'Poppins-Regular'}}>{t('locationen')}</Text>} 
                      <Text style={{marginVertical:3,color:'black',fontFamily:'Poppins-Regular'}}>{location}</Text>                  
                      <View style={{backgroundColor:'black',width:width*0.9,height:height*0.001,marginVertical:5}}/>
                    </View>
                </View> 
                <View style={{flexDirection:'column',marginHorizontal:20,marginVertical:7}}>
                    <View>
                    {(isTamil ==="Ta")?<Text style={{color:'#666666',fontSize:17,marginVertical:3,fontFamily:'Poppins-Regular'}}>{t('email')}</Text>:
                    <Text style={{color:'#666666',fontSize:17,marginVertical:3,fontFamily:'Poppins-Regular'}}>{t('emailen')}</Text>} 
                      <Text style={{marginVertical:3,color:'black',fontFamily:'Poppins-Regular'}}>{email}</Text>
                      <View style={{backgroundColor:'black',width:width*0.9,height:height*0.001,marginVertical:5}}/>
                    </View>
                </View> 

                
                  </View>
                :
            <View>

              <View style={{flexDirection:'column',marginHorizontal:20,marginVertical:15}}>
                  <View>
                  {(isTamil === "Ta")?<Text style={{color:'#666666',fontSize:17,marginVertical:3,fontFamily:'Poppins-Regular'}}>{t('profession')}</Text>:
                  <Text style={{color:'#666666',fontSize:17,marginVertical:3,fontFamily:'Poppins-Regular'}}>{t('professionen')}</Text>} 
                      <TextInput
                        style={{width:width*0.9,height:height*0.06, borderColor: 'gray', borderBottomWidth:1,color:'black',fontFamily:'Poppins-Italic'}}
                        onChangeText={a => setProf(a)}
                        value={prof}
                        inlineImagePadding={2}
                        underlineColorAndroid="transparent"
                        placeholder={(isTamil==="Ta")?t("profession"):t("professionen")}
                        placeholderTextColor={'#666666'}
                        keyboardType={'default'}
                      />
                  </View>
                  <View>
                  {(isTamil ==="Ta")?<Text style={{color:'#666666',fontSize:17,marginVertical:3,fontFamily:'Poppins-Regular'}}>{t('pincode')}</Text>:
                  <Text style={{color:'#666666',fontSize:17,marginVertical:3,fontFamily:'Poppins-Regular'}}>{t('pincodeen')}</Text>} 
                    <TextInput
                        style={{width:width*0.9,height:height*0.06, borderColor: 'gray', borderBottomWidth:1,color:'black',fontFamily:'Poppins-Italic'}}
                        onChangeText={b => setPincode(b)}
                        value={pincode}
                        inlineImagePadding={2}
                        underlineColorAndroid="transparent"
                        placeholder={(isTamil==="Ta")?t("pincode"):t("pincodeen")}
                        placeholderTextColor={'#666666'}
                        keyboardType={'number-pad'}
                        maxLength={6}
                        
                      />
                  </View>
                  <View>
                   {(isTamil ==="Ta")?<Text style={{color:'#666666',fontSize:17,marginVertical:3,fontFamily:'Poppins-Regular'}}>{t('placeholder_mobile')}</Text>:
                   <Text style={{color:'#666666',fontSize:17,marginVertical:3,fontFamily:'Poppins-Regular'}}>{t('placeholder_mobileen')}</Text>} 
                    <TextInput
                        style={{width:width*0.9,height:height*0.06,borderColor: 'gray', borderBottomWidth:1,color:'black',fontFamily:'Poppins-Italic'}}
                        onChangeText={c =>setMobileno(c)}
                        value={mobileno}
                        inlineImagePadding={2}
                        underlineColorAndroid="transparent"
                        placeholder={(isTamil==="Ta")?t("placeholder_mobile"):t("placeholder_mobileen")}
                        placeholderTextColor={'#666666'}
                        keyboardType={'phone-pad'}
                        maxLength={10}
                        
                      />
                  </View>
                  <View>
                  {(isTamil ==="Ta")?<Text style={{color:'#666666',fontSize:17,marginVertical:3,fontFamily:'Poppins-Regular'}}>{t('location')}</Text>:
                  <Text style={{color:'#666666',fontSize:17,marginVertical:3,fontFamily:'Poppins-Regular'}}>{t('locationen')}</Text>} 
                    <TextInput
                        style={{width:width*0.9,height:height*0.06,borderColor: 'gray', borderBottomWidth:1,color:'black',fontFamily:'Poppins-Italic'}}
                        onChangeText={d => setLocation(d)}
                        value={location}
                        inlineImagePadding={2}
                        underlineColorAndroid="transparent"
                        placeholder={(isTamil==="Ta")?t("location"):t("locationen")}
                        placeholderTextColor={'#666666'}
                        keyboardType={'default'}
                        
                      />
                  </View>
                  <View>
                  {(isTamil ==="Ta")?<Text style={{color:'#666666',fontSize:17,marginVertical:3,fontFamily:'Poppins-Regular'}}>{t('email')}</Text>:
                  <Text style={{color:'#666666',fontSize:17,marginVertical:3,fontFamily:'Poppins-Regular'}}>{t('emailen')}</Text>} 
                    <TextInput
                        style={{width:width*0.9,height:height*0.06,borderColor: 'gray', borderBottomWidth:1,color:'black',fontFamily:'Poppins-Italic'}}
                        onChangeText={e => setEmail(e)}
                        value={email}
                        inlineImagePadding={2}
                        underlineColorAndroid="transparent"
                        placeholder={(isTamil==="Ta")?t("email"):t("emailen")}
                        placeholderTextColor={'#666666'}
                        keyboardType={'email-address'}
                        
                      />
                  </View>
              </View>
               <View style={{marginHorizontal:20}}>
               <Pressable style={{alignItems:'center',borderColor:'black',borderWidth:1,height:height*0.06,borderRadius:10}} onPress={()=>saveFunction()}>
                 {(isTamil==="Ta")?<Text style={{marginVertical:5,fontSize:20,color:'black',fontWeight:'bold',fontFamily:'Poppins-Bold'}}>{t('save')}</Text>:
                 <Text style={{marginVertical:5,fontSize:20,color:'black',fontWeight:'bold',fontFamily:'Poppins-Bold'}}>{t('saveen')}</Text>}
               </Pressable>
 
               </View>
               </View>
              
              }


    
              <View style={{marginHorizontal:20,marginVertical:20}}>
              <Pressable style={{borderColor:'black',borderWidth:1,height:height*0.06,borderRadius:10}} onPress={()=>signOutuser()}>
                <View style={{flexDirection:'row'}}>
                    <View style={{marginVertical:13,marginHorizontal:20}}>
                    <Logout/>
                    </View>
                    {(isTamil==="Ta")?  <Text style={{marginVertical:5,fontSize:20,color:'red',fontWeight:'bold',fontFamily:'Poppins-Bold'}}>{t('logout')}</Text>:
                      <Text style={{marginVertical:5,fontSize:20,color:'red',fontWeight:'bold',fontFamily:'Poppins-Bold'}}>{t('logouten')}</Text>}
              
                </View>
              </Pressable>

              </View>


                

              </View> 
      </ScrollView>
      </View>
    )
  };


  export default ProfileScreen;