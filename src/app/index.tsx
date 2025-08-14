import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { StyleSheet } from 'react-native-unistyles'

const Page = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large"  />
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