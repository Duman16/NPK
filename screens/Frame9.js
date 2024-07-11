import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, Padding, FontSize } from "../GlobalStyles";

const Frame9 = () => {
  const handleButtonPress = (buttonName) => {
    console.log(`${buttonName} button pressed`);
  };

  return (
    <View style={[styles.view, styles.viewBg]}>
      <View style={styles.header} />
      <View style={[styles.stats, styles.cardLayout]}>
        <View style={[styles.card, styles.cardLayout]}>
          <View style={styles.cardChild} />
          <Text style={[styles.text, styles.textTypo]}>2,405 ₸</Text>
          <Text style={[styles.text1, styles.textTypo]}>Доступно</Text>
          <Text style={[styles.text2, styles.textTypo]}>Депозит</Text>
          <TouchableOpacity
            style={[styles.frame, styles.frameFlexBox]}
            onPress={() => handleButtonPress("Пополнить депозит")}
          >
            <Text style={[styles.text3, styles.timeTypo]}>Пополнить депозит</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.frame1, styles.frameFlexBox]}
            onPress={() => handleButtonPress("Посмотреть выписку")}
          >
            <Text style={[styles.text3, styles.timeTypo]}>Посмотреть выписку</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.frame2, styles.frameFlexBox]}
            onPress={() => handleButtonPress("Перевести на карту")}
          >
            <Text style={[styles.text3, styles.timeTypo]}>Перевести на карту</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.frame3, styles.frameFlexBox]}
            onPress={() => handleButtonPress("Поменять валюту")}
          >
            <Text style={[styles.text3, styles.timeTypo]}>Поменять валюту</Text>
          </TouchableOpacity>
          <Image
            style={styles.profileImageIcon}
            contentFit="cover"
            source={require("../assets/profile-image.png")}
          />
        </View>
        <View style={styles.homeIndicator}>
          <View style={styles.homeIndicator1} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewBg: {
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_lg,
  },
  statsFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  timeTypo: {
    textAlign: "left",
    fontWeight: "500",
  },
  cardLayout: {
    height: 1046,
    width: 388,
  },
  textTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: 34,
    textAlign: "left",
    position: "absolute",
  },
  frameFlexBox: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    width: 362,
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_5xs,
    left: 13,
    height: 40,
    flexDirection: "row",
    position: "absolute",
  },
  header: {
    left: 2,
    width: 412,
    height: 52,
    top: 56,
    position: "absolute",
  },
  cardChild: {
    backgroundColor: Color.colorSienna,
    width: 363,
    height: 219,
    zIndex: 0,
    borderRadius: Border.br_lg,
  },
  text: {
    top: 158,
    letterSpacing: -0.6,
    lineHeight: 34,
    color: Color.colorWhite,
    fontSize: FontSize.size_9xl,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: 34,
    zIndex: 1,
  },
  text1: {
    top: 139,
    letterSpacing: -0.3,
    lineHeight: 17,
    color: Color.colorDarkgray_200,
    width: 190,
    height: 13,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: 34,
    zIndex: 2,
    fontSize: FontSize.size_sm,
  },
  text2: {
    top: 45,
    lineHeight: 39,
    color: Color.colorGray_100,
    width: 221,
    height: 38,
    zIndex: 3,
    fontSize: FontSize.size_9xl,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: 34,
  },
  text3: {
    fontSize: FontSize.smallText_size,
    lineHeight: 24,
    fontFamily: FontFamily.smallText,
    color: Color.colorBlack,
  },
  frame: {
    top: 319,
    zIndex: 4,
  },
  frame1: {
    top: 481,
    zIndex: 5,
  },
  frame2: {
    top: 427,
    zIndex: 6,
  },
  frame3: {
    top: 373,
    zIndex: 7,
  },
  profileImageIcon: {
    top: 28,
    left: 327,
    width: 40,
    zIndex: 8,
    height: 40,
    position: "absolute",
  },
  card: {
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    padding: Padding.p_base,
    zIndex: 0,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_lg,
  },
  homeIndicator1: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorBlack,
    width: 134,
    height: 5,
    left: "50%",
    position: "absolute",
  },
  homeIndicator: {
    top: 813,
    left: 6,
    width: 375,
    height: 34,
    zIndex: 1,
    position: "absolute",
  },
  stats: {
    left: 10,
    flexDirection: "row",
    position: "absolute",
    top: 56,
  },
  view: {
    flex: 1,
    width: "100%",
    height: 892,
  },
});

export default Frame9;
