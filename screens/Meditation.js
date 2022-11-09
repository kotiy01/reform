import React from "react";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, ScrollView } from "react-native";

const Meditation = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <ImageBackground source={require('../img/bgImg.jpg')} resizeMode="cover" style={styles.bgImg}>
                <View style={styles.iconsBlock}>
                    <TouchableOpacity style={styles.btnBlock}>
                        <View style={styles.iconBlock}>
                            <Image source={require('../img/icon_meditation.png')} style={styles.iconImg}>
                            </Image>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnBlock}>
                        <View style={styles.iconBlock}>
                            <Image source={require('../img/icon_breath.png')} style={styles.iconImg}>
                            </Image>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.contentBlock}>
                    <View style={styles.contentItem}>
                        <View style={styles.timeBlock}>
                            <Text style={styles.timeText}>4 мин</Text>
                        </View>
                        <View style={styles.descBlock}>
                            <Text style={styles.descText}>Полет к звездам</Text>
                            <Image source={require('../img/icon_fly.png')} style={styles.descIcon}></Image>
                        </View>
                    </View>
                    <View style={styles.contentItem}>
                        <View style={styles.timeBlock}>
                            <Text style={styles.timeText}>4 мин</Text>
                        </View>
                        <View style={styles.descBlock}>
                            <Text style={styles.descText}>Полет к звездам</Text>
                            <Image source={require('../img/icon_fly.png')} style={styles.descIcon}></Image>
                        </View>
                    </View>
                    <View style={styles.contentItem}>
                        <View style={styles.timeBlock}>
                            <Text style={styles.timeText}>4 мин</Text>
                        </View>
                        <View style={styles.descBlock}>
                            <Text style={styles.descText}>Полет к звездам</Text>
                            <Image source={require('../img/icon_fly.png')} style={styles.descIcon}></Image>
                        </View>
                    </View>
                    <View style={styles.contentItem}>
                        <View style={styles.timeBlock}>
                            <Text style={styles.timeText}>4 мин</Text>
                        </View>
                        <View style={styles.descBlock}>
                            <Text style={styles.descText}>Полет к звездам</Text>
                            <Image source={require('../img/icon_fly.png')} style={styles.descIcon}></Image>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Meditation

const styles = StyleSheet.create ({
    mainContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      },
    bgImg: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
    },
    iconsBlock: {
        width: '80%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: '10%',
        marginBottom: '10%',
    },
    iconBlock: {
        backgroundColor: '#767CC8',
        borderRadius: 10,
        width: 115,
        height: 110,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconImg: {
        width: 80,
        resizeMode: 'contain',
    },
    contentBlock: {
        width: '80%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentItem: {
        width: '100%',
        height: 109,
        backgroundColor: '#767CC8',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        marginBottom: 24,
    },
    timeBlock: {
        width: 69,
        height: 21,
        backgroundColor: '#FFFFFF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginBottom: '10%',
    },
    timeText: {
        color: '#00000',
        fontSize: 12,
        fontWeight: 'bold',
    },
    descBlock: {
        width: '80%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: '5%',
    },
    descText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    descIcon: {
        alignSelf: 'flex-end',
    }
})