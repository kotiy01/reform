import {
    StyleSheet,
    View,
    Text,
    Pressable,
    ImageBackground,
  } from "react-native";
  import React, { Component } from "react";
  import constStr from "../../strings";
  
  export default class treding extends Component {
    render() {
      return (
        <ImageBackground
          source={require("../assets/bgImg.jpg")}
          style={{
            backgroundColor: "#fc0",
            width: "100%", // applied to Image
            height: "100%",
          }}
          imageStyle={{
            resizeMode: "cover", // works only here!
          }}
        >
          <View>
            <View style={styles.mainContainer}>
              <Text style={styles.titleText}>{constStr.title_hello}</Text>
  
              <Pressable
                style={styles.mainButton}
                android_ripple={{ color: "grey" }}
              >
                <Text style={styles.buttonText}>{constStr.title_practice}</Text>
              </Pressable>
  
              <Pressable
                style={styles.mainButton}
                android_ripple={{ color: "grey" }}
              >
                <Text style={styles.buttonText}>{constStr.title_dialog}</Text>
              </Pressable>
  
              <Pressable
                style={styles.mainButton}
                android_ripple={{ color: "grey" }}
              >
                <Text style={styles.buttonText}>{constStr.title_music}</Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      );
    }
  }
  
  const styles = StyleSheet.create({
    mainContainer: {
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      height: "100%",
    },
    bottomBarContainer: {
      backgroundColor: "#e0e0e0",
      alignItems: "center",
      justifyContent: "center",
      width: "94%",
      height: 50,
      borderRadius: 150,
      position: "absolute",
      bottom: 0,
      margin: 12,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 30,
    },
    titleText: {
      fontSize: 32,
      fontWeight: "500",
      color: "#358f",
      maxWidth: 220,
      textAlign: "left",
      position: "absolute",
      top: "12%",
    },
    mainButton: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 16,
      borderRadius: 8,
      elevation: 3,
      backgroundColor: "#f9faff",
      width: "70%",
      marginTop: 40,
    },
    buttonText: {
      fontSize: 22,
      lineHeight: 21,
      fontWeight: "bold",
      color: "#358f",
    },
    icon: {
      padding: 12,
    },
  });