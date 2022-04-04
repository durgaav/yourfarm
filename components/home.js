import React,{useState,useEffect} from 'react';
import {Text,View,Dimensions,TouchableHighlight,Image,StyleSheet,Linking,Modal,TouchableOpacity} from 'react-native'
import Tamil from '../assets/images/Tamil.svg.svg';
import English from '../assets/images/E.svg';
import Profile from '../assets/images/avatar.svg';
import Backgroundimg from '../assets/images/bottom-background.svg';
import Whatsapp from '../assets/images/whatsapp-icon.svg';
import LocalizedStrings from 'react-native-localization';
import auth, { firebase } from '@react-native-firebase/auth';


const HomeScreen = ({navigation }) => {
  const [user,setUser] = useState();
  const [modalVisible, setModalVisible] = useState(false);

    const {width,height} = Dimensions.get('window');
    
    const openwhatsapp=()=>{
            if (!user) {
                console.log('login failed.......');
                navigation.navigate('Login',{name:'Login'})
               } else {
                console.log(!user);
                console.log('sucess to open whatsapp...')
                setModalVisible(true);
                console.log(modalVisible);
                <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={{height:height*1.5,width:width*0.5,backgroundColor:'white'}}>
                 <Image source={require('../assets/images/whatsapp.png')} width={100} height={100}/>
                </View>
              </Modal>

        //     <Modal style={{background: 'red'}} ref={"modal1"}>
        //     <Text style={{color: 'white'}}>Basic modal</Text>
        //     <Button>Disable swipeToClose()</Button>
        //   </Modal>

                // let url = 'whatsapp://send?text=' + 'hello' + '&phone=' + 916383717150;
                // Linking.openURL(url).then((data) => {
                //   console.log('WhatsApp Opened');
                // }) 
            }
    }
   


const authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {
    if (user) {
    setUser(user);
    console.log('gfvtyjuyknhu',user)
    } else {
    setUser("")
    console.log(user);
    }
    })
    }
    useEffect(() => {
    authListener();
    }, [])
    
const signOutuser = async() => {
  await   firebase.auth().signOut();
    console.log(user);
    console.log(!user);
    navigation.navigate('Splash',{name:'Splash'})
    }
    
const profileFunction = ()=>{
    if(!user){
        console.log(user);
        navigation.navigate('Login',{name:'Login'})
      
    }else{
         navigation.navigate('Profile',{user})
        console.log(user)
    }
}

    return (

   <View>
    
        <View style={home.appbar} >
             <View style={home.appbarcontent}>
             <Text style={home.apptitle}>HOME</Text>
                    <View style={{flexDirection:'row',marginVertical:5}}>
                        <View style={home.tamilsvg}>
                            <TouchableHighlight underlayColor={'grey'}><Tamil /></TouchableHighlight>
                        </View>
                        <View style={home.englishsvg}>
                        <TouchableHighlight underlayColor={'grey'} onPress={()=>signOutuser()}><English width={25} height={25}/></TouchableHighlight>
                        </View>
                        <View style={home.profile}>
                            <TouchableHighlight underlayColor={'grey'} onPress={()=>profileFunction()}><Profile  height={30} width={30}/></TouchableHighlight>
                        </View>
                    </View>
             </View>
        </View>


<Backgroundimg  height={height*1.5} />

        <View style={{position:'absolute',top:70}}>

                 <View style={{marginVertical:10,marginHorizontal:15}}>
                    <Text style={home.title}>Find anything</Text>
                    <Text  style={home.title}>you need for your cattle</Text>
                </View>



   <View style={{flexDirection:'column',marginHorizontal:10}}>
       <View style={{flexDirection:'row',}}>
            <TouchableHighlight underlayColor={'#fff'} onPress={()=>openwhatsapp()}>
                <View style={home.cardview}>
                <Image style={home.cardimg}
                source={{uri:'https://civileats.com/wp-content/uploads/2019/10/191022-animal-agriculture-roundtable-animal-welfare-confinement-cafos-gestation-crates-grassfed-free-range-6-usda-cows.jpg'}}/>
        

                        <View style={home.wpicon}>
                            <TouchableHighlight style={{padding:4}}><Whatsapp width={18} height={18} /></TouchableHighlight>
                        </View>

                <View style={{marginHorizontal:10,marginVertical:5}}>
                <Text style={home.cardtitle}>Herbal             Treatment</Text>
                <Text style={home.cardcontent}>Sed ut perspiciatis unde omnis iste  omnis iste natus</Text>
                </View>
                </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor={'#fff'} onPress={()=>openwhatsapp()}>
                <View style={home.cardview}>
                <Image style={home.cardimg}
                source={{uri:'https://civileats.com/wp-content/uploads/2019/10/191022-animal-agriculture-roundtable-animal-welfare-confinement-cafos-gestation-crates-grassfed-free-range-6-usda-cows.jpg'}}/>
        

                        <View style={home.wpicon}>
                            <TouchableHighlight style={{padding:4}}><Whatsapp width={18} height={18} /></TouchableHighlight>
                        </View>

                <View style={{marginHorizontal:10,marginVertical:5}}>
                <Text style={home.cardtitle}>Herbal             Treatment</Text>
                <Text style={home.cardcontent}>Sed ut perspiciatis unde omnis iste  omnis iste natus</Text>
                </View>
                </View>
            </TouchableHighlight>
           
       </View>
       <View style={{flexDirection:'row',}}>
            <TouchableHighlight underlayColor={'#fff'} onPress={()=>openwhatsapp()}>
                <View style={home.cardview}>
                <Image style={home.cardimg}
                source={{uri:'https://civileats.com/wp-content/uploads/2019/10/191022-animal-agriculture-roundtable-animal-welfare-confinement-cafos-gestation-crates-grassfed-free-range-6-usda-cows.jpg'}}/>
        

                        <View style={home.wpicon}>
                            <TouchableHighlight style={{padding:4}}><Whatsapp width={18} height={18} /></TouchableHighlight>
                        </View>

                <View style={{marginHorizontal:10,marginVertical:5}}>
                <Text style={home.cardtitle}>Herbal             Treatment</Text>
                <Text style={home.cardcontent}>Sed ut perspiciatis unde omnis iste  omnis iste natus</Text>
                </View>
                </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor={'#fff'} onPress={()=>openwhatsapp()}>
                <View style={home.cardview}>
                <Image style={home.cardimg}
                source={{uri:'https://civileats.com/wp-content/uploads/2019/10/191022-animal-agriculture-roundtable-animal-welfare-confinement-cafos-gestation-crates-grassfed-free-range-6-usda-cows.jpg'}}/>
        

                        <View style={home.wpicon}>
                            <TouchableHighlight style={{padding:4}}><Whatsapp width={18} height={18} /></TouchableHighlight>
                        </View>

                <View style={{marginHorizontal:10,marginVertical:5}}>
                <Text style={home.cardtitle}>Herbal             Treatment</Text>
                <Text style={home.cardcontent}>Sed ut perspiciatis unde omnis iste  omnis iste natus</Text>
                </View>
                </View>
            </TouchableHighlight>
           
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
        fontSize:25,
        fontWeight:'bold',
        color:'#333333',
        marginVertical:5
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
        fontWeight:'bold'
    },
    cardview:{
        width:width*0.46,
        height:height*0.3,
        marginTop:10,
        marginRight:10,
        borderRadius:20,
        backgroundColor:'white',
        elevation:5,
        shadowColor:'#7B869A'
    },
    cardimg:{
        width:width*0.46,
        height:height*0.15,
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    wpicon:{
        width:26,
        height:26,
        borderRadius:50,
        backgroundColor:'white',
        position:'absolute',
        top:80,left:135,
    },
    cardtitle:{
        fontSize:18,
        color:'#000004'
    },
    cardcontent:{
        fontSize:12,
        color:'#666666',
        marginTop:5
    }
    


});



export default HomeScreen;