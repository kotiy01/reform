import {
    Text,
    View,
    SafeAreaView,
    ImageBackground,
    TouchableOpacity,
  } from "react-native";
  import React, { Component } from "react";
  import Icon from "react-native-vector-icons/Ionicons";
  
  export default class profile extends Component {
    render() {
      return (
        <ImageBackground
          source={require("../assets/bgImg.jpg")}
          style={{
            width: "100%", // applied to Image
            height: "100%",
          }}
          imageStyle={{
            resizeMode: "cover", // works only here!
          }}
        >
          <TouchableOpacity>
            {/* onPress={() => navigation.navigate('Settings')} */}
            <Icon
              name="settings-outline"
              size={40}
              color="#8cbae5"
              style={{
                alignSelf: "flex-end",
                margin: 12,
              }}
            />
          </TouchableOpacity>
        </ImageBackground>
      );
    }
  }