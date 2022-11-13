import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Account = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <ImageBackground source={require('../img/bgImg.jpg')} resizeMode="cover" style={styles.bgImg} onPress={()=>navigation.navigate("Settings")}>
                <View style={styles.settingsContainer}>
                    <TouchableOpacity style={styles.btnBlock} onPress={()=>navigation.navigate("Settings")}>
                        <Image source={require('../img/icon_settings.png')} style={styles.iconImg}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.profileContainer}>
                    <View style={styles.profileBlock}>
                        <Image source={require('../img/profile_photo.jpg')} style={styles.profileImg}></Image>
                        <Text style={styles.profileText}>Имя пользователя</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Account

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
    settingsContainer: {
        width: '80%',
        height: '10%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    profileContainer: {
        width: '90%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    profileBlock: {
        width: '100%',
        height: 100,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },
    profileImg: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    profileText: {
        fontSize: 24,
        fontWeight: '600',
        color: '#000000',
        marginLeft: '5%',
    },
})