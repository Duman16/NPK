import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const Frame3 = () => {
  const navigation = useNavigation();

  const handleButtonPress = (button) => {
    switch (button) {
      case "statement":
        navigation.navigate("Frame8");
        break;
      case "replenish":
        navigation.navigate("Frame4");
        break;
      case "creditTracking":
        navigation.navigate("CreditTracking");
        break;
      case "changeCurrency":
        navigation.navigate("Frame6");
        break;
      case "internetPayments":
        navigation.navigate("Frame5");
        break;
      case "aiAdvice":
        navigation.navigate("Frame12");
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.view}>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.cardChild} />
          <Text style={styles.balance}>45,678.90 ₸</Text>
          <Text style={styles.available}>Доступно</Text>
          <Text style={styles.cardNumber}>Карта 1 *0584</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress("statement")}>
          <Text style={styles.buttonText}>Посмотреть выписку</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress("replenish")}>
          <Text style={styles.buttonText}>Пополнить карту</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress("creditTracking")}>
          <Text style={styles.buttonText}>Отслеживание кредитов</Text>
        </TouchableOpacity>
        {/* Удалена кнопка для отслеживания долгов */}
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress("changeCurrency")}>
          <Text style={styles.buttonText}>Поменять валюту</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress("internetPayments")}>
          <Text style={styles.buttonText}>Оплаты в интернете</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress("aiAdvice")}>
          <Text style={styles.buttonText}>Получить советы от ИИ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  cardContainer: {
    flex: 1,
    alignItems: "center",
    
    padding: 20,
    paddingBottom: 10, // Уменьшаем отступ снизу
  },
  card: {
    backgroundColor: Color.colorLightblue,
    borderRadius: Border.br_xs,
    width: "100%",
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  cardChild: {
    backgroundColor: Color.colorSienna,
    width: 363,
    height: 219,
    zIndex: 0,
    borderRadius: Border.br_lg,
  },
  balance: {
    fontSize: 40,
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
    marginBottom: 10,
    position: "absolute",
    top: 130,
    left: 20,
    zIndex: 1,
  },
  available: {
    fontSize: 18,
    color: Color.colorGray_300,
    marginVertical: 10,
    position: "absolute",
    top: 180,
    left: 20,
    zIndex: 1,
  },
  cardNumber: {
    fontSize: 30,
    color: Color.colorWhite,
  },
  button: {
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_5xs,
    width: "80%",
    padding: 15,
    alignItems: "center",
    marginVertical: 5,
  },
  buttonText: {
    fontSize: FontSize.size_xs,
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 1,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: Color.colorGray,
  },
});

export default Frame3;
