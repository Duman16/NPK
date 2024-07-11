import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, Padding, FontSize } from "../GlobalStyles";

const currencies = ["USD", "EUR", "GBP", "JPY"]; // Пример списка валют

const Frame6 = () => {
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]); // Выбранная валюта
  const [amount, setAmount] = useState(""); // Введенная сумма

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  const handleAmountChange = (value) => {
    setAmount(value);
  };

  return (
    <View style={[styles.view, styles.viewBg]}>
      {/* Заголовок и другие элементы страницы */}
      <View style={styles.header} />
      <View style={styles.stats}>
        <View style={styles.card}>
          <View style={styles.cardChild}>
            <Text style={styles.textTypo2}>45,678.90 ₸</Text>
            <Text style={styles.textTypo1}>Доступно</Text>
            <Text style={styles.textTypo3}>Карта 1 *0584</Text>
          </View>
          
          {/* Выпадающий список для выбора валюты */}
          <View style={styles.frame9}>
            <Text style={styles.textTypo}>Выберите валюту</Text>
            <TouchableOpacity style={styles.dropdownButton} onPress={() => {}}>
              <Text style={styles.dropdownButtonText}>{selectedCurrency}</Text>
              {/* Иконка для выпадающего списка */}
              <Image
                style={styles.outlineinterfacecaretLeftIcon}
                contentFit="cover"
                source={require("../assets/outlineinterfacecaret-left.png")}
              />
            </TouchableOpacity>
          </View>

          {/* Поле для ввода суммы */}
          <View style={styles.frame10}>
            <TextInput
              style={styles.input}
              placeholder="Введите сумму"
              keyboardType="numeric"
              value={amount}
              onChangeText={handleAmountChange}
            />
          </View>

          {/* Кнопка для совершения операции */}
          <TouchableOpacity style={styles.buttonPrimary} onPress={() => {}}>
            <Text style={styles.text17}>Поменять валюту</Text>
          </TouchableOpacity>
        </View>
        {/* Дополнительные элементы, если нужно */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_lg,
  },
  viewBg: {
    borderRadius: Border.br_lg,
    overflow: "hidden",
  },
  stats: {
    height: 1046,
    width: 388,
  },
  textTypo2: {
    fontSize: 30,
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
    marginBottom: 10,
    position: "absolute",
    top: 110,
    left: 20,
    zIndex: 1,
  },
  textTypo1: {
    fontSize: 18,
    color: Color.colorGray_300,
    marginVertical: 10,
    position: "absolute",
    top: 160,
    left: 20,
    zIndex: 1,
  },
  textTypo3: {
    fontSize: 24,
    color: Color.colorWhite,
  },
  frame9: {
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    marginBottom: 20,
    height: 60, // Increased height for currency selector
  },
  textTypo: {
    fontFamily: FontFamily.smallText,
    fontSize: FontSize.smallText_size,
    lineHeight: 24,
    fontWeight: "500",
    marginRight: 10,
  },
  dropdownButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  dropdownButtonText: {
    fontSize: FontSize.smallText_size,
    color: Color.colorGray,
    marginRight: 5,
  },
  outlineinterfacecaretLeftIcon: {
    height: 24,
    width: 24,
    marginLeft: 5,
  },
  frame10: {
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    marginBottom: 20,
    height: 60, // Increased height for input field
  },
  input: {
    flex: 1,
    fontSize: FontSize.smallText_size,
    color: Color.colorGray,
  },
  buttonPrimary: {
    backgroundColor: Color.colorSienna,
    paddingVertical: Padding.p_base,
    paddingHorizontal: 100, // Increased paddingHorizontal for wider button
    alignItems: "center",
    borderRadius: Border.br_5xs,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    elevation: 2,
    marginTop: 20, // Adjusted margin top
  },
  text17: {
    color: Color.colorWhite,
    fontSize: FontSize.smallText_size,
  },
  header: {
    width: 412,
    height: 52,
    marginBottom: 20,
  },
  cardChild: {
    backgroundColor: Color.colorSienna,
    width: 363,
    height: 219,
    zIndex: 0,
    borderRadius: Border.br_lg,
    padding: Padding.p_base,
  },
  card: {
    backgroundColor: Color.colorLightblue,
    borderRadius: Border.br_xs,
    width: "100%",
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
  },
});

export default Frame6;


