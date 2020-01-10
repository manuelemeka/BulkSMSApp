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
import {ScrollView} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';

export default class Support extends React.Component {
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
            <View style={{flex: 1,alignItems: 'flex-start',}}><Text style={{fontWeight:'bold',fontSize:20}}>Support</Text></View>
          </Right>

</Header>

        <Content>

        <ScrollView>
            <View>

            <View>
                <View style={styles.SupportHeader}>
                    <View style={styles.SupportSubHeader}><Text style={styles.SupportHeaderText}>Contact Us</Text></View>
                    <View style={{flex: 50,alignItems: 'center',}}></View>
                </View>
                <View style={styles.SupportBody}>
                    <View>
                    <Text style={styles.ContactText}>You can reach us on the following contact</Text>
                    <Text style={styles.ContactText}>+2347030674881</Text>
                    <Text style={styles.ContactText}>+8023381943</Text>
                    <Text style={styles.ContactText}>manuelemeka@gmail.com</Text>
                    </View>
                </View>
            </View>


            <View>
                <View style={styles.SupportHeader}>
                <View style={styles.SupportSubHeader}><Text style={styles.SupportHeaderText} >About Us</Text></View>
                    <View style={{flex: 50,alignItems: 'center',}}></View>
                </View>
                <View style={styles.SupportBody}>
                    
                    <Text style={styles.AboutUsText}>
                    So far we’ve primarily used React components to interact with the underlying native APIs – we’ve
used components like View, Text, and Image to create native UI elements on the screen.
React provides a simple, consistent interface for APIs which create visual components. Some APIs
don’t create UI components though: for example, accessing the Camera Roll, or querying the current
network connectivity of the device.
React Native also comes with APIs for interacting with these non-visual native APIs. In contrast
with components, these APIs are generally imperative functions: we must call them explicitly at
the right time, rather than returning something from a component’s render function and letting
React call them later. React Native simply provides us a JavaScript wrapper, often cross-platform,
for controlling the underlying native APIs.
                    </Text>
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
            container:{
                backgroundColor: '#fff',
                 margin: (10, 30, 10, 30),
                borderRadius: 20,
            },

            SupportHeader:{
                flexDirection: 'row',
            },

            SupportHeaderText:{
                fontSize:16,
                fontWeight:'bold',
                color:'white',
            },

            SupportSubHeader:{
                backgroundColor:'rgba(105,79,173,0.9)',
                flex: 50,
                alignItems: 'center',
                paddingBottom:8,
                paddingTop:8,
            },

            SupportBody:{
                marginTop:10,
                marginBottom:20,
                alignItems: 'center',
                justifyContent: 'center',
            },

            ContactText:{
                fontSize:16,
                fontWeight:'bold',
            },
            
            AboutUsText:{
                padding:20,
                fontSize:14,
            },
        });