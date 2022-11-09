import React from "react";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from "react-native";

const Practics = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <ImageBackground source={require('../img/bgImg.jpg')} resizeMode="cover" style={styles.bgImg}>
                <Text style={styles.mainText}>Выберите {'\n'} практику</Text>
                <View style={styles.btnsBlock}>
                    <TouchableOpacity style={styles.btnBlock} onPress={()=>navigation.navigate("Breath")}>
                        <View style={styles.iconBlock}>
                            <Image source={require('../img/icon_breath.png')} style={styles.iconImg}>
                            </Image>
                        </View>
                        <Text style={styles.btnText}>Дыхание</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnBlock} onPress={()=>navigation.navigate("Meditation")}>
                        <View style={styles.iconBlock}>
                            <Image source={require('../img/icon_meditation.png')} style={styles.iconImg}>
                            </Image>
                        </View>
                        <Text style={styles.btnText}>Медитация</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Practics

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
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
      },
      mainText: {
        fontSize: 36,
        fontWeight: '600',
        color: '#000000',
        marginTop: '10%',
      },
      btnsBlock: {
        width: '70%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: '50%',
      },
      btnBlock: {
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      },
      iconBlock: {
        backgroundColor: '#9496D8',
        borderRadius: 20,
        width: 112,
        height: 112,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      iconImg: {
        width: 80,
        resizeMode: 'contain',
      },
      btnText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
        marginTop: 8,
        letterSpacing: 1,
      },
})