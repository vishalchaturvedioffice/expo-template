import React from 'react'
import { Text, View } from 'react-native'
import { StyleSheet } from 'react-native-unistyles'

const Page = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default Page