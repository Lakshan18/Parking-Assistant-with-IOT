import React from 'react'
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './components/Header';

export default function Login({navigation}) {
  return (
    <>
      <SafeAreaView style={{ flexGrow: 1 }}>
        <Header />
        <View style={{ flex: 1,justifyContent:'center' }}>
          <View style={styles.container1}>
            <View style={{ width: '100%', height: 'auto' }}>
              <Text style={styles.fieldText1}>Username</Text>
              <TextInput style={styles.textField1} />
            </View>
            <View style={{ width: '100%', height: 'auto' }}>
              <Text style={styles.fieldText1}>Password</Text>
              <TextInput style={styles.textField1} secureTextEntry={true}/>
            </View>
            <Pressable style={{ marginTop: '12%', width: '100%', height: 'auto', paddingVertical: 12, alignItems: 'center', borderRadius: 8, backgroundColor: '#0d65a3' }}
              onPress={() => {
                navigation.replace('Home');
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: '500', color: '#eeeeee', textAlign: 'center' }}>Login</Text>
            </Pressable>
          </View>
          <View style={{ width: 300, height: 200, position: 'absolute', top: 50, left: 10, zIndex: -1 }}>
            <Image source={require('./assets/images/parking_img_first_page.png')} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.18, }} />
          </View>
          <View style={{ width: 300, height: 300, position: 'absolute', bottom: 50, right: 0, zIndex: -1 }}>
            <Image source={require('./assets/images/reserve-parking-icon.png')} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.18, }} />
          </View>

        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container1: {
    width: '100%',
    height: 'auto',
    paddingBottom: 15,
    paddingHorizontal: 15,
    rowGap: 15,
    marginTop: 15,
    position: 'relative',
    zIndex: 5,
    marginTop: '10%',
  },
  fieldText1: {
    fontSize: 20,
    color: '#4b4b4b',
    fontWeight: '500',
    marginBottom: 5,
  },
  textField1: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderColor: '#9b9b9b',
    borderWidth: 1,
    color: '#000',
    fontSize: 18,
  },
});