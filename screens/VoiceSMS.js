import React from 'react'
import { StyleSheet, Text, View,ScrollView, } from 'react-native'
import Skeleton from './Skeleton'

export default class VoiceSMS extends React.Component {
  render() {
  return (
    <Skeleton
    OpenDrawerMenu= {this.props.navigation} 
      title={"SMS Template"}
    >
    <View>


      <View style={styles.Category}><Text style={{fontWeight:'bold',}} >SELECT CATEGORY</Text></View>


      <ScrollView>
    <View style={styles.container}>


      <View style={styles.Template}>
      <View style={styles.TemplateHeader}><Text style={{fontWeight:'bold',color:'white',}} >SMS TEMPLATE HEADER</Text></View>
      <View style={styles.TemplateBody}><Text>
      provides a simple, consistent interface for APIs which create visual components. Some APIs
don’t create UI components though: for example, accessing the Camera Roll, or querying the current
network connectivity of the device.
        </Text></View>
      <View style={styles.TemplateFooter}><Text style={{fontWeight:'bold',color:'white',}} >SMS TEMPLATE FOOTER</Text></View>
      </View>

      <View style={styles.Template}>
      <View style={styles.TemplateHeader}><Text style={{fontWeight:'bold',color:'white',}} >SMS TEMPLATE HEADER</Text></View>
      <View style={styles.TemplateBody}><Text>
      provides a simple, consistent interface for APIs which create visual components. Some APIs
don’t create UI components though: for example, accessing the Camera Roll, or querying the current
network connectivity of the device.
        </Text></View>
      <View style={styles.TemplateFooter}><Text style={{fontWeight:'bold',color:'white',}} >SMS TEMPLATE FOOTER</Text></View>
      </View>

      <View style={styles.Template}>
      <View style={styles.TemplateHeader}><Text style={{fontWeight:'bold',color:'white',}} >SMS TEMPLATE HEADER</Text></View>
      <View style={styles.TemplateBody}><Text>
      provides a simple, consistent interface for APIs which create visual components. Some APIs
don’t create UI components though: for example, accessing the Camera Roll, or querying the current
network connectivity of the device.
        </Text></View>
      <View style={styles.TemplateFooter}><Text style={{fontWeight:'bold',color:'white',}} >SMS TEMPLATE FOOTER</Text></View>
      </View>

      <View style={styles.Template}>
      <View style={styles.TemplateHeader}><Text style={{fontWeight:'bold',color:'white',}} >SMS TEMPLATE HEADER</Text></View>
      <View style={styles.TemplateBody}><Text>
      provides a simple, consistent interface for APIs which create visual components. Some APIs
don’t create UI components though: for example, accessing the Camera Roll, or querying the current
network connectivity of the device.
        </Text></View>
      <View style={styles.TemplateFooter}><Text style={{fontWeight:'bold',color:'white',}} >SMS TEMPLATE FOOTER</Text></View>
      </View>


    </View> 
    </ScrollView>

    </View>
    </Skeleton>
  )
}
}

const styles = StyleSheet.create({

  Category:{
    marginBottom:10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center'
  },

  Template:{
    width:'80%',
    marginTop:10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#fff',
    backgroundColor:'rgba(105,79,173,0.9)',
  },

  TemplateHeader:{
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:5,
    marginTop:5,
  },

  TemplateBody:{
    width:'100%',
    padding:(10,10,10,10),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#fff',
    backgroundColor:'rgba(255,255,255,0.9)',
  },

  TemplateFooter:{
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:5,
    marginTop:5,
  },

})