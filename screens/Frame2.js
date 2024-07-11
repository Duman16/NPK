import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const Frame2 = () => {
  const navigation = useNavigation();

  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardPress = (card) => {
    setSelectedCard(card);
  };

  const handleNavigationPress = () => {
    if (selectedCard) {
      if (selectedCard === "card1") {
        navigation.navigate("Frame3");
      } else if (selectedCard === "deposit") {
        navigation.navigate("Frame9");
      } else if (selectedCard === "card2") {
        navigation.navigate("Frame7");
      }
    } else {
      alert("Please select a card first.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.profileImageIcon}
          contentFit="cover"
          source={require("../assets/profile-image.png")}
        />
        <Text style={styles.headerText}>Главная страница</Text>
      </View>
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, selectedCard === "card1" ? styles.selectedTab : null]}
          onPress={() => handleCardPress("card1")}
        >
          <Text style={styles.tabText}>Карта 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedCard === "deposit" ? styles.selectedTab : null]}
          onPress={() => handleCardPress("deposit")}
        >
          <Text style={styles.tabText}>Депозит</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedCard === "card2" ? styles.selectedTab : null]}
          onPress={() => handleCardPress("card2")}
        >
          <Text style={styles.tabText}>Карта 2</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity
          style={[styles.card, selectedCard === "card1" && styles.selectedCard]}
          onPress={() => handleCardPress("card1")}
        >
          <Text style={styles.cardText}>Карта 1 *0584</Text>
          <Text style={styles.cardBalance}>45,678.90 ₸</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.card, selectedCard === "deposit" && styles.selectedCard]}
          onPress={() => handleCardPress("deposit")}
        >
          <Text style={styles.cardText}>Депозит</Text>
          <Text style={styles.cardBalance}>2,405 ₸</Text>
          <Text style={styles.cardNote}>+33% за прошлый месяц</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.card, selectedCard === "card2" && styles.selectedCard]}
          onPress={() => handleCardPress("card2")}
        >
          <Text style={styles.cardText}>Карта 2 *2225</Text>
          <Text style={styles.cardBalance}>10,353 ₸</Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity style={styles.navigateButton} onPress={handleNavigationPress}>
        <Text style={styles.navigateButtonText}>Перейти</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer content here</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: Padding.p_base,
    backgroundColor: Color.colorWhite,
    width: "100%",
    marginTop: 10,
  },
  profileImageIcon: {
    width: 40,
    height: 40,
  },
  headerText: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    marginLeft: 15,
    color: Color.colorBlack,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
  },
  tab: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_lg,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  selectedTab: {
    backgroundColor: Color.colorSienna,
  },
  tabText: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.smallText,
    fontWeight: "500",
    color: Color.colorBlack,
  },
  scrollContainer: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
  },
  card: {
    width: 186,
    height: 120,
    padding: Padding.p_base,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorSienna,
    alignItems: "center",
    marginHorizontal: 10,
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: Color.colorSienna,
  },
  cardText: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
  },
  cardBalance: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
    marginTop: 10,
  },
  cardNote: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.smallText,
    color: Color.colorGray_400,
    marginTop: 10,
  },
  navigateButton: {
    marginTop: 30,
    padding: Padding.p_base,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorSienna,
  },
  navigateButtonText: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.smallText,
    fontWeight: "500",
    color: Color.colorWhite,
  },
  footer: {
    marginTop: 'auto',
    padding: Padding.p_base,
    width: "100%",
    backgroundColor: Color.colorWhitesmoke_100,
    alignItems: "center",
  },
  footerText: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.smallText,
    color: Color.colorBlack,
  },
});

export default Frame2;
