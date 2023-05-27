import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView horizontal showsVerticalScrollIndicator={false} >
      <View>
        <Image style={{ width: 400, height: 800 }} source={require('./assets/images/1.jpeg')}></Image>
      </View>
      <View>
        <Image style={{ width: 400, height: 800 }} source={require('./assets/images/2.jpeg')}></Image>
      </View>
      <View>
        <Image style={{ width: 400, height: 800 }} source={require('./assets/images/3.jpeg')}></Image>
      </View>
    </ScrollView>
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
