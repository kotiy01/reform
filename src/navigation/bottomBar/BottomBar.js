import React, { useState } from "react";
import {
  Linking,
  TouchableOpacity,
  View,
  Modal,
  Text,
  Pressable,
} from "react-native";
import { CurvedBottomBar } from "react-native-curved-bottom-bar";
import { scale } from "react-native-size-scaling";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "../../screens/home";
import SettingScreen from "../../screens/setting";
import SearchScreen from "../../screens/search";
import ProfileScreen from "../../screens/profile";
import TredingScreen from "../../screens/treding";
import { useRoute } from "@react-navigation/native";
import { styles } from "./styles";

export const tabBar = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedModalTab, setselectedModalTab] = useState(0);
  const [ArrayModalMenu, setArrayModalMenu] = useState([
    { icon_name: "code-slash-outline" },
    { icon_name: "color-fill-outline" },
    { icon_name: "color-filter-outline" },
    { icon_name: "color-palette-outline" },
  ]);
  const route = useRoute();
  const _renderIcon = (routeName, selectedTab) => {
    let icon = "";

    switch (routeName) {
      case "title1":
        icon = "ios-list";
        break;
      case "title2":
        icon = "analytics";
        break;
      case "title5":
        icon = "shield-checkmark-outline";
        break;
      case "title4":
        icon = "person";
        break;
    }

    return (
      <Ionicons
        name={icon}
        size={scale(25)}
        color={routeName === selectedTab ? "black" : "black"}
      />
    );
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  const linkChanelYoutube = () => {
    setModalVisible(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderWidth: 0,
                width: "100%",
                height: "100%",
                alignItems: "center",
              }}
            >
              {ArrayModalMenu.map((item, index) => {
                return (
                  <TouchableOpacity onPress={() => setselectedModalTab(index)}>
                    <Ionicons
                      name={item?.icon_name}
                      color={index === selectedModalTab ? "skyblue" : "gray"}
                      size={scale(25)}
                    />

                    <View
                      style={{
                        marginTop: 5,
                        borderWidth: 1,
                        height: 0.4,
                        width: "100%",
                        backgroundColor:
                          index === selectedModalTab ? "skyblue" : "white",
                        borderColor:
                          index === selectedModalTab ? "skyblue" : "white",
                      }}
                    ></View>
                  </TouchableOpacity>
                );
              })}
            </View>

            <View
              style={{
                borderWidth: 0.4,
                height: 0.4,
                width: "100%",
                backgroundColor: "skyblue",
                borderColor: "skyblue",
              }}
            ></View>
            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={{ marginTop: 10 }}
            >
              <Text style={{ color: "gray" }}>Close Accounts</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <CurvedBottomBar.Navigator
        style={styles.bottomBar}
        strokeWidth={2}
        strokeColor={"#DDDDDD"}
        height={60}
        circleWidth={60}
        bgColor="#59968e"
        initialRouteName="title1"
        borderTopLeftRight
        renderCircle={() => (
          <TouchableOpacity
            style={styles.btnCircle}
            onPress={linkChanelYoutube}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
              }}
            >
              <Ionicons name={"home"} color="black" size={scale(25)} />
            </View>
          </TouchableOpacity>
        )}
        tabBar={renderTabBar}
      >
        <CurvedBottomBar.Screen
          options={{ headerShown: false }}
          name="title1"
          position="LEFT"
          component={() => <TredingScreen />}
        />
        <CurvedBottomBar.Screen
          options={{ headerShown: false }}
          name="title4"
          component={() => <ProfileScreen />}
          position="RIGHT"
        />
      </CurvedBottomBar.Navigator>
    </View>
  );
};