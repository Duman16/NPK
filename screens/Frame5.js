import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, Padding, FontSize } from "../GlobalStyles";

const Frame5 = () => {
  return (
    <View style={[styles.view, styles.viewBg]}>
      <View style={styles.header} />
      <View style={styles.devicedeviceFrameComponents}>
        <Text style={styles.time}>9:30</Text>
        <Image
          style={styles.rightIcons}
          contentFit="cover"
          source={require("../assets/right-icons.png")}
        />
        <Image
          style={styles.cameraCutoutIcon}
          contentFit="cover"
          source={require("../assets/camera-cutout.png")}
        />
      </View>
      <View style={[styles.stats, styles.statsLayout]}>
        <View style={[styles.card, styles.statsLayout]}>
          <View style={styles.cardChild} />
          <Text style={styles.text}>45,678.90 ₸</Text>
          <Text style={[styles.text1, styles.textTypo1]}>Доступно</Text>
          <Text style={[styles.text2, styles.textTypo1]}>Карта 1 *0584</Text>
          <View style={[styles.frame, styles.frameFlexBox2]}>
            <Text style={styles.textTypo}>Посмотреть выписку</Text>
          </View>
          <View style={[styles.frame1, styles.frameFlexBox1]}>
            <Text style={styles.textTypo}>Пополнить карту</Text>
          </View>
          <View style={[styles.frame2, styles.frameFlexBox]}>
            <Text style={styles.textTypo}>Отслеживание кредитов</Text>
          </View>
          <View style={[styles.frame3, styles.frameFlexBox2]}>
            <Text style={styles.textTypo}>Отслеживание долгов</Text>
          </View>
          <View style={[styles.frame4, styles.frameFlexBox2]}>
            <Text style={styles.textTypo}>Заблокировать карту</Text>
          </View>
          <View style={[styles.frame5, styles.frameFlexBox2]}>
            <Text style={styles.textTypo}>Сменить ПИН- код</Text>
          </View>
          <View style={[styles.frame6, styles.frameFlexBox2]}>
            <Text style={styles.textTypo}>Поменять валюту</Text>
          </View>
          <View style={[styles.frame7, styles.frameFlexBox2]}>
            <Text style={styles.textTypo}>Оплаты в интернете</Text>
          </View>
          <Image
            style={[styles.profileImageIcon, styles.profileIconPosition]}
            contentFit="cover"
            source={require("../assets/profile-image.png")}
          />
        </View>
        <View style={styles.homeIndicator}>
          <View style={styles.homeIndicator1} />
        </View>
      </View>
      <View style={[styles.stats1, styles.statsLayout]}>
        <View style={[styles.card, styles.statsLayout]}>
          <View style={styles.cardChild} />
          <Text style={styles.text}>45,678.90 ₸</Text>
          <Text style={[styles.text1, styles.textTypo1]}>Доступно</Text>
          <Text style={[styles.text2, styles.textTypo1]}>Карта 1 *0584</Text>
          <Image
            style={[styles.profileImageIcon1, styles.profileIconPosition]}
            contentFit="cover"
            source={require("../assets/profile-image.png")}
          />
          <View style={[styles.frame8, styles.frame8Position]}>
            <Text style={styles.textTypo}>Реквезиты карты</Text>
          </View>
          <View style={[styles.frame9, styles.frameFlexBox]}>
            <Text style={[styles.text15, styles.textTypo]}>
              Лимит на покупки
            </Text>
          </View>
          <View style={[styles.buttonSecondary, styles.buttonShadowBox]}>
            <Text style={styles.textTypo}>{`Изменить лимит `}</Text>
          </View>
          <View style={[styles.buttonSecondary1, styles.buttonShadowBox]}>
            <Text style={styles.text17}>Закрыть доступ</Text>
          </View>
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
  statsLayout: {
    height: 1046,
    width: 388,
  },
  textTypo1: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: 34,
    textAlign: "left",
    position: "absolute",
  },
  frameFlexBox2: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_5xs,
    height: 40,
    width: 362,
    backgroundColor: Color.colorWhitesmoke_200,
    left: 13,
    flexDirection: "row",
    position: "absolute",
  },
  frameFlexBox1: {
    zIndex: 5,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 362,
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    position: "absolute",
  },
  frameFlexBox: {
    zIndex: 6,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    position: "absolute",
  },
  profileIconPosition: {
    width: 40,
    left: 327,
    top: 28,
    height: 40,
    position: "absolute",
  },
  frame8Position: {
    left: 17,
    backgroundColor: Color.colorWhitesmoke_200,
  },
  textTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.smallText,
    lineHeight: 24,
    fontSize: FontSize.smallText_size,
    textAlign: "left",
    fontWeight: "500",
  },
  buttonShadowBox: {
    paddingVertical: Padding.p_sm,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    justifyContent: "center",
    alignItems: "center",
    width: 362,
    borderRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_5xl,
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
    left: "50%",
    position: "absolute",
  },
  devicedeviceFrameComponents: {
    top: -4,
    right: -15,
    left: 4,
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_5xl,
    flexDirection: "row",
    height: 52,
    position: "absolute",
  },
  cardChild: {
    height: 219,
    width: 363,
    backgroundColor: Color.colorSienna,
    zIndex: 0,
    borderRadius: Border.br_lg,
  },
  text: {
    top: 158,
    letterSpacing: -0.6,
    lineHeight: 34,
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_9xl,
    left: 34,
    zIndex: 1,
    textAlign: "left",
    position: "absolute",
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
  frame: {
    top: 319,
    zIndex: 4,
  },
  frame1: {
    top: 265,
    backgroundColor: Color.colorWhitesmoke_200,
    left: 13,
    zIndex: 5,
  },
  frame2: {
    top: 481,
    height: 40,
    width: 362,
    zIndex: 6,
    left: 13,
  },
  frame3: {
    top: 535,
    zIndex: 7,
  },
  frame4: {
    top: 589,
    zIndex: 8,
  },
  frame5: {
    top: 643,
    zIndex: 9,
  },
  frame6: {
    top: 427,
    zIndex: 10,
  },
  frame7: {
    top: 373,
    zIndex: 11,
  },
  profileImageIcon: {
    zIndex: 12,
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
    width: 388,
    position: "absolute",
    top: 56,
  },
  profileImageIcon1: {
    zIndex: 4,
  },
  frame8: {
    top: 291,
    zIndex: 5,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 362,
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    position: "absolute",
  },
  text15: {
    top: 0,
    left: 110,
    zIndex: 0,
    position: "absolute",
  },
  frame9: {
    top: 342,
    left: 15,
    height: 241,
    width: 363,
  },
  buttonSecondary: {
    top: 593,
    left: 17,
    backgroundColor: Color.colorWhitesmoke_200,
    zIndex: 7,
  },
  text17: {
    fontFamily: FontFamily.smallText,
    lineHeight: 24,
    fontSize: FontSize.smallText_size,
    color: Color.colorWhite,
    textAlign: "left",
    fontWeight: "500",
  },
  buttonSecondary1: {
    top: 654,
    left: 16,
    zIndex: 8,
    backgroundColor: Color.colorSienna,
  },
  stats1: {
    top: 46,
    left: 12,
    flexDirection: "row",
    width: 388,
    position: "absolute",
  },
  view: {
    flex: 1,
    width: "100%",
    height: 892,
  },
});

export default Frame5;
