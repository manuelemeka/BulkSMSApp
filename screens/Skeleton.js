import {Header, Container, Left, Content, Right} from
'native-base';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import {Icon} from 'react-native-elements';


export default class Skeleton extends React.Component{
  render() {
    return (
        <Container>
        <Header style={styles.container}>
          <Left>
            <Icon
              name="menu"
              style={styles.appBar}
              onPress={() => this.props.OpenDrawerMenu.openDrawer()}
            />
          </Left>

          <Right>
    <View style={{alignItems: 'flex-start',}}><Text style={{fontWeight:'bold',fontSize:20}}>{this.props.title}</Text></View>
          </Right>

</Header>

        <Content style={styles.Content}>
            
        {this.props.children}
            
            </Content></Container>
    );}
}

const styles = StyleSheet.create({


container: {
  backgroundColor: '#fff',
  margin: (10, 30, 10, 30),
  borderRadius: 20,

},
appBar: {
  alignItems: 'center',
  justifyContent: 'center',
},

Content:{
  backgroundColor:'rgb(250,250,250)',
  paddingTop:10,
},

});
