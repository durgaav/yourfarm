import React from "react";
import { ImageBackground, StyleSheet, Text, View ,Dimensions,Image} from "react-native";
import Logo from '../assets/images/logo.svg';
const SplashScreen = ({navigation})=>{
  
  setTimeout (()=>{
    navigation.replace('Home')
  },3000);
  
const {height,width} = Dimensions.get('window');


  return(
<ImageBackground
     source={require("../assets/images/splash.png")}
      style={{width: '100%',height: '100%',justifyContent:"center",alignContent:"center",alignItems: "center"}}
    > 

                <View style={{ color:'white',justifyContent:'center',alignItems:'center'}} >
                    <Logo width={width*0.9} height={height*0.6} />

                </View>
    </ImageBackground>
)

}

export default SplashScreen;