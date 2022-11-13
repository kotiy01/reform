import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, Switch, TouchableOpacity } from "react-native";


const Settings = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={styles.mainContainer}>
            <ImageBackground source={require('../img/bgImg.jpg')} resizeMode="cover" style={styles.bgImg} onPress={()=>navigation.navigate("Settings")}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTitle}>Настройки</Text>
                    <TouchableOpacity style={styles.headerBtn} onPress={()=>navigation.navigate("Account")}>
                        <Text style={styles.headerBtnText}>Готово</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.contentBlock}>
                    <Text style={styles.contentTitle}>Уведомления</Text>
                    <View style={styles.settingRow}>
                        <Text style={styles.settingText}>Что-то</Text>
                        <Switch style={styles.settingSwitch}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        />
                    </View>
                    <View style={styles.settingRow}>
                        <Text style={styles.settingText}>Что-то</Text>
                        <Switch style={styles.settingSwitch}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        />
                    </View>
                    <View style={styles.settingRow}>
                        <Text style={styles.settingText}>Что-то</Text>
                        <Switch style={styles.settingSwitch}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        />
                    </View>
                </View>
                <View style={styles.contentBlock}>
                    <Text style={styles.contentTitle}>Что-то еще</Text>
                    <View style={styles.settingRow}>
                        <Text style={styles.settingText}>Что-то</Text>
                        <Switch style={styles.settingSwitch}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        />
                    </View>
                    <View style={styles.settingRow}>
                        <Text style={styles.settingText}>Что-то</Text>
                        <Switch style={styles.settingSwitch}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Settings

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
    headerContainer: {
        width: '80%',
        height: 108,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    headerTitle: {
        color: '#000000',
        fontSize: 32,
        fontWeight: '700',
    },
    headerBtnText: {
        color: 'rgba(59, 58, 147, 0.56)',
        fontSize: 24,
        fontWeight: '400',
    },
    contentBlock: {
        width: '80%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    contentTitle: {
        color: '#000000',
        fontSize: 32,
        fontWeight: '500',
        marginBottom: 10,
    },
    settingRow: {
        width: '100%',
        height: 52,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    settingText: {
        color: '#000000',
        fontSize: 24,
        fontWeight: '400',
    },

})