import React from "react";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from "react-native";
import { PracticsNav } from "../CustomNavigation";

const Home = ({navigation}) => {
    return (
        <View style={styles.mainContainer}>
            <ImageBackground source={require('../img/bgImg.jpg')} resizeMode="cover" style={styles.bgImg}>
                <View style={styles.viewText}>
                    <Text style={styles.mainText}>Добрый день{'\n'}USERNAME</Text>
                </View>
                <View style={styles.btnsBlock}>
                    <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("PracticsNav")}>
                        <Text style={styles.btnText}>Практика</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Диалог</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Музыка</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Home

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
      viewText: {
        width: '80%',
        display: 'flex',
        justifyContent: 'flex-start',
        marginTop: '10%',
      },
      mainText: {
        fontSize: 36,
        fontWeight: '600',
        color: '#000000',
      },
      btnsBlock: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: '10%',
      },
      btn: {
        width: 240,
        height: 56,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EAD0F7',
        borderRadius: 10,
        marginBottom: 50,
        shadowColor: '#B2A2ED',
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 4,
        elevation: 8,
      },
      btnText: {
        fontSize: 24,
        fontWeight: '600',
        color: '#000000',
      },
})