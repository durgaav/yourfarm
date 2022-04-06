import React,{useState,useEffect} from 'react';
import {Text,View,Dimensions,TouchableHighlight,Image,StyleSheet,Linking,Modal,TouchableOpacity,Pressable,ToastAndroid} from 'react-native'
import Tamil from '../assets/images/Tamil.svg.svg';
import English from '../assets/images/E.svg';
import Profile from '../assets/images/avatar.svg';
import Backgroundimg from '../assets/images/bottom-background.svg';
import Whatsapp from '../assets/images/whatsapp-icon.svg';
import auth, { firebase } from '@react-native-firebase/auth';
import { useTranslation } from 'react-i18next';
import './translation/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';


const HomeScreen = ({navigation }) => {
  const {width,height} = Dimensions.get('window');
  const [user,setUser] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const { t, i18n } = useTranslation();
  const [isTamil,setIstamil]=useState('En');
  var LANGUAGE;

   
    const openwhatsapp= async()=>{
            if (!user) {
                console.log('login failed.......');
                navigation.navigate('Login',{name:'Login'})
               } else {
               console.log('sucess to open wp....')
               console.log(user);
               setModalVisible(true);
               console.log(modalVisible);
            }
    }
   

const authListener = async () => {
    try {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
            setUser(user);
            console.log('gfvtyjuyknhu',user)
            } else {
            setUser("")
            console.log(user);
            }
            })
           
      } catch (error) {
        console.log("Something went wrong", error);
      }
    }

const setLang= async(lang)=>{
 // console.log('LANGUEVALUE',lang);
  await AsyncStorage.setItem('tamil',lang);
  const LANGUAGE = await AsyncStorage.getItem('tamil');
   setIstamil(LANGUAGE);
   console.log('storeage....',LANGUAGE);
   console.log(isTamil);
  if(LANGUAGE==="Ta"){
    console.log('tamil',isTamil);
    ToastAndroid.show('தமிழ் மொழி மாறியது',ToastAndroid.BOTTOM);
  }else {
    console.log('ENGLISH',isTamil);
    ToastAndroid.show('Language changed to English',ToastAndroid.BOTTOM);
  }
}



    useEffect(() => {
    authListener();
    console.log('INITIAL VALUE',isTamil);
    }, [])
    

    const openwp = async()=>{
      if(isTamil === "Ta"){
        console.log('TAMIL',LANGUAGE);
               await Linking.openURL("https://api.whatsapp.com/send?text=சிறந்த கால்நடை பண்ணையம் அமைக்க விரும்புகிறேன்&phone=+916383717150");
  
              }else{
                console.log('ENGLISH',LANGUAGE);
              await Linking.openURL("https://api.whatsapp.com/send?text=Need Support for Better Farming Practice&phone=+916383717150");
              }
  }

const profileFunction = ()=>{
    if(user){
      navigation.navigate('Profile',{user})
      console.log(user);
    }else{
      console.log('omzibdyutbgieteg7i8yho8',user);
      navigation.navigate('Login',{name:'Login'})
    }
}

    return (
   <View>
    
        <View style={home.appbar} >
             <View style={home.appbarcontent}>
                  <Image source={require('../assets/images/ic_launcher.png')} style={{marginBottom:5,width:40,height:40}}/>
                    <View style={{flexDirection:'row',marginVertical:5}}>
                      {(isTamil==="Ta")?<Text style={home.apptitle}>{t('home')}</Text>:<Text style={home.apptitle}>{t('homeen')}</Text>}
                    
                        <View style={home.tamilsvg}>
                            <Pressable underlayColor={'grey'} onPress={()=>setLang("Ta")}><Tamil /></Pressable>
                        </View>
                        <View >
                        <Pressable onPress={()=>setLang("En")}><Image source={require('../assets/images/english.png')} style={home.englishsvg}/></Pressable>
                        
                        </View>
                        <View>
                            <Pressable underlayColor={'grey'} onPress={()=>profileFunction()}>
                              <Image source={require('../assets/images/farmer.png')} style={home.profile}/>
                              {/* <Profile  height={30} width={30}/> */}
                            </Pressable>
                        </View>
                    </View>
             </View>
        </View>


<Backgroundimg  height={height*1.5} />


<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={home.modalcontainer}>
          <View  style={home.modalview}>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                overflow: "hidden",
                alignContent: "center",
              }}
            >
              <Image
                style={{ marginTop: 20,
                    width: "100%",
                    resizeMode: "contain",}}
                source={require('../assets/images/whatsapp.png')}
              />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {(isTamil === "Ta")?<Text style={home.alerttamil}>{t("alertMessage")}</Text>:<Text style={home.alerttamil}>{t("alertMessageen")}</Text>}
            </View>
            <View style={home.btn}>
              <Pressable
              style={home.continue}
                onPress={() => openwp()}
              >
            {(isTamil === "Ta")?<Text >{t("continue")}</Text>:<Text >{t("continueen")}</Text>} 
              </Pressable>
              <Pressable
              style={home.notnow}
                onPress={() =>setModalVisible(!modalVisible)}
              >
               {(isTamil === "Ta")?<Text style={{color:'black',textDecorationLine:'underline',fontFamily:'Poppins.Medium'}}>{t("notnow")}</Text>:
               <Text style={{color:'black',textDecorationLine:'underline',fontFamily:'Poppins.Medium'}}>{t("notnowen")}</Text>} 
              </Pressable>
              <View
                style={{ width: 1, backgroundColor: "black", height: 0 }}
              ></View>
            </View>
          </View>
        </View>
      </Modal>


        <View style={{position:'absolute',top:70}}>

                 <View style={{marginVertical:10,marginHorizontal:15}}>
                   {(isTamil === "Ta")?<Text style={home.titletamil}>{t('heaxe')}</Text>:<Text style={home.title}>{t('heaxeen')}</Text>}
                </View>
                <View style={{backgroundColor:'red'}} >
     
     
    </View>

   <View style={{flexDirection:'column',marginHorizontal:13}}>
       <View style={{flexDirection:'row',}}>
            <Pressable underlayColor={'#fff'} onPress={()=>openwhatsapp()}>
                <View style={home.cardview}>
                <Image style={home.cardimg}
                    source={require('../assets/images/herbaltreatment.png')}/>  
                        <View style={home.wpicon}>
                            <Pressable style={{padding:4}}><Whatsapp width={18} height={18} /></Pressable>
                        </View>

                <View style={{marginHorizontal:10,marginVertical:5}}>
                
                {(isTamil === "Ta")? <Text style={home.cardtitleta}>{t('hpr')}</Text>:<Text style={home.cardtitle}>{t('hpren')}</Text>}
                {(isTamil === "Ta")? <Text style={home.cardcontentta}>{t('htreament_sub')}</Text>:<Text style={home.cardcontent}>{t('htreament_suben')}</Text>}
                </View>
                </View>
            </Pressable>
            <Pressable underlayColor={'#fff'} onPress={()=>openwhatsapp()}>
                <View style={home.cardview}>
                <Image style={home.cardimg}
                source={require('../assets/images/farmmanagementconsultation.png')}/>
        

                        <View style={home.wpicon}>
                            <Pressable style={{padding:4}}><Whatsapp width={18} height={18} /></Pressable>
                        </View>
                        
                <View style={{marginHorizontal:10,marginVertical:5}}>
                {(isTamil === "Ta")? <Text style={home.cardtitleta}>{t('htreament')}</Text>:<Text style={home.cardtitle}>{t('htreamenten')}</Text>}
                    {(isTamil === "Ta")? <Text style={home.cardcontentta}>{t('farm_sub')}</Text>:<Text style={home.cardcontent}>{t('farm_suben')}</Text>}
                </View>
                </View>
            </Pressable>
           
       </View>
       <View style={{flexDirection:'row',marginVertical:10}}>
            <Pressable underlayColor={'#fff'} onPress={()=>openwhatsapp()}>
                <View style={home.cardview}>
                <Image style={home.cardimg}
                source={require('../assets/images/herbalproducts.png')}/>
        

                        <View style={home.wpicon}>
                            <Pressable style={{padding:4}}><Whatsapp width={18} height={18} /></Pressable>
                        </View>
                       
                <View style={{marginHorizontal:10,marginVertical:5}}>
                {(isTamil == "Ta")? <Text style={home.cardtitleta}>{t('buyfrom')}</Text>:<Text style={home.cardtitle}>{t('buyfromen')}</Text>}
                {(isTamil == "Ta")? <Text style={home.cardcontentta}>{t('hpr_sub')}</Text>:<Text style={home.cardcontent}>{t('hpr_suben')}</Text>}
                </View>
                </View>
            </Pressable>
            <Pressable underlayColor={'#fff'} onPress={()=>openwhatsapp()}>
                <View style={home.cardview}>
                <Image style={home.cardimg}
                    source={require('../assets/images/buyfarm.png')}/>  
                        <View style={home.wpicon}>
                            <Pressable style={{padding:4}}><Whatsapp width={18} height={18} /></Pressable>
                        </View>
                       
                <View style={{marginHorizontal:10,marginVertical:5}}>
                {(isTamil === "Ta")? <Text style={home.cardtitleta}>{t('farm')}</Text>:<Text style={home.cardtitle}>{t('farmen')}</Text>}
                {(isTamil === "Ta")? <Text style={home.cardcontentta}>{t('buyfrom_sub')}</Text>:<Text style={home.cardcontent}>{t('buyfrom_suben')}</Text>}
                </View>
                </View>
            </Pressable>
           
       </View>
       
   </View>
        </View>
   </View>
    );
  };


  const {width,height} = Dimensions.get('window');

const home = StyleSheet.create({
    appbar:{
        backgroundColor: '#fff',
        height:55,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,
    },
    appbarcontent:{
        marginHorizontal:15,
        marginVertical:10, 
        flexDirection:'row',
        justifyContent:'space-between'
    },
    apptitle:{
        fontSize:20,
        fontWeight:'bold',
        color:'#333333',
        marginTop:4,
        marginRight:10,
        fontFamily:'Poppins-Bold'
    },
    tamilsvg:{
        width:25,
        height:25,
        borderRadius:50,
        backgroundColor:'grey',
        marginHorizontal:5,
        marginTop:4,
        justifyContent:'center',
        padding:3
    },
    englishsvg:{
        width:25,
        height:25,
        borderRadius:50,
        backgroundColor:'grey',
        marginHorizontal:5,
        marginTop:4,
        padding:3
    },
    profile:{
        width:30,
        height:30,
        borderRadius:50,
        backgroundColor:'grey',
        marginLeft:5
    },
    title:{
        color:'#043328',
        fontSize:23,
        marginRight:20,
        fontWeight:'bold',
        fontFamily:'Poppins-Bold'
    },
    titletamil:{
      color:'#043328',
      fontSize:19,
      fontWeight:'bold',
      fontFamily:'Poppins-Bold',
      marginHorizontal:2

  },
    modalcontainer:{ 
      flex: 3,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 2,
      overflow: "hidden",
    },
    modalview:{ margin: 20,
      backgroundColor: "#FFFFFF",
      borderRadius: 20,
      padding: 0,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width: "65%",
    },
    alerttamil:{
      fontSize: 16,
      fontWeight: "400",
      color:'black',
      marginTop: 10,
      justifyContent:'center',
      paddingHorizontal:20,
      paddingVertical:10,
      textAlign:'center'
    },
    btn:{
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      overflow: "hidden",
    },
    continue:{ 
      width: "75%",
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#6EBC1B",
      borderRadius: 20,
  },
    notnow:{
      width: "75%",
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: "2%",
      marginBottom: "2%",
      color:'black',
      borderRadius: 20,
      
  },
    cardview:{
        width:width*0.45,
        height:height*0.31,
        marginTop:10,
        marginRight:10,
        borderRadius:20,
        backgroundColor:'white',
        elevation:5,
        shadowColor:'#7B869A'
    },
    cardimg:{
        width:width*0.45,
        height:height*0.16,
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    wpicon:{
        width:26,
        height:26,
        borderRadius:50,
        backgroundColor:'white',
        position:'absolute',
        top:width-270,
        left:width*0.37
    },
    cardtitle:{
        fontSize:19,
        color:'#000004',
        fontWeight:'800',
        fontFamily:'Poppins-Bold'
    },
    cardtitleta:{
      fontSize:15,
      color:'#000004',
      fontWeight:'800',
      fontFamily:'Poppins-Bold'
  },
    cardcontent:{
        fontSize:13,
        color:'#666666',
        marginTop:5,
        fontFamily:'Poppins-Medium'
    },
    cardcontentta:{
      fontSize:11,
      color:'#666666',
      marginTop:5,
      fontFamily:'Poppins-Medium'
  }
    


});



export default HomeScreen;