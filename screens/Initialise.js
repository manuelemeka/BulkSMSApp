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
    } from 'react-native';
    
import Dialog from "react-native-dialog";

//import rootNav from './component';
//import Root from './component/root';


export default class _init_ extends Component {
  state = {
    dialogVisible: false,
    email: "",
    password: "",
  };
 
  showDialog = () => {
    this.setState({ dialogVisible: true });
  };
 
  handleCancel = () => {
    this.setState({ dialogVisible: false });
  };
 
  handleLogin = async () => {
    console.log("clicked login");
    const { email, password } = this.state
    try {
      if (email.length > 0 && password.length > 0) {
        this.setState({ dialogVisible: false });
        this.props.navigation.navigate('App')
      }
    } catch (error) {
      alert(error)
    }
  };
  
  
  handleEmailChange = email => {
    this.setState({ email })
  };

  handlePasswordChange = password => {
    this.setState({ password })
  };

  render() {
    return (

      
        <ImageBackground
        resizeMode='cover' 
        source={require('./images/moving-bg.gif')}
        style={ styles.imgBackground } 
      >
    
    <View style={styles.container}>
       <View style={styles.banner}>
       <Image 
       source={require('./images/logo.png')}
       style= { styles.logo } />
       <Text style={styles.logoText}>SuyaSmS</Text>
       <Text style={styles.serviceText}> We Offer Efficient bulkSMS and VoiceSMS Service</Text>
       </View>
    
    
       <View style={styles.menu}>
       <TouchableHighlight
    underlayColor='#efefef'
    style={styles.button}
    onPress={this.showDialog}>
    
    <Text style={styles.buttonText}>
    Sign In
    </Text>
    </TouchableHighlight>
    <TouchableHighlight
    underlayColor='#efefef'
    style={styles.clickable}>
    <Text style={styles.buttonText}>
    Sign Up
    </Text>
    </TouchableHighlight>
    <TouchableHighlight
    underlayColor='#efefef'
    style={styles.clickable}>
    <Text style={styles.buttonText}>
    Forgot Password
    </Text>
    </TouchableHighlight>
    <Dialog.Container 
    visible={this.state.dialogVisible}
    style={styles.dialogContainer}>
              <Dialog.Title>Login</Dialog.Title>
              <Dialog.Description>
                .
              </Dialog.Description>
              <Dialog.Input name='email' autoCapitalize='none' placeholder="Email" style={styles.dialogInput} onChangeText={this.handleEmailChange} />
              <Dialog.Input  name='password' secureTextEntry placeholder="Password" style={styles.dialogInput} onChangeText={this.handlePasswordChange} />
              <Dialog.Button label="Cancel" onPress={this.handleCancel} />
              <Dialog.Button label="Login" onPress={this.handleLogin} />
            </Dialog.Container>
       </View>
     </View>
     
     </ImageBackground>

    

    )
    }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    //backgroundColor: "white",
    //opacity:0,
    },
    
    logo:{
  
      height:200,
      width: 200,
      borderRadius:20,
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
    banner: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 60,
    },
    menu:{
      alignItems: 'center',
      flex: 40,
    },
    button: {
      height: 40,
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: '#ffffff',
      width: 400,
      marginRight: 20,
      marginTop: 5,
      borderWidth: 1,
      borderRadius:50,
      borderColor: 'rgba(255,120,0,.5)',
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
      color: 'rgb(255,120,0)',
      fontWeight: '600'
      },
      clickableText: {
        color: '#fff',
        fontWeight: '600'
        },
        imgBackground: {
          width: '100%',
          height: '100%',
          flex: 1,
          backgroundColor: "white",
  },
    });

