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

export default class TextSMS extends React.Component {
  render() {
    return (
      <Container>
        <Header style={styles.container}>
          <Left>
            <Icon
              name="menu"
              style={styles.appBar}
              onPress={() => this.props.navigation.openDrawer()}
            />
          </Left>

          <Right>
            <Text>Balance: 0 Unit</Text>
            <TouchableHighlight underlayColor="#efefef" style={styles.TopUp}>
              <Text style={styles.buttonText}>TopUp</Text>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="#efefef"
              style={styles.LogOut}
              //onPress={ this.props.navigation.navigate('Auth')}
            >
              <Text style={styles.buttonText}>Log Out</Text>
            </TouchableHighlight>
          </Right>

</Header>

        <Content>

  <ScrollView >
            <View>
              <View style={styles.TextSMSHeader}>
                <Text style={styles.TextSMSHeaderText}>Send Bulk SMS</Text>
              </View>
              <View style={styles.FormPane}>
                <View style={styles.FormTextView}>
                  <TextInput placeholder="Recipient" style={styles.FormText} />
                  <TouchableHighlight
                    underlayColor="#efefef"
                    style={styles.Contact}
                    //onPress={ this.props.navigation.navigate('Auth')}
                  >
                    <Icon  size={25} name='verified-user'/>
                  </TouchableHighlight>
                </View>

                <View style={styles.FormPane} >
                  <TextInput
                    placeholder="Sender Name"
                    style={styles.FormText}
                  />

              </View>

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
    <View>
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
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

    textAreaContainer: {
        borderColor: '#694fad',
        borderWidth: 1,
        padding: 5,
        width:400,
        marginTop:20,
        marginBottom:20,
      },
      textArea: {
        height: 200,
        justifyContent: "flex-start"
      },
  FormTextView: {
    marginBottom: 20,
    flexDirection: 'row',
    width:400,
  },
  FormText: {
    width: 400,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#694fad',
    fontSize: 18,
  },
  FormPane: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: (10, 10, 10, 10),
  },
  TextSMSHeader: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextSMSHeaderText: {
    fontSize: 25,
    fontWeight: 'bold',
  },

  container: {
    backgroundColor: '#fff',
    margin: (10, 30, 10, 30),
    borderRadius: 20,

  },
  appBar: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TopUp: {
    marginLeft: 20,
    backgroundColor: '#694fad',
    padding: (5, 5, 5, 5),
    width: 80,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#694fad',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SendNow: {
    marginLeft: 20,
    backgroundColor: '#694fad',
    padding: (5, 5, 5, 5),
    width: 400,
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
    width: 80,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Contact: {
    marginLeft: 2,
    
    padding: (5, 5, 5, 5),
    width: 40,
    //borderWidth: 1,
    //borderRadius: 10,
    //borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
