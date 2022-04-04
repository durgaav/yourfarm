import React,{useState,useRef} from 'react';
import {View,Text,Dimensions,TouchableHighlight,TextInput,TouchableOpacity} from 'react-native';
import Backgroundimg from '../assets/images/bottom-background.svg';
import Phone from '../assets/images/phone.svg';
import auth from '@react-native-firebase/auth';
import OTPTextInput from "react-native-otp-textinput";



const OTPScreen =({route:{params:{phone},},navigation})=>{
  

  const signInWithMobileNumber = async () => {
    const confirmation = await auth().signInWithPhoneNumber(phone,user);
    console.log('xn chilumxowmncldejdopjuggggdrceqwrazrxetderctu');
    console.log(phone);
    if(phone != null){
         setConfirm(confirmation);
         setUser(user);
         console.log('kjnsixgy');
         console.log(!user);
    }else if(phone == null){
        console.log('Feilds cannot be blank');
    }else{
        console.log('Something went wrong');
    }
  };

 
const [count,setcount]=useState(()=> signInWithMobileNumber());
let otpInputRef = useRef(null);
const{width,height} = Dimensions.get('window');
const [user,setUser] = useState('');
const [confirm, setConfirm] = useState(null);
const [code, setCode] = useState(null);
const[login,setLogin]=useState(true);


  const confirmCode = async () => {
    try {
      await confirm.confirm(code);
      setLogin(true);
      console.log(login);
      navigation.navigate('Home');
      console.log('sucess');
    setUser(null);
    } catch (error) {
      console.log('Invalid code.');
      console.log(error);
     
    }
  };


  var SharedPreferences = require('react-native-shared-preferences');
  // SharedPreferences.setItem("key2",login);

  
  // SharedPreferences.getItems(["key2",], function(values){
  //     console.log('hjdrjhvcctrfgfresexwaze',values)
  //   });
  // boolean mBoolean = PreferenceManager.getDefaultSharedPreferences(yourContext).getBoolean(key, login); //getBoolean will return defaultValue is key isn't found


    // SharedPreferences prefs = PreferenceManager.getDefaultSharedPreferences(); 
    // Boolean statusLocked = prefs.edit().putBoolean("locked", true).commit();


    return(
<View>
    <Backgroundimg height={height*1.6}/>
    <View style={{position:'absolute',top:50,margin:10}}>
       <Text style={{color:'#043328',fontWeight:'bold',fontSize:30,margin:20}}>
           Enter 6 digit verification code send to your number {phone}
       </Text>

       <OTPTextInput
            ref={otpInputRef}
            containerStyle={{marginBottom:20}}
            textInputStyle={{ borderRadius: 7,
            borderWidth: 2,width:40,
            backgroundColor: "#E9E9E9",}}
            inputCount={6}
            useRef
            tintColor="#E9E9E9"
            handleTextChange={(text) => setCode(text)}

          />

{/* 
       <TextInput
        style={{height: 40, width: 200, borderColor: 'gray', borderBottomWidth:1,color:'black'}}
       onChangeText={text => setCode(text)}
        inlineImagePadding={2}
        underlineColorAndroid="transparent"
        value={code}
        placeholder="code"
        placeholderTextColor={'#666666'}
        keyboardType='number-pad'
        maxLength={6}
      /> */}
       {/* <OtpInputs
          handleChange={(code) => console.log(code)}
          numberOfInputs={6}
        /> */}

              <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    margin: 10,
                    padding: 10,
                    alignItems: 'center',
                    color:'black'
                  }}
                  onPress={() => confirmCode()}>
                  <Text>Confirm Code</Text>
                </TouchableOpacity>

           <Text style={{color:'#666666',fontSize:15,justifyContent:'center'}}>Resend code in 00:23</Text>

    </View>
</View>
    )
};

export default OTPScreen;