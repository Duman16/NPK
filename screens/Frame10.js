import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, Padding, Border, FontSize } from "../GlobalStyles";

const Frame10 = () => {
  return (
    <View style={styles.view}>
      <View style={[styles.homeIndicator, styles.homePosition]}>
        <View style={[styles.homeIndicator1, styles.homePosition]} />
      </View>
      <View style={[styles.header, styles.headerLayout]}>
        <Image
          style={styles.profileImageIcon}
          contentFit="cover"
          source={require("../assets/profile-image.png")}
        />
        <Text style={[styles.text, styles.textTypo3]}>Главная страница</Text>
      </View>
      <View style={[styles.devicedeviceFrameComponents, styles.headerLayout]}>
        <Text style={styles.time}>9:30</Text>
        <Image
          style={styles.rightIcons}
          contentFit="cover"
          source={require("../assets/right-icons.png")}
        />
        <Image
          style={[styles.cameraCutoutIcon, styles.homePosition]}
          contentFit="cover"
          source={require("../assets/camera-cutout.png")}
        />
      </View>
      <View style={styles.tabs}>
        <View style={[styles.pill, styles.pillFlexBox]}>
          <Text style={[styles.text1, styles.textTypo1]}>Карта 1</Text>
          <Text style={[styles.text2, styles.textTypo]}>*0584</Text>
        </View>
      </View>
      <View style={[styles.pill1, styles.pillFlexBox]}>
        <Text style={[styles.text3, styles.textTypo1]}>Карта 2</Text>
        <Text style={[styles.text4, styles.textTypo]}>*2225</Text>
      </View>
      <View style={[styles.pill2, styles.pillFlexBox]}>
        <Text style={[styles.text5, styles.textTypo1]}>Открыть карту</Text>
      </View>
      <View style={[styles.pill3, styles.pillFlexBox]}>
        <Text style={[styles.text6, styles.textTypo1]}>Депозит</Text>
      </View>
      <View style={[styles.child, styles.itemBorder]} />
      <View style={[styles.item, styles.itemBorder]} />
      <View style={[styles.stats, styles.pill1Position]}>
        <View style={styles.card}>
          <Text style={[styles.text7, styles.textTypo2]}>Карта 1 *0584</Text>
          <Text style={[styles.text8, styles.textSpaceBlock]}>45,678.90 ₸</Text>
        </View>
        <View style={[styles.card1, styles.cardBorder]}>
          <Text style={[styles.text7, styles.textTypo2]}>Депозит</Text>
          <Text style={[styles.text8, styles.textSpaceBlock]}>2,405 ₸</Text>
          <Text style={[styles.text11, styles.textSpaceBlock]}>
            +33% за прошлый месяц
          </Text>
        </View>
        <View style={[styles.card2, styles.cardBorder]}>
          <Text style={[styles.text7, styles.textTypo2]}>Карта 2 *2225</Text>
          <Text style={[styles.text8, styles.textSpaceBlock]}>10,353 ₸</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homePosition: {
    left: "50%",
    position: "absolute",
  },
  headerLayout: {
    height: 52,
    position: "absolute",
  },
  textTypo3: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorBlack,
  },
  pillFlexBox: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_sm,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_xl,
    height: 45,
    width: 345,
    flexDirection: "row",
  },
  textTypo1: {
    fontFamily: FontFamily.smallText,
    fontWeight: "500",
  },
  textTypo: {
    height: 25,
    width: 75,
    display: "flex",
    color: Color.colorGray_300,
    fontFamily: FontFamily.smallText,
    lineHeight: 20,
    alignItems: "center",
    zIndex: 1,
    textAlign: "left",
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    top: 10,
    position: "absolute",
  },
  itemBorder: {
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  pill1Position: {
    left: 28,
    position: "absolute",
  },
  textTypo2: {
    lineHeight: 20,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  textSpaceBlock: {
    marginTop: 8,
    textAlign: "left",
  },
  cardBorder: {
    marginLeft: 12,
    padding: Padding.p_base,
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  homeIndicator1: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorBlack,
    width: 134,
    height: 5,
  },
  homeIndicator: {
    marginLeft: -188,
    bottom: 0,
    width: 375,
    height: 34,
  },
  profileImageIcon: {
    top: 11,
    left: 344,
    width: 40,
    height: 40,
    position: "absolute",
  },
  text: {
    marginLeft: -175,
    fontSize: FontSize.size_xl,
    letterSpacing: -0.4,
    lineHeight: 28,
    textAlign: "center",
    color: Color.colorBlack,
    top: 10,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  header: {
    top: 72,
    left: 0,
    width: 412,
  },
  time: {
    letterSpacing: 0.1,
    lineHeight: 20,
    fontFamily: FontFamily.robotoMedium,
    color: Color.m3RefNeutralNeutral10,
    zIndex: 0,
    textAlign: "left",
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  rightIcons: {
    width: 46,
    height: 17,
    zIndex: 1,
  },
  cameraCutoutIcon: {
    marginLeft: -11.5,
    top: 18,
    width: 24,
    height: 24,
    zIndex: 2,
  },
  devicedeviceFrameComponents: {
    top: -4,
    right: -15,
    left: 4,
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
  },
  text1: {
    top: 13,
    left: 147,
    lineHeight: 20,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    zIndex: 0,
    color: Color.colorBlack,
    position: "absolute",
  },
  text2: {
    left: 284,
  },
  pill: {
    backgroundColor: Color.colorWhitesmoke_100,
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_sm,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_xl,
  },
  tabs: {
    top: 348,
    height: 45,
    width: 345,
    left: 28,
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  text3: {
    lineHeight: 20,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    zIndex: 0,
    color: Color.colorBlack,
  },
  text4: {
    left: 279,
  },
  pill1: {
    top: 479,
    backgroundColor: Color.colorWhitesmoke_100,
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_sm,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_xl,
    left: 28,
    position: "absolute",
  },
  text5: {
    color: Color.colorWhite,
    lineHeight: 20,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  pill2: {
    top: 543,
    backgroundColor: Color.colorSienna,
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_sm,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_xl,
    left: 28,
    position: "absolute",
  },
  text6: {
    lineHeight: 20,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
  },
  pill3: {
    left: 18,
    top: 411,
    backgroundColor: Color.colorWhitesmoke_100,
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_sm,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  child: {
    borderRightWidth: 1,
    width: 1,
    height: 16,
    top: 411,
    left: 284,
  },
  item: {
    top: 419,
    left: 277,
    borderTopWidth: 1,
    width: 16,
    height: 1,
  },
  text7: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  text8: {
    fontSize: FontSize.size_9xl,
    letterSpacing: -0.6,
    lineHeight: 34,
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  card: {
    width: 186,
    padding: Padding.p_base,
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderRadius: Border.br_5xs,
    height: 120,
    borderStyle: "solid",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  text11: {
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    color: Color.colorGray_400,
    fontFamily: FontFamily.smallText,
    fontWeight: "500",
  },
  card1: {
    width: 173,
  },
  card2: {
    height: 120,
    marginLeft: 12,
  },
  stats: {
    top: 181,
    flexDirection: "row",
  },
  view: {
    borderRadius: Border.br_lg,
    flex: 1,
    width: "100%",
    height: 892,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Frame10;
