import React,{useState} from 'react';
import {Text,View,TouchableHighlight,Dimensions,Pressable,TextInput,Image} from 'react-native';
import Tamil from '../assets/images/Tamil.svg.svg';
import English from '../assets/images/E.svg';
import Profile from '../assets/images/avatar.svg';
import Nofify from '../assets/images/notification.svg';
import Location from '../assets/images/location.svg';
import Logout from '../assets/images/logout.svg';
import Backgroundimg from '../assets/images/bottom-background.svg';

const ProfileScreen = ({ navigation,route:{params:{user},},}) => {

  const {width,height} = Dimensions.get('window');
  const [prof,setProf]=useState('');
  const [pincode,setPincode] = useState('');
  const [mobileno,setMobileno]=useState('');
  const [location,setLocation]=useState('');
  const[email,setEmail]=useState('');
  const [final,setFinal]=useState(false);

  // var SharedPreferences = require('react-native-shared-preferences');
  // SharedPreferences.setItem("key1",pincode);


  // SharedPreferences.getItems(["key1",], function(values){
  //     console.log('hjdrjhvcctrfgfresexwaze',values)
  //   });

const saveFunction=()=>{
  
  // if(pincode=""&&prof=''&&mobileno=''&&location=""&&email=''){
  //   console.log('feilds cannot be blank');
  // }esle{
 
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


    //setFinal(true);
 // }

}


    return (

  <View>
  <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20,marginVertical:10,height:55}}>
                    

                    <Text style={{fontSize:24,fontWeight:'bold',color:'#333333'}}>PROFILE</Text>
                    <View style={{flexDirection:'row',marginVertical:5}}>
                
                        <View style={{width:25,height:25,borderRadius:50,backgroundColor:'grey',marginHorizontal:5,marginTop:4,justifyContent:'center',padding:3}}>
                            <TouchableHighlight underlayColor={'grey'}><Tamil /></TouchableHighlight>
                        </View>
                        <View style={{width:25,height:25,borderRadius:50,backgroundColor:'grey',marginHorizontal:5,marginTop:4,padding:3}}>
                          {/* <TouchableHighlight><Image source={require('../assets/images/E.png')} width={10} height={25}/></TouchableHighlight> */}
                        <TouchableHighlight underlayColor={'grey'} ><English width={25} height={25}/></TouchableHighlight>
                        </View>
                        
              
                    </View>
              
              </View>
              <Backgroundimg height={height*1.4}/>



               <View style={{position:'absolute',top:55}}>

                <View style={{height:height*0.15,width:width,backgroundColor:'grey'}} >
                  <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20,alignItems:'center'}}>
                      <View style={{flexDirection:'column'}}>
                      <Text style={{fontSize:17,color:'black'}}>Name</Text>
                      <Text style={{fontSize:19,color:'black',fontWeight:'bold'}}>DurgaDevi</Text>
                      </View>
                    <Profile width={80}/>
                  </View>
                </View>

                {(final)?
                <View>


                <View style={{flexDirection:'column',marginHorizontal:20,marginVertical:7}}>
                    <View>
                      <Text style={{color:'#666666',fontSize:17}}>Profession</Text>
                      <Text style={{marginVertical:3}}>{prof}</Text>
                      <View style={{backgroundColor:'black',width:width*0.9,height:height*0.001,marginVertical:5}}/>
                    </View>
                </View> 
                <View style={{flexDirection:'column',marginHorizontal:20,marginVertical:7}}>
                    <View>
                      <Text style={{color:'#666666',fontSize:17}}>Pincode</Text>
                      <Text style={{marginVertical:3}}>{pincode}</Text>
                      <View style={{backgroundColor:'black',width:width*0.9,height:height*0.001,marginVertical:5}}/>
                    </View>
                </View> 
                <View style={{flexDirection:'column',marginHorizontal:20,marginVertical:7}}>
                    <View>
                      <Text style={{color:'#666666',fontSize:17}}>Mobile No</Text>
                      <Text style={{marginVertical:3}}>{mobileno}</Text>
                      <View style={{backgroundColor:'black',width:width*0.9,height:height*0.001,marginVertical:5}}/>
                    </View>
                </View> 
                <View style={{flexDirection:'column',marginHorizontal:20,marginVertical:7}}>
                    <View>
                      <Text style={{color:'#666666',fontSize:17}}>Location</Text>
                      <Text style={{marginVertical:3}}>{location}</Text>                  
                      <View style={{backgroundColor:'black',width:width*0.9,height:height*0.001,marginVertical:5}}/>
                    </View>
                </View> 
                <View style={{flexDirection:'column',marginHorizontal:20,marginVertical:7}}>
                    <View>
                      <Text style={{color:'#666666',fontSize:17}}>Email</Text>
                      <Text style={{marginVertical:3}}>{email}</Text>
                      <View style={{backgroundColor:'black',width:width*0.9,height:height*0.001,marginVertical:5}}/>
                    </View>
                </View> 

                
                  </View>
                
                
      
                :
            <View>

              <View style={{flexDirection:'column',marginHorizontal:20,marginVertical:15}}>
                  <View>
                    <Text style={{color:'#666666',fontSize:17}}>Profession</Text>   
                                  
                      <TextInput
                        style={{width:width*0.9,height:height*0.06, borderColor: 'gray', borderBottomWidth:1,color:'black'}}
                        onChangeText={a => setProf(a)}
                        value={prof}
                        inlineImagePadding={2}
                        underlineColorAndroid="transparent"
                        placeholder="Proffession"
                        placeholderTextColor={'#666666'}
                        keyboardType={'default'}
                        
                      />
                  </View>
                  <View>
                    <Text style={{color:'#666666',fontSize:17,marginVertical:3}}>Pincode</Text>
                    <TextInput
                        style={{width:width*0.9,height:height*0.06, borderColor: 'gray', borderBottomWidth:1,color:'black'}}
                        onChangeText={b => setPincode(b)}
                        value={pincode}
                        inlineImagePadding={2}
                        underlineColorAndroid="transparent"
                        placeholder="Pincode"
                        placeholderTextColor={'#666666'}
                        keyboardType={'number-pad'}
                        maxLength={6}
                        
                      />
                  </View>
                  <View>
                    <Text style={{color:'#666666',fontSize:17,marginVertical:3}}>Mobile No</Text>
                    <TextInput
                        style={{width:width*0.9,height:height*0.06,borderColor: 'gray', borderBottomWidth:1,color:'black'}}
                        onChangeText={c =>setMobileno(c)}
                        value={mobileno}
                        inlineImagePadding={2}
                        underlineColorAndroid="transparent"
                        placeholder="Mobile No"
                        placeholderTextColor={'#666666'}
                        keyboardType={'phone-pad'}
                        maxLength={10}
                        
                      />
                  </View>
                  <View>
                    <Text style={{color:'#666666',fontSize:17,marginVertical:3}}>Location</Text>
                    <TextInput
                        style={{width:width*0.9,height:height*0.06,borderColor: 'gray', borderBottomWidth:1,color:'black'}}
                        onChangeText={d => setLocation(d)}
                        value={location}
                        inlineImagePadding={2}
                        underlineColorAndroid="transparent"
                        placeholder="Location"
                        placeholderTextColor={'#666666'}
                        keyboardType={'default'}
                        
                      />
                  </View>
                  <View>
                    <Text style={{color:'#666666',fontSize:17,marginVertical:3}}>Email</Text>
                    <TextInput
                        style={{width:width*0.9,height:height*0.06,borderColor: 'gray', borderBottomWidth:1,color:'black'}}
                        onChangeText={e => setEmail(e)}
                        value={email}
                        inlineImagePadding={2}
                        underlineColorAndroid="transparent"
                        placeholder="Email"
                        placeholderTextColor={'#666666'}
                        keyboardType={'email-address'}
                        
                      />
                  </View>
              </View>
               <View style={{marginHorizontal:20}}>
               <Pressable style={{alignItems:'center',borderColor:'black',borderWidth:1,height:height*0.06,borderRadius:10}} onPress={()=>saveFunction()}>
                 <Text style={{marginVertical:5,fontSize:20,color:'black',fontWeight:'bold'}}>Save</Text>
               </Pressable>
 
               </View>
               </View>
              
              }


             

              <View style={{marginHorizontal:20,marginVertical:20}}>
              <Pressable style={{borderColor:'black',borderWidth:1,height:height*0.06,borderRadius:10}}>
                <View style={{flexDirection:'row'}}>
                    <View style={{marginVertical:13,marginHorizontal:20}}>
                    <Logout/>
                    </View>
                <Text style={{marginVertical:5,fontSize:20,color:'red',fontWeight:'bold'}}>Logout</Text>
                </View>
              </Pressable>

              </View>


                

              </View> 
      </View>
    )
  };


  export default ProfileScreen;