import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts, Inter_400Regular} from "@expo-google-fonts/inter"

export default function App() {
  const [ fontsLoaded, fontError ] = useFonts({
    Inter_400Regular,
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if(!fontsLoaded && !fontError){
    return null
  }

  return (
    <View style={styles.container}>
      <Text style={{fontFamily: "Inter_400Regular", fontSize: 24}}>Hello, world! Let's do something epic</Text>
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

const Summary = () => {
  return (
    <View>
    </View>
  )
}
