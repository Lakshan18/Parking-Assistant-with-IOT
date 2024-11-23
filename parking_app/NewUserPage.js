import React from 'react';
import { Image, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NewUserPage({navigation}) {
    return (
        <>
            <SafeAreaView style={{ flexGrow: 1, flexDirection: 'column', backgroundColor: '#eeeeee' }}>
                <View style={{ width: '100%', alignItems: 'flex-end', }}>
                    <View style={{ width: 100, height: 100,padding:15, }}>
                        <Image source={require('./assets/images/parking_logo.png')} style={{ width: '100%', height: '100%', objectFit: 'cover',opacity:0.85, }} />
                    </View>
                </View>
                <View style={{ flex: 1, paddingTop: '10%', }}>
                    <View style={{ width: '100%', position: 'relative', zIndex: 20, paddingVertical: 16, paddingLeft: 20, }}>
                        <Text style={styles.headingText1}>Apex</Text>
                        <Text style={styles.headingText2}>Parking Assistant</Text>
                    </View>
                    <View style={{ width: 340, height: 240, position: 'absolute', marginTop: '10%', top: 0, right: 0, zIndex: 10, }}>
                        <Image source={require('./assets/images/parking_assist.png')} style={styles.imgView1} />
                    </View>
                    <Text style={{ fontSize: 18, fontWeight: '400', color: '#6b6b6b', paddingHorizontal: 20, marginTop: '24%', marginBottom: 10, textAlign: 'center' }}>
                        "Apex Car Parking redefines convenience with innovative solutions.
                        We simplify your journey, offering stress-free parking, saving time,
                        and ensuring peace of mind."
                    </Text>
                </View>

                <View style={{ flex: 1,justifyContent:'center', }}>

                    {/* <Text style={styles.subText1}>Join with Us</Text> */}

                    <View style={{ width: '100%',marginTop:'20%', alignItems: 'center', }}>
                        <Pressable style={{ width: 150, paddingHorizontal: 20, paddingVertical: 12, backgroundColor: '#0e7311', borderRadius: 8, }}
                          onPress={() => {
                              navigation.replace('Register');
                          }}
                        >
                            <Text style={{ fontSize: 18, color: '#fff', fontWeight: '500', textAlign: 'center' }}>Join Now</Text>
                        </Pressable>
                        {/*                         
                            <View style={{ width: '100%', height: 'auto' }}>
                                <Text style={styles.fieldText1}>Full Name</Text>
                                <TextInput style={styles.textField1} />
                            </View>
                            <View style={{ width: '100%', height: 'auto' }}>
                                <Text style={styles.fieldText1}>NIC No</Text>
                                <TextInput style={styles.textField1} />
                            </View>
                            <View style={{ width: '100%', height: 'auto' }}>
                                <Text style={styles.fieldText1}>Mobile No</Text>
                                <TextInput style={styles.textField1} />
                            </View> */}

                    </View>
                </View>

            </SafeAreaView >
        </>
    );
}

const styles = StyleSheet.create({
    headingText1: {
        fontSize: 60,
        color: '#d4b611',
        fontWeight: '700',
    },
    headingText2: {
        fontSize: 32,
        color: '#2b2b2b',
        fontWeight: '700',
        paddingLeft: 40,
    },
    subText1: {
        fontSize: 28,
        color: '#3b3b3b',
        fontWeight: '500',
        paddingLeft: 20,
        marginTop: '15%',
        marginBottom: 10,
    },
    imgView1: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        opacity: 0.4,
    },
});