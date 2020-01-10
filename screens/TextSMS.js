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
import Skeleton from './Skeleton';

export default class TextSMS extends React.Component {
  render() {
    return (
      <Skeleton OpenDrawer = {this.props.navigation.openDrawer()} >

  <ScrollView >
            <View>

            <View style={styles.FormPane}>
                <View style={styles.FormTextView}>
                  
                   <View style={{flex: 50,alignItems: 'center',}}><Text style={{fontWeight:'bold',}}>Balance: 0 Unit</Text></View>
                   <View style={{flex: 50,alignItems: 'center',}}>
                   <TouchableHighlight underlayColor="#efefef" style={styles.TopUp}>
              <Text style={styles.buttonText}>TopUp</Text>
            </TouchableHighlight>
                     </View>
                </View>
                </View>

            


              <View style={styles.TextSMSHeader}>
                <Text style={styles.TextSMSHeaderText}>Send Bulk SMS</Text>
              </View>
              
              <View style={styles.FormAllPane}>
              
              <View style={styles.FormPane} >
                
                  <TextInput
                    placeholder="Sender Name"
                    style={styles.FormText}
                  />
                  </View>


              <View style={styles.FormPane}>
                <View style={styles.FormTextView}>
                  <TextInput placeholder="Recipient" style={styles.RecipientFormText} />
                  <TouchableHighlight
                    underlayColor="#efefef"
                    style={styles.Contact}
                    //onPress={ this.props.navigation.navigate('Auth')}
                  >
                    <Icon  size={25} name='verified-user'/>
                  </TouchableHighlight>
                </View>
                </View>

                
                <View style={styles.FormPane}>
              <View style={styles.textAreaContainer} >
    <TextInput
      style={styles.textArea}
      underlineColorAndroid="transparent"
      placeholder="Type something"
      placeholderTextColor="grey"
      numberOfLines={10}
      multiline={true}
    />
  </View>
  </View>


                <View style={styles.FormPane}>
                <View style={styles.FormTextView}>
                  
                   <View style={{flex: 50,alignItems: 'center',}}><Text >0/160</Text></View>
                   <View style={{flex: 50,alignItems: 'center',}}><Text>1 page(s)</Text></View>
                </View>
                </View>

    <View style={styles.FormPane}>
    <TouchableHighlight
              underlayColor="#efefef"
              style={styles.SendNow}
              //onPress={ this.props.navigation.navigate('Auth')}
            >
              <Text style={styles.buttonText}>Send</Text>
            </TouchableHighlight>
    </View>
        </View>

        
        </View>
      
          </ScrollView>
          </Skeleton>
    );
  }
}

const styles = StyleSheet.create({


    FormAllPane:{
      
      alignItems: 'center',
    justifyContent: 'center',
    },

    textAreaContainer: {
        borderColor: 'rgba(105,79,173,0.3)',
        //borderWidth: 1,
        padding: 5,
        width:'80%',
        borderRadius: 10,
        backgroundColor:'rgba(105,79,173,0.3)',
      },
      textArea: {
        height: 200,
        justifyContent: "flex-start"
      },
  FormTextView: {
    marginBottom: 10,
    flexDirection: 'row',
    width:'80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor:'rgba(105,79,173,0.3)',
  },
  FormText: {
    width: '80%',
    borderRadius: 10,
    backgroundColor:'rgba(105,79,173,0.3)',
    fontSize: 14,
  },

  RecipientFormText:{
    width:'80%',
    fontSize: 14,
    borderRadius: 10,
    backgroundColor:'rgba(105,79,173,0.3)',
  },
  
  FormPane: {
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:10,
  },
  TextSMSHeader: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextSMSHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  TopUp: {
    marginLeft: 20,
    backgroundColor: '#694fad',
    padding: (5, 5, 5, 5),
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#694fad',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SendNow: {
    
    backgroundColor: '#694fad',
    width: '80%',
    height:40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#694fad',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  LogOut: {
    marginLeft: 20,
    backgroundColor: 'gray',
    padding: (5, 5, 5, 5),
    width: '30%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Contact: {
    marginLeft: 2,
    
    padding: (5, 5, 5, 5),
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
