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
              onPress={() => this.props.OpenDrawer}
            />
          </Left>

          <Right>
            <View style={{alignItems: 'flex-start',}}><Text style={{fontWeight:'bold',fontSize:20}}>SuyaSMS</Text></View>
          </Right>

</Header>

        <Content>
            
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



});
