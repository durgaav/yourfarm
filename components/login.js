import React,{useState,useEffect} from 'react';
import {View,Text,Dimensions,TextInput,TouchableHighlight,TouchableOpacity,Image} from 'react-native';
import Login from '../assets/images/login-img1.svg';
import Backgroundimg from '../assets/images/bottom-background.svg';
import Phone from '../assets/images/phone.svg';
import auth from '@react-native-firebase/auth';
import Splash2 from '../assets/images/splash-2.svg';
import Logo from '../assets/images/logo.svg';

const LoginPage=({navigation})=>{

const {width,height} = Dimensions.get('window')
const [phone, setPhone] = useState('');

const verifyphone =()=>{

    if(phone.length===0){
        console.log('Please enter your phone number');
    }else if(phone.length != 13){
        console.log('Phone number must be 10 digits');
    }else if(phone.slice(0,3) != '+91'){
        console.log('Please enter a country code');
    }else{
        console.log('wrong');
        console.log(phone);
        navigation.navigate("OTP",{phone});
    }  
}


    return(

        <View>
             <Backgroundimg height={height*1.6}/>
             <View style={{alignItems:'center',flexDirection:'column',position:'absolute',top:80,left:30}}>
              <Login />
             <Text style={{color:'#043328',fontWeight:'bold',fontSize:25,marginTop:20}}>Get going with</Text>
             <Text style={{color:'#043328',fontWeight:'bold',fontSize:25}}>Consultant</Text>


                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',flexDirection:'column',marginVertical:20,paddingTop:10}}>
                    <View>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',flexDirection:'row'}}>
                        <Image source={require('../assets/images/phone.png')} style={{marginRight:10,width:20,height:20}}/>
                        <Text style={{fontSize:18}}>+91</Text>
                    <TextInput
                        style={{height: 40, width:width*0.7, borderColor: 'gray',color:'black'}}
                        onChangeText={(text) => setPhone(text)}
                        inlineImagePadding={2}
                       // underlineColorAndroid="transparent"
                        value={phone}
                        placeholder="Enter your mobile number"
                        placeholderTextColor={'#666666'}
                        keyboardType='phone-pad'
                        maxLength={13}
                    />
                        </View>
                    <View style={{height:height*0.001,backgroundColor:'black',width:width*0.8}}/>

                    </View>
                       
                    </View>

   <TouchableHighlight onPress={()=>verifyphone()}style={{marginTop:90,justifyContent:'center'}} underlayColor='#6EBC1B'>
       <View style={{backgroundColor:'#6EBC1B',width:270,height:50,borderRadius:50,}}><Text style={{marginHorizontal:80,marginVertical:10,color:'#FFFFFF',fontSize:22}}>SEND OTP</Text></View>
   </TouchableHighlight>
           
    
        </View>
        </View>



    )
};

export default LoginPage;



// import React, {useState, useEffect} from 'react';
// import {
//   SafeAreaView,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import auth from '@react-native-firebase/auth';

// const LoginPage= () => {
//   const [user, setUser] = useState(null);

//   const [mobile, setMobile] = useState(null);

//   const [confirm, setConfirm] = useState(null);

//   const [code, setCode] = useState('');

//   const onAuthStateChanged = async userAuth => {
//     if (!userAuth) {
//       return;
//     }
//     if (userAuth) {
//       console.log(userAuth);
//       setUser(userAuth);
//     }

//     return () => userReference();
//   };
//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return () => {
//       subscriber;
//     };
//   }, []);

//   const signInWithMobileNumber = async () => {
//     const confirmation = await auth().signInWithPhoneNumber(mobile);
//     setConfirm(confirmation);
//   };

//   const confirmCode = async () => {
//     try {
//       await confirm.confirm(code);
//     } catch (error) {
//       console.log('Invalid code.');
//     }
//   };

//   const signOut = async () => {
//     auth().signOut();

//     setUser(null);

//     return () => userReference();
//   };

//   return (
//     <SafeAreaView style={{alignItems: 'center', flex: 1, marginTop: 100}}>
//       <View style={{margin: 10}}>
//         <Text>Mobile Sign In Tutorial</Text>
//       </View>

//       <View style={{margin: 10}}>
//         {user === null && (
//           <>
//             <TextInput
//               value={mobile}
//               onChangeText={e => setMobile(e)}
//               placeholder="mobile"
//               style={{
//                 borderWidth: 1,
//                 margin: 10,
//                 padding: 10,
//                 width: 200,
//               }}></TextInput>
//             {!confirm ? (
//               <>
//                 <TouchableOpacity
//                   style={{
//                     borderWidth: 1,
//                     margin: 10,
//                     padding: 10,
//                     alignItems: 'center',
//                   }}
//                   onPress={() => signInWithMobileNumber()}>
//                   <Text>Get Code</Text>
//                 </TouchableOpacity>
//               </>
//             ) : (
//               <>
//                 <TextInput
//                   value={code}
//                   onChangeText={e => setCode(e)}
//                   placeholder="Code"
//                   style={{
//                     borderWidth: 1,
//                     margin: 10,
//                     padding: 10,
//                     width: 200,
//                   }}></TextInput>
//                 <TouchableOpacity
//                   style={{
//                     borderWidth: 1,
//                     margin: 10,
//                     padding: 10,
//                     alignItems: 'center',
//                   }}
//                   onPress={() => confirmCode()}>
//                   <Text>Confirm Code</Text>
//                 </TouchableOpacity>
//               </>
//             )}
//           </>
//         )}
//       </View>
//       {user !== null && (
//         <View style={{margin: 10}}>
//           <Text style={{margin: 10}}>{user.phoneNumber}</Text>
//           <TouchableOpacity onPress={signOut} style={{alignItems: 'center'}}>
//             <Text>Sign Out</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </SafeAreaView>
//   );
// };

// export default LoginPage;