import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const Frame1 = () => {
  return (
    <View style={styles.view}>
      <View style={styles.devicedeviceFrameComponents}>
        <Text style={[styles.time, styles.timeTypo]}>9:30</Text>
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
      <View style={styles.frameParent}>
        <View style={[styles.parent, styles.parentFlexBox]}>
          <Text style={styles.text}>Создание аккаунта</Text>
          <Text style={[styles.tulenus, styles.text11Typo]} />
        </View>
        <View style={styles.groupParent}>
          <View style={[styles.rectangleParent, styles.groupChildLayout]}>
            <View style={[styles.groupChild, styles.groupChildLayout]} />
            <Text style={[styles.text1, styles.textTypo1]}>Артём Климов</Text>
          </View>
          <Text style={styles.text2}>Имя</Text>
        </View>
        <View style={styles.groupParent}>
          <View style={[styles.rectangleParent, styles.groupChildLayout]}>
            <View style={[styles.groupChild, styles.groupChildLayout]} />
            <Text style={[styles.text1, styles.textTypo1]}>
              Example@gmail.com
            </Text>
          </View>
          <Text style={styles.text2}>Почта</Text>
        </View>
        <View style={styles.groupParent}>
          <View style={[styles.rectangleParent, styles.groupChildLayout]}>
            <View style={[styles.groupChild, styles.groupChildLayout]} />
            <Text style={[styles.text1, styles.textTypo1]}>
              +7 777 777 7777
            </Text>
          </View>
          <Text style={[styles.text5, styles.textTypo]}>Телефон</Text>
        </View>
        <View style={styles.groupParent}>
          <View style={[styles.rectangleParent, styles.groupChildLayout]}>
            <View style={[styles.groupChild, styles.groupChildLayout]} />
            <Text style={[styles.text1, styles.textTypo1]}>************</Text>
          </View>
          <Text style={[styles.text7, styles.textTypo]}>Пароль</Text>
        </View>
        <View style={[styles.frameView, styles.parentFlexBox]}>
          <View style={styles.instanceChild} />
          <Text style={styles.text8}>
            Согласие на обработку персональных данных
          </Text>
        </View>
        <View style={[styles.wrapper, styles.parentFlexBox]}>
          <Text style={[styles.text9, styles.timeTypo]}>
            Зарегистрироваться
          </Text>
        </View>
        <View style={[styles.instanceParent, styles.parentFlexBox]}>
          <Image
            style={styles.frameLayout}
            contentFit="cover"
            source={require("../assets/line-30.png")}
          />
          <Text style={[styles.text10, styles.textTypo1]}>Или</Text>
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/line-301.png")}
          />
        </View>
        <View style={[styles.instanceParent, styles.parentFlexBox]}>
          <Image
            style={styles.frameInner}
            contentFit="cover"
            source={require("../assets/group-1281.png")}
          />
          <View style={[styles.instanceWrapper, styles.instanceLayout]}>
            <Image
              style={styles.groupIcon}
              contentFit="cover"
              source={require("../assets/group-126.png")}
            />
          </View>
          <View style={styles.instanceLayout}>
            <Image
              style={styles.frameChild1}
              contentFit="cover"
              source={require("../assets/group-192.png")}
            />
          </View>
        </View>
        <Text style={[styles.text11, styles.text11Typo]}>
          Возникли проблемы?
        </Text>
      </View>
      <View style={[styles.homeIndicator, styles.homePosition]}>
        <View style={[styles.homeIndicator1, styles.homePosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timeTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  homePosition: {
    left: "50%",
    position: "absolute",
  },
  parentFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  text11Typo: {
    textAlign: "center",
    color: Color.color,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
  },
  groupChildLayout: {
    height: 40,
    width: 361,
    left: 0,
    position: "absolute",
  },
  textTypo1: {
    color: Color.color,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  textTypo: {
    height: 12,
    fontSize: FontSize.size_mid,
    left: 4,
    color: Color.colorBlack,
    lineHeight: 22,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  frameLayout: {
    opacity: 0.6,
    width: 124,
    maxHeight: "100%",
  },
  instanceLayout: {
    marginLeft: 24,
    padding: 8,
    height: 45,
    width: 45,
    borderWidth: 1.5,
    borderColor: Color.colorGray_200,
    borderRadius: 36,
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
  },
  time: {
    fontSize: FontSize.size_sm,
    letterSpacing: 0.1,
    lineHeight: 20,
    color: Color.m3RefNeutralNeutral10,
    zIndex: 0,
  },
  rightIcons: {
    width: 46,
    height: 17,
    zIndex: 1,
  },
  cameraCutoutIcon: {
    marginLeft: -12,
    top: 18,
    width: 24,
    height: 24,
    zIndex: 2,
  },
  devicedeviceFrameComponents: {
    right: 0,
    height: 52,
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    left: 0,
    top: 0,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_11xl,
    color: Color.colorBlack,
    lineHeight: 22,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  tulenus: {
    width: 253,
    marginTop: 16,
  },
  parent: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base,
    width: 361,
  },
  groupChild: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.color1,
    top: 0,
    height: 40,
  },
  text1: {
    top: 16,
    left: 24,
    lineHeight: 16,
    position: "absolute",
    color: Color.color,
  },
  rectangleParent: {
    top: 24,
  },
  text2: {
    fontSize: FontSize.size_mid,
    left: 4,
    color: Color.colorBlack,
    lineHeight: 22,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  groupParent: {
    height: 64,
    marginTop: 24,
    width: 361,
  },
  text5: {
    width: 93,
  },
  text7: {
    width: 64,
  },
  instanceChild: {
    borderRadius: Border.br_7xs,
    borderColor: Color.colorBlack,
    borderWidth: 1.8,
    width: 20,
    height: 20,
    borderStyle: "solid",
  },
  text8: {
    width: 276,
    marginLeft: 16,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    color: Color.colorBlack,
    textAlign: "left",
  },
  frameView: {
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: 0,
    marginTop: 24,
    flexDirection: "row",
  },
  text9: {
    fontSize: FontSize.size_smi,
    color: Color.colorWhite,
    lineHeight: 16,
  },
  wrapper: {
    borderRadius: Border.br_58xl,
    backgroundColor: Color.colorSienna,
    borderColor: Color.color2,
    borderWidth: 0.5,
    padding: Padding.p_base,
    borderStyle: "solid",
    marginTop: 24,
    width: 361,
    flexDirection: "row",
  },
  text10: {
    marginLeft: 8,
  },
  frameItem: {
    marginLeft: 8,
  },
  instanceParent: {
    marginTop: 24,
    width: 361,
    flexDirection: "row",
  },
  frameInner: {
    width: 42,
    height: 42,
    display: "none",
  },
  groupIcon: {
    width: 25,
    height: 25,
    display: "none",
  },
  instanceWrapper: {
    display: "none",
    flexDirection: "row",
  },
  frameChild1: {
    width: 22,
    height: 14,
  },
  text11: {
    textDecoration: "underline",
    marginTop: 24,
    width: 361,
  },
  frameParent: {
    marginTop: -336,
    marginLeft: -179,
    top: "50%",
    justifyContent: "center",
    left: "50%",
    position: "absolute",
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
    marginLeft: -186,
    bottom: 0,
    width: 375,
    height: 34,
  },
  view: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 892,
    overflow: "hidden",
  },
});

export default Frame1;
