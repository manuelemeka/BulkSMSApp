import React from 'react';
import { StyleSheet,
     Text,
      View,
      TouchableHighlight,
    } 
      from 'react-native';
import {Header, Container, Left, Content, Right} from 
'native-base';
import { Icon } from 'react-native-elements';


export default class TextSMS extends React.Component
 {
    render() {
  return (

<Container>
<Header style={styles.container}>
<Left><Icon name="menu" style={styles.appBar} onPress={() => this.props.navigation.openDrawer()} /></Left>
 
  <Right>
  <Text>Balance: 0 Unit</Text>
  <TouchableHighlight
    underlayColor='#efefef'
    style={styles.TopUp}>
    <Text style={styles.buttonText}>
    TopUp
    </Text>
    </TouchableHighlight>
  </Right>
  
</Header>

<Content>
  <Text>Screen One</Text>
</Content>
</Container>
  )}
}


const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    margin:(10,30,10,30),
    
    
  },
  appBar:{
    alignItems: 'center',
    justifyContent: 'center'
  },
  TopUp:{
      marginLeft:20,
      backgroundColor: '#694fad',
      padding:(5,5,5,5),
      width: 80,
      borderWidth: 1,
      borderRadius:10,
      borderColor: '#694fad',
      justifyContent: 'center',
      alignItems: 'center',
  },
  buttonText:{
      color: 'white',
  },
})