import React from "react";
import { ImageBackground, StyleSheet, Text, View ,Dimensions,Image} from "react-native";
import Logo from '../assets/images/logo.svg';
const SplashScreen = ({navigation})=>{
  
  setTimeout (()=>{
    navigation.replace('Home')
  },3000);
  
const {height,width} = Dimensions.get('window');


  return(
    <View>
    <ImageBackground
        source={require("../assets/images/splash.png")}
          style={{width: '100%',height: '100%'}} > 

              <View style={{justifyContent:'center',alignItems:'center',marginTop:90}}>
                    <Image source={require('../assets/images/logo.png')} style={{width:width-115,height:height*0.161}}/>
              </View>         
        </ImageBackground>
        </View>

)

}

export default SplashScreen;