import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles"; // Импорт глобальных стилей

const Frame8 = () => {
  const [showIcons, setShowIcons] = React.useState(false);
  const [selectedPeriod, setSelectedPeriod] = React.useState("Сегодня");
  const navigation = useNavigation();

  const toggleIcons = () => {
    setShowIcons(!showIcons);
  };

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.cardChild}>
            <Text style={styles.moneyText}>45,678.90 ₸</Text>
            <Text style={styles.availableText}>Доступно</Text>
          </View>
          {showIcons && (
            <Image
              style={styles.profileImageIcon}
              source={require("../assets/profile-image.png")}
            />
          )}
        </View>
        <View style={styles.list}>
          <Text style={styles.listHeader}>Выписка</Text>
          <View style={styles.periodSelector}>
            <TouchableOpacity
              style={[
                styles.periodButton,
                selectedPeriod === "Сегодня" && styles.periodButtonActive,
              ]}
              onPress={() => handlePeriodChange("Сегодня")}
            >
              <Text
                style={[
                  styles.periodButtonText,
                  selectedPeriod === "Сегодня" && styles.periodButtonTextActive,
                ]}
              >
                Сегодня
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.periodButton,
                selectedPeriod === "Неделя" && styles.periodButtonActive,
              ]}
              onPress={() => handlePeriodChange("Неделя")}
            >
              <Text
                style={[
                  styles.periodButtonText,
                  selectedPeriod === "Неделя" && styles.periodButtonTextActive,
                ]}
              >
                Неделя
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.periodButton,
                selectedPeriod === "Месяц" && styles.periodButtonActive,
              ]}
              onPress={() => handlePeriodChange("Месяц")}
            >
              <Text
                style={[
                  styles.periodButtonText,
                  selectedPeriod === "Месяц" && styles.periodButtonTextActive,
                ]}
              >
                Месяц
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.transactionList}>
            <View style={styles.transaction}>
              <Text style={styles.transactionText}>Пополнение с карты *2225</Text>
              <Text style={styles.transactionAmount}>+ 2,555 ₸</Text>
            </View>
            {/* Добавьте другие транзакции здесь */}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    backgroundColor: "#FFFFFF",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  card: {
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: Color.colorSienna,
    zIndex: 0, // Устанавливаем z-index, чтобы кнопка была выше карты
    marginTop: 20, // Отступ от верхнего края
  },
  cardChild: {
    width: 363,
    height: 219,
    zIndex: 0,
    backgroundColor: Color.colorSienna,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  moneyText: {
    fontSize: 40,
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
    marginBottom: 10,
    position: "absolute", // Убрано
    top: 110, // Убрано
    left: 20, // Убрано
    zIndex: 1, // Убрано
  },
  availableText: {
    fontSize: 18,
    color: Color.colorGray_300,
    marginVertical: 10,
    position: "absolute", // Убрано
    top: 170, // Убрано
    left: 20, // Убрано
    zIndex: 1, // Убрано
  },
  profileImageIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignSelf: "flex-end",
    marginBottom: 5,
  },
  list: {
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    padding: 10,
    width: "100%",
    marginTop: 20, // Расстояние между картой и выпиской
  },
  listHeader: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: "#333333",
  },
  periodSelector: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  periodButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    backgroundColor: Color.colorSienna, // Изменен цвет кнопки
  },
  periodButtonActive: {
    backgroundColor: Color.colorSienna, // Изменен цвет активной кнопки
  },
  periodButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000000",
  },
  periodButtonTextActive: {
    color: "#FFFFFF",
  },
  transactionList: {
    maxHeight: 300, // Высота списка транзакций
  },
  transaction: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
  },
  transactionText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333333",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "500",
    color: "#32CD32",
  },
});

export default Frame8;
