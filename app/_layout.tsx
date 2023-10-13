import { Tabs } from "expo-router"
import { StyleSheet } from 'react-native'
import React from 'react'
import { TamaguiProvider, Text, Stack, Button } from "tamagui"
import config from "../tamagui.config"

const BaseLayout = () => {
  return (
    <TamaguiProvider config={config}>
      <Stack style={styles.pageView}>
        <Stack style={styles.headerBar}>
          <Text style={[styles.white, styles.h1]}>Station Alpha</Text>
        </Stack>
        <Tabs>
          <Tabs.Screen name="index" options={{
            headerShown: false
          }}/>
        </Tabs>
      </Stack>
    </TamaguiProvider>
  )
}

export default BaseLayout


const styles = StyleSheet.create({
  pageView: {
    flex:1
  },
  headerBar:{
    backgroundColor: "#000044",
    padding: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  white: {
    color: "#fff"
  },
  h1: {
    fontSize: 24,
  }
})
