import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default function History() {
  return (

    <View style={styles.container}>
      <View></View>


      <ScrollView>
        <View style={styles.container}>

      <View style={styles.History}>
      <View style={styles.HistoryBody}><Text>provides a simple, consistent interface for APIs which create visual components. Some APIs
don’t create UI components though: for example, accessing the Camera Roll, or querying the current
network connectivity of the device.</Text></View>
      <View style={styles.HistoryDetails}><Text>History Details</Text></View>
      </View>

      <View style={styles.History}>
      <View style={styles.HistoryBody}><Text>provides a simple, consistent interface for APIs which create visual components. Some APIs
don’t create UI components though: for example, accessing the Camera Roll, or querying the current
network connectivity of the device.</Text></View>
      <View style={styles.HistoryDetails}><Text>History Details</Text></View>
      </View>

      <View style={styles.History}>
      <View style={styles.HistoryBody}><Text>provides a simple, consistent interface for APIs which create visual components. Some APIs
don’t create UI components though: for example, accessing the Camera Roll, or querying the current
network connectivity of the device.</Text></View>
      <View style={styles.HistoryDetails}><Text>History Details</Text></View>
      </View>

      <View style={styles.History}>
      <View style={styles.HistoryBody}><Text>provides a simple, consistent interface for APIs which create visual components. Some APIs
don’t create UI components though: for example, accessing the Camera Roll, or querying the current
network connectivity of the device.</Text></View>
      <View style={styles.HistoryDetails}><Text>History Details</Text></View>
      </View>

      <View style={styles.History}>
      <View style={styles.HistoryBody}><Text>provides a simple, consistent interface for APIs which create visual components. Some APIs
don’t create UI components though: for example, accessing the Camera Roll, or querying the current
network connectivity of the device.</Text></View>
      <View style={styles.HistoryDetails}><Text>History Details</Text></View>
      </View>

      </View>
      </ScrollView>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center'
  },
  History:{
    marginTop:10,
    marginBottom:10,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  HistoryBody:{
    width:'60%',
  },
  HistoryDetails:{
    height:50,
    width:'90%',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor:'rgba(105,79,173,0.9)',
  },
})