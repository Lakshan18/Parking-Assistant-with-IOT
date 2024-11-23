import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Header() {
    return (
        <>
            <View style={{ width: '100%', height: 'auto', flexDirection: 'row', paddingVertical: 12, paddingHorizontal: 20, backgroundColor: '#dece1d', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', columnGap: 8, alignItems: 'center' }}>
                    <Image source={require('../assets/images/parking_logo.png')} style={{ width: 40, height: 40, objectFit: 'cover' }} />
                    <Text style={{ fontSize: 24, fontWeight: '500', color: '#000' }}>Apex | PA</Text>
                </View>
                <Ionicons name="menu" size={28} color="#000" />
            </View>
        </>
    )
}