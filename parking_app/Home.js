import React, { useState, useEffect } from 'react';
import { Image, Pressable, StyleSheet, Text, View, Modal, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Header from './components/Header';
import { ActivityIndicator } from 'react-native';

export default function App() {
    const [gotoParked, setGoToParked] = useState();
    const [gotoParkedNum, setGoToParkedNum] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [modal2Visible, setModal2Visible] = useState(false);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [loading, setLoading] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [reservationType, setReservationType] = useState("");

    const [slots, setSlots] = useState([
        { id: 1, slot_num: "SLOT-01", status: "Free", backgroundColor: "#4CAF50" },
        { id: 2, slot_num: "SLOT-02", status: "Free", backgroundColor: "#4CAF50" },
        { id: 3, slot_num: "SLOT-03", status: "Free", backgroundColor: "#4CAF50" },
        { id: 4, slot_num: "SLOT-04", status: "Free", backgroundColor: "#4CAF50" },
        { id: 5, slot_num: "SLOT-05", status: "Free", backgroundColor: "#4CAF50" },
        { id: 6, slot_num: "SLOT-06", status: "Free", backgroundColor: "#4CAF50" },
    ]);

    const openModal = (slot) => {
        setSelectedSlot(slot);
        setModalVisible(true);
    }

    const closeModal = () => {
        setModalVisible(false);
    }

    const handleBookingOrParking = ({ reservation }) => {
        setModalVisible(false);
        setModal2Visible(true);
        setLoading(true);

        // Update the slot status based on the reservation type
        setTimeout(() => {
            setLoading(false);
            setPaymentSuccess(true);
            setReservationType(reservation);

            // Update slot status and background color
            const updatedSlots = slots.map((slot) => {
                if (slot.id === selectedSlot.id) {
                    if (reservation === "booked") {
                        slot.status = "Booked";
                        slot.backgroundColor = "#FFA500";  // Orange color for booked slot
                    } else if (reservation === "parking") {
                        slot.status = "Parking...";
                        slot.backgroundColor = "#FF0000";  // Red color for parked slot
                    }
                }
                return slot;
            });
            setSlots(updatedSlots);  // Update the state with the new slot data

            setCloseSuccess();
        }, 2000);
    };


    const setCloseSuccess = () => {
        setTimeout(() => {
            setModal2Visible(false);
            setPaymentSuccess(false);
        }, 1800);
    }

    const closeModal2 = () => {
        setModal2Visible(false);
        setPaymentSuccess(false);
    }


    const SlotCard = ({ id, slot_num, status, backgroundColor }) => {
        return (
            <Pressable
                style={[styles.card, { backgroundColor: backgroundColor || '#4CAF50' }]}  // Use dynamic background color
                onPress={() => openModal({ id, slot_num })}
            >
                <Image source={require('./assets/images/car.png')} style={{ width: 40, height: 40 }} />
                <Text style={styles.slotText}>{slot_num}</Text>
                <Text style={styles.statusText}>{status || "Free"}</Text>
            </Pressable>
        );
    };

    const renderItem = ({ item }) => (
        <SlotCard
            slot_num={item.slot_num}
            status={item.status}
            backgroundColor={item.backgroundColor}
            id={item.id}
        />
    );

    return (
        <SafeAreaView style={{ flexGrow: 1 }}>
            <Header />
            <View style={{ flex: 1 }}>
                <View style={styles.container1}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <View style={{ flexDirection: 'row', columnGap: 8, justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 5, marginTop: 10 }}>
                            <Text style={{ fontSize: 17, fontWeight: '500', color: '#6b6b6b' }}>Lakshan18@</Text>
                            <Image source={require('./assets/images/user.png')} style={{ width: 40, height: 40 }} />
                        </View>
                    </View>

                    <View style={styles.mainView1}>
                        <View style={{ paddingHorizontal: 10, marginTop: '20%' }}>
                            <Text style={{ fontSize: 26, color: '#000', fontWeight: '500' }}>Available Slots</Text>
                            <View style={{ height: 380, width: '100%', marginTop: '3%' }}>
                                <FlatList
                                    data={slots}
                                    renderItem={renderItem}
                                    keyExtractor={(item) => item.id.toString()}
                                    numColumns={2}
                                    columnWrapperStyle={styles.row}
                                    showsVerticalScrollIndicator={false}
                                    horizontal={false}
                                    contentContainerStyle={styles.container2}
                                />
                            </View>
                        </View>

                        {/* Modal to show booking options */}
                        <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={closeModal}>
                            <View style={styles.modalOverlay}>
                                <View style={styles.modalContainer}>
                                    <Text style={{ fontSize: 22, fontWeight: '600', marginBottom: 10 }}>
                                        {selectedSlot?.slot_num || 'No Slot Selected'}
                                    </Text>
                                    <Text style={{ fontSize: 20, marginBottom: 20, textAlign: 'center' }}>
                                        Would you like to book or park this slot?
                                    </Text>
                                    <View style={{ width: '100%', paddingBottom: 15, }}>
                                        <View style={styles.modalDsc1}>
                                            <Text style={styles.modalDetailsTitle1}>Date:</Text>
                                            <Text style={{ fontSize: 20, fontWeight: '500', color: '#9b9b9b' }}>02/11/2024</Text>
                                        </View>
                                        <View style={styles.modalDsc1}>
                                            <Text style={styles.modalDetailsTitle1}>Reservation Charge:</Text>
                                            <Text style={{ fontSize: 20, fontWeight: '500', color: '#087515' }}>LKR 3000.00</Text>
                                        </View>
                                        <Text style={{ fontSize: 15, fontWeight: '400', color: '#bf0b0b', fontStyle: 'italic', marginTop: 15, }}>*Reservation is non-refundable.</Text>
                                    </View>
                                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Pressable style={styles.bookNowBtn} onPress={() => handleBookingOrParking({ reservation: "booked" })}>
                                            <Text style={{ color: '#FFF', fontWeight: '600', fontSize: 17 }}>Book Now</Text>
                                        </Pressable>
                                        <Pressable style={styles.parkNowBtn} onPress={() => handleBookingOrParking({ reservation: "parking" })}>
                                            <Text style={{ color: '#FFF', fontWeight: '600', fontSize: 17 }}>Park Now</Text>
                                        </Pressable>
                                    </View>
                                    <Ionicons name="close" size={28} color="black" style={{ position: 'absolute', top: 0, right: 0, padding: 8 }} onPress={closeModal} />
                                </View>
                            </View>
                        </Modal>

                        {/* Modal for confirmation */}
                        <Modal animationType="fade" transparent={true} visible={modal2Visible} onRequestClose={closeModal2}>
                            <View style={styles.modalOverlay}>
                                <View style={styles.modalContainer}>
                                    {loading ? (
                                        <ActivityIndicator size="large" color="#087515" />
                                    ) : paymentSuccess ? (
                                        <>
                                            <Image source={require('./assets/images/correct.png')} style={{ width: 80, height: 80, objectFit: 'cover' }} />
                                            <Text style={{ fontSize: 22, fontWeight: '500', color: '#168a0a', marginVertical: 20 }}>Payment Successful!</Text>

                                            {reservationType === 'booked' ? (
                                                <Text style={{ fontSize: 18, fontWeight: '500', color: '#4b4b4b', marginBottom: 10 }}>
                                                    Your slot {selectedSlot?.slot_num} has been booked.
                                                </Text>
                                            ) : (
                                                <Text style={{ fontSize: 18, fontWeight: '500', color: '#4b4b4b', marginBottom: 10 }}>
                                                    Your slot {selectedSlot?.slot_num} is ready to park.
                                                </Text>
                                            )}
                                        </>
                                    ) : null}
                                    <Ionicons name="close" size={28} color="black" style={{ position: 'absolute', top: 0, right: 0, padding: 8 }} onPress={closeModal2} />
                                </View>
                            </View>
                        </Modal>

                    </View>
                </View>
                <View style={{ width: 300, height: 200, position: 'absolute', top: 50, left: 10, zIndex: -1 }}>
                    <Image source={require('./assets/images/parking_img_first_page.png')} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.18, }} />
                </View>
                <View style={{ width: 300, height: 300, position: 'absolute', bottom: 50, right: 0, zIndex: -1 }}>
                    <Image source={require('./assets/images/reserve-parking-icon.png')} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.18, }} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container1: {
        width: '100%',
        flex: 1,
    },
    mainView1: {
        flex: 10,
    },
    card: {
        backgroundColor: '#329130',
        flex: 1,
        marginHorizontal: 8,
        marginVertical: 2,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    row: {
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    free: {
        backgroundColor: '#4CAF50',
    },
    pendingBook: {
        backgroundColor: '#d1cf43',
    },
    slotText: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    statusText: {
        fontSize: 18,
        color: '#FFFFFF',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '90%',
        position: 'relative',
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    bookNowBtn: {
        marginTop: 10,
        backgroundColor: '#FF5733',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    parkNowBtn: {
        marginTop: 10,
        backgroundColor: '#0b6fb3',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    modalDsc1: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 5,
    },
    modalDetailsTitle1: {
        fontSize: 20,
        fontWeight: '500',
        color: '#5b5b5b',
    },
});
