/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    ImageBackground,
    ScrollView,
    TextInput,
    } from 'react-native';



export default class _init_ extends Component {
  state = {
    
    email: "",
    password: "",
    error:"",
  };
 
  
 
  handleLogin = async () => {
    console.log("clicked login");
    const { email, password } = this.state
    try {
      if (email.length > 0 && password.length > 0) {
       // this.setState({ dialogVisible: false });
        this.props.navigation.navigate('App')

       // this.setState({ error:"" })
      }
      else{
        this.setState({ error:"Error LogIn check your details" })
      }
    } catch (error) {
      alert(error)
    }
  };
  
  
  handleEmailChange (email) {
    console.log(' Email: ' , email)
    this.setState({ email,  error:"" })
    }

  handlePasswordChange (password) {
    //console.log(' Email: ' , email)
    this.setState({ password,error:"" })
    }

  render() {
    return (

      
        <ImageBackground
        resizeMode='cover' 
        source={require('./images/moving-bg.gif')}
        style={ styles.imgBackground } 
      >
    
    
       
    
      <View style={styles.container} >
      <View style={styles.flexOne} >
        <Image
          source={require('./images/logo.png')}
          style={ styles.logo }
          
          />
        <Text style={styles.LoginHeader}>Log In</Text>
    <Text style={styles.LoginError}>{this.state.error}</Text>
      <View style={styles.flexOne}>
      <TextInput placeholder="Email" onChangeText={(text) => this.handleEmailChange(text)} style={styles.FormText} />
      </View>

      <View style={styles.flexOne}>
      <TextInput placeholder="Password" onChangeText={(text) => this.handlePasswordChange(text)} secureTextEntry style={styles.FormText} />
      </View>

      <TouchableHighlight
    underlayColor='#efefef'
    style={styles.button}
    onPress={this.handleLogin}>
    
    <Text style={styles.buttonText}>
    Sign In
    </Text>
    </TouchableHighlight>
      </View>
        
        </View>
    
    
       
       
    
    
       
    
     
     </ImageBackground>

    

    )
    }
}

const styles = StyleSheet.create({

  LoginHeader:{
    fontSize:26,
    
  },

  LoginError:{
    fontSize:12,
    paddingBottom:10,
    paddingTop:10,
    //fontColor:"red";
  },

  flexOne:{
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
  },
  FormText: {
    width: '80%',
    //borderWidth: 1,
    borderRadius: 10,
    //borderColor: '#694fad',
    backgroundColor:'rgba(105,79,173,0.3)',
    fontSize: 14,
    fontWeight:"bold",
    
  },
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
         },
    
    logo:{
  
      height:60,
      width: 80,
      
    },
    logoText:{
  
      color: '#525B56',
      fontSize:38,
    },
    dialogInput:{
        borderBottomWidth:1,
        marginBottom:10,
        color: '#525B56',
        fontSize:14,
        width:400,
      },
    serviceText:{
  
      borderLeftWidth:3,
      borderRightWidth:3,
      paddingTop:5,
      paddingLeft:5,
      paddingRight:5,
      color: '#525B56',
      fontSize:18,
    },
    
 
    button: {
      height: 40,
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: '#694fad',
      width: '50%',
      marginRight: 20,
      marginTop: 5,
      borderWidth: 1,
      borderRadius:50,
      borderColor: '#694fad',
    justifyContent: 'center',
    alignItems: 'center',
      
      },
      clickable: {
        height: 40,
        paddingLeft: 20,
        paddingRight: 20,
        width: 200,
        marginRight: 20,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center'
        },
      buttonText: {
      color: '#fff',
      fontWeight: '600'
      },
      clickableText: {
        color: '#fff',
        fontWeight: '600'
        },
        imgBackground: {
          padding:(5,5,5,5),
          flex: 1,
          backgroundColor: "white",
  },
    });

