import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts, Inter_900Black} from "@expo-google-fonts/inter"

export default function App() {
  const [ fontsLoaded, fontError ] = useFonts({
    Inter_900Black
  });

  if(!fontsLoaded && !fontError){
    return null
  }

  return (
    <View style={styles.container}>
      <Text style={{fontFamily: "Inter_900Black", fontSize: 24}}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
