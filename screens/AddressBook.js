import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import {Header, Container, Left, Content, Right} from
'native-base';
import {Icon} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import Dialog from "react-native-dialog";

import Skeleton from './Skeleton';

export default class AddressBook extends React.Component {
    state = {
    
        AddressBookCount:0,
        ShowCreateAddressBookMenu:false,
        
    
      };

      

      handleCancel = () => {
        this.setState({ ShowCreateAddressBookMenu: false});
      };
  
      ShowCreateAddressBookMenu = () => {
        this.setState({ ShowCreateAddressBookMenu: true });
      };
    render() {
        return (

<View style={{flex:1,}}>
    <View style={{flex:90,}}>
    <Skeleton 
      OpenDrawerMenu= {this.props.navigation} 
      title={"AddressBook"}
      
      >
          <View style={styles.Container}>
          <View style={styles.flexOne}><Text>0 AddressBook(s)</Text></View>
          <View><ScrollView></ScrollView></View>

          </View>
      </Skeleton>
    </View>




    <View style={{flex:10, backgroundColor:"white",}}>
    <View style={styles.flexOne}>
          <TouchableHighlight
    underlayColor='#efefef'
    style={styles.button}
    onPress={ () => this.ShowCreateAddressBookMenu()}
    >
    
    <Text style={styles.buttonText}>
    +
    </Text>
    </TouchableHighlight>
          
          </View>
    </View>

    <Dialog.Container visible={this.state.ShowCreateAddressBookMenu}
            style={styles.dialogContainer}>
          <Dialog.Title>New AddressBook</Dialog.Title>
          <Dialog.Description>
            Enter Mobile Phone Numbers. Note: Seperate Them With Comma.
          </Dialog.Description>
          <Dialog.Input placeholder="AddressBook Name" 
          style={styles.textAreaContainer}/>
          <Dialog.Input placeholder="Mobile Number(s)" 
          style={styles.textAreaContainer}
          numberOfLines={5}
        multiline={true}
          />
          <Dialog.Button label="Add From Contact" onPress={ () => this.handleCancel()} />
          <Dialog.Button label="Create" onPress={ () => this.handleCancel()} />
          <Dialog.Button label="Cancel" onPress={ () => this.handleCancel()} />
        </Dialog.Container>
</View>
        );}}

        
const styles = StyleSheet.create({

    textAreaContainer: {
        borderColor: 'rgba(105,79,173,0.3)',
        //borderWidth: 1,
        padding: 5,
        borderRadius: 10,
        backgroundColor:'rgba(206,206,206,0.3)',
      },
   
    flexOne:{
      //width:'100%',
      justifyContent: 'center',
      alignItems: 'center',
      
      //marginBottom:20,
    },
    
      container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
           },
      
     
   
      button: {
        height: 60,
        backgroundColor: '#694fad',
        width: 60,
        borderWidth: 1,
        borderRadius:50,
        borderColor: '#694fad',
      justifyContent: 'center',
      alignItems: 'center',
        
        },
        
        buttonText: {
        color: '#fff',
        fontSize:20,
        fontWeight:"bold",
        },
        
      });