import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Color, Border, FontFamily, Padding, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const Frame4 = () => {
  const navigation = useNavigation();

  const handleButtonPress = (buttonName) => {
    console.log(`${buttonName} button pressed`);
    // Добавьте здесь логику для каждой кнопки, если нужно
    switch (buttonName) {
      case "Пополнить наличными":
        navigation.navigate("Popolnit_nalichnimi");
        break;
      case "С карты другого банка":
        navigation.navigate("S_karti_drugogo_bank");
        break;
      case "По реквизитам":
        navigation.navigate("Po_rekvizitam");
        break;
      default:
        break;
    }
  };

  return (
    <View style={[styles.view, styles.viewBg]}>
      <View style={[styles.stats, styles.statsLayout]}>
        <View style={[styles.card, styles.statsLayout]}>
          <View style={styles.cardChild} />
          <Text style={[styles.text, styles.textTypo]}>45,678.90 ₸</Text>
          <Text style={[styles.text1, styles.textTypo]}>Доступно</Text>
          <Text style={[styles.text2, styles.textTypo]}>Карта 1 *0584</Text>
          <TouchableOpacity
            style={[styles.button, styles.framePosition2]}
            onPress={() => handleButtonPress("Пополнить наличными")}
          >
            <Text style={[styles.buttonText, styles.timeTypo]}>Пополнить наличными</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.framePosition1]}
            onPress={() => handleButtonPress("С карты другого банка")}
          >
            <Text style={[styles.buttonText, styles.timeTypo]}>С карты другого банка</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.framePosition]}
            onPress={() => handleButtonPress("По реквизитам")}
          >
            <Text style={[styles.buttonText, styles.timeTypo]}>По реквизитам</Text>
          </TouchableOpacity>
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
    justifyContent: "center", // Центрирование по вертикали
    alignItems: "center", // Центрирование по горизонтали
  },
  statsLayout: {
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
  button: {
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_5xs,
    width: "80%",
    paddingVertical: 15, // Увеличили высоту кнопок
    paddingHorizontal: 15,
    alignItems: "center",
    marginVertical: 5,
    zIndex: 1, // Добавлено для правильного отображения над другими элементами
  },
  buttonText: {
    fontSize: FontSize.size_xs,
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
  },
  framePosition2: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    height: 50, // Увеличили высоту кнопок
    width: 362,
    left: 13,
    flexDirection: "row",
    position: "absolute",
    top: "50%", // Позиционируем относительно центра экрана
    marginTop: 2, // Увеличили расстояние между кнопками
  },
  framePosition1: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    height: 50, // Увеличили высоту кнопок
    width: 362,
    left: 13,
    flexDirection: "row",
    position: "absolute",
    top: "50%", // Позиционируем относительно центра экрана
    marginTop: -65, // Увеличили расстояние между кнопками
  },
  framePosition: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    height: 50, // Увеличили высоту кнопок
    width: 362,
    left: 13,
    flexDirection: "row",
    position: "absolute",
    top: "50%", // Позиционируем относительно центра экрана
    marginTop: 65, // Увеличили расстояние между кнопками
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
  frame1: {
    top: 490, // Переместили ниже карты
  },
  frame8: {
    top: 600, // Переместили ниже карты
  },
  frame10: {
    top: 710, // Переместили ниже карты
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
  stats1: {
    top: 46,
    left: 12,
    flexDirection: "row",
    position: "absolute",
  },
  view: {
    flex: 1,
    width: "100%",
    height: 892,
  },
});

export default Frame4;

