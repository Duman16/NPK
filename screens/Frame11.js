import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/core";

const Frame11 = () => {
  const navigation = useNavigation();

  const [selectedCard, setSelectedCard] = useState("card1");

  const handleCardPress = (card) => {
    setSelectedCard(card);
    if (card === "card1") {
      console.navigate("Frame3");
    } else if (card === "deposit") {
      console.log("Выбран депозит");
    } else if (card === "card2") {
      navigation.navigate("Frame7");
    }
  }; return (
    <View style={styles.view}>
      <View style={[styles.list, styles.listBorder]}>
        <Text style={[styles.text, styles.textTypo2]}>{`Выписка `}</Text>
        <View style={[styles.tabList, styles.tabsFlexBox]}>
          <View style={styles.pill}>
            <Text style={[styles.text1, styles.textTypo1]}>
              08.05.2024-08.06.2024
            </Text>
          </View>
        </View>
        <Image
          style={styles.listChild}
          contentFit="cover"
          source={require("../assets/group-285.png")}
        />
        <View
          style={[styles.buttonSecondary, styles.buttonSecondarySpaceBlock]}
        >
          <Text style={[styles.text2, styles.textTypo1]}>9 Мая</Text>
          <View style={[styles.conversation, styles.conversationSpaceBlock]}>
            <View style={styles.text3}>
              <Text style={[styles.text4, styles.text4Typo]}>
                Пополнение с Карты
              </Text>
              <Text style={styles.text5} numberOfLines={1}>
                *0584
              </Text>
              <Text style={[styles.text6, styles.text6Position]}>
                <Text style={styles.textTypo1}>+ 25,366</Text>
                <Text style={styles.text8}>₸</Text>
              </Text>
            </View>
          </View>
          <View style={styles.buttonSecondaryChild} />
        </View>
        <Text style={[styles.text9, styles.textTypo2]}>
          <Text style={styles.textTypo1}>- 6,000</Text>
          <Text style={styles.text8}>₸</Text>
        </Text>
      </View>
      <View style={[styles.chart, styles.listBorder]}>
        <Text style={[styles.text12, styles.textTypo2]}>
          График дохода за месяц
        </Text>
        <Image
          style={[styles.chartChild, styles.chartChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-1.png")}
        />
        <Image
          style={[styles.chartItem, styles.chartChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-1.png")}
        />
        <Image
          style={[styles.chartInner, styles.chartChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-1.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.chartChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-1.png")}
        />
        <Image
          style={[styles.chartChild1, styles.chartChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-1.png")}
        />
        <Image
          style={[styles.chartChild2, styles.chartChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-1.png")}
        />
        <Text style={[styles.k, styles.kTypo]}>30K ₸</Text>
        <Text style={[styles.k1, styles.kTypo]}>25K ₸</Text>
        <Text style={[styles.k2, styles.kTypo]}>20K ₸</Text>
        <Text style={[styles.k3, styles.kTypo]}>15K ₸</Text>
        <Text style={[styles.k4, styles.kTypo]}>10K ₸</Text>
        <Text style={[styles.text13, styles.textTypo]}>Июнь 23</Text>
        <Text style={[styles.text14, styles.textTypo]}>30</Text>
        <Text style={[styles.text15, styles.textTypo]}>29</Text>
        <Text style={[styles.text16, styles.textTypo]}>28</Text>
        <Text style={[styles.text17, styles.textTypo]}>27</Text>
        <Text style={[styles.text18, styles.textTypo]}>26</Text>
        <Text style={[styles.text19, styles.textTypo]}>25</Text>
        <Text style={[styles.text20, styles.textTypo]}>24</Text>
        <Image
          style={styles.graphIcon}
          contentFit="cover"
          source={require("../assets/graph1.png")}
        />
      </View>
      <View style={[styles.tabs, styles.tabsFlexBox]}>
        <TouchableOpacity
          style={[styles.pill1, selectedCard === "card1" ? styles.selectedCard : null]}
          onPress={() => handleCardPress("card1")}
        >
          <Text style={[styles.text1, styles.textTypo1]}>Карта 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.pill2, selectedCard === "deposit" ? styles.selectedCard : null]}
          onPress={() => handleCardPress("deposit")}
        >
          <Text style={[styles.text22, styles.textTypo1]}>Депозит</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.pill2, selectedCard === "card2" ? styles.selectedCard : null]}
          onPress={() => handleCardPress("card2")}
        >
          <Text style={[styles.text22, styles.textTypo1]}>Карта 2</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.stats, styles.tabsFlexBox]}>
        <View style={styles.card}>
          <Text style={[styles.text21, styles.textTypo2]}>Карта 1 *0584</Text>
          <Text style={[styles.text22, styles.textSpaceBlock]}>
            45,678.90 ₸
          </Text>
        </View>
        <View style={[styles.card1, styles.cardBorder]}>
          <Text style={[styles.text21, styles.textTypo2]}>Депозит</Text>
          <Text style={[styles.text22, styles.textSpaceBlock]}>2,405 ₸</Text>
          <Text style={[styles.text25, styles.textSpaceBlock]}>
            +33% за прошлый месяц
          </Text>
        </View>
        <View style={[styles.card2, styles.cardBorder]}>
          <Text style={[styles.text21, styles.textTypo2]}>Карта 2 *2225</Text>
          <Text style={[styles.text22, styles.textSpaceBlock]}>10,353 ₸</Text>
        </View>
      </View>
      <View style={[styles.tabs, styles.tabsFlexBox]}>
        <View style={[styles.pill1, styles.pillFlexBox]}>
          <Text style={[styles.text28, styles.textTypo1]}>Карта 1</Text>
        </View>
        <View style={[styles.pill2, styles.pillFlexBox]}>
          <Text style={[styles.text28, styles.textTypo1]}>Депозит</Text>
        </View>
        <View style={[styles.pill3, styles.pillFlexBox]}>
          <Text style={[styles.text1, styles.textTypo1]}>Карта 2</Text>
        </View>
      </View>
      <View style={styles.homeIndicator}>
        <View style={styles.homeIndicator1} />
        <View style={[styles.homeIndicatorChild, styles.childLayout]} />
      </View>
      <View style={[styles.conversation1, styles.conversationSpaceBlock]}>
        <View style={styles.text31}>
          <Text style={styles.text4Typo}>Magnum</Text>
        </View>
        <View style={[styles.conversationChild, styles.childLayout]} />
      </View>
      <View style={[styles.header, styles.headerLayout]}>
        <Image
          style={styles.profileImageIcon}
          contentFit="cover"
          source={require("../assets/profile-image.png")}
        />
        <Text style={[styles.text32, styles.textPosition]}>
          Главная страница
        </Text>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  listBorder: {
    width: 369,
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    left: 16,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  textTypo2: {
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  tabsFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  textTypo1: {
    fontFamily: FontFamily.smallText,
    fontWeight: "500",
  },
  buttonSecondarySpaceBlock: {
    paddingHorizontal: Padding.p_5xl,
    flexDirection: "row",
  },
  conversationSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: 0,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  text4Typo: {
    width: 267,
    fontFamily: FontFamily.smallText,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  text6Position: {
    zIndex: 2,
    position: "absolute",
  },
  chartChildLayout: {
    width: 311,
    maxHeight: "100%",
    left: 16,
    position: "absolute",
  },
  kTypo: {
    lineHeight: 14,
    fontSize: FontSize.size_3xs,
    color: Color.colorGray_400,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    left: 16,
    position: "absolute",
  },
  textTypo: {
    top: 244,
    color: Color.colorGray_400,
    lineHeight: 14,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
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
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  pillFlexBox: {
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_7xs,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_xl,
    flexDirection: "row",
  },
  childLayout: {
    width: 349,
    borderColor: Color.colorBlack,
    height: 1,
    borderTopWidth: 1.1,
    borderStyle: "solid",
    position: "absolute",
  },
  headerLayout: {
    height: 52,
    position: "absolute",
  },
  textPosition: {
    top: 10,
    color: Color.colorBlack,
  },
  text: {
    marginTop: -149,
    marginLeft: -162.5,
    top: "50%",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  text1: {
    color: Color.colorWhite,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  pill: {
    width: 298,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_7xs,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorSienna,
    borderRadius: Border.br_xl,
    flexDirection: "row",
  },
  tabList: {
    left: 11,
    flexDirection: "row",
    top: 52,
  },
  listChild: {
    left: 328,
    width: 26,
    height: 25,
    top: 52,
    position: "absolute",
  },
  text2: {
    top: 13,
    fontSize: FontSize.smallText_size,
    lineHeight: 24,
    display: "flex",
    width: 47,
    zIndex: 0,
    height: 24,
    left: 22,
    alignItems: "center",
    fontFamily: FontFamily.smallText,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  text4: {
    zIndex: 0,
  },
  text5: {
    color: Color.colorGray_500,
    fontFamily: FontFamily.interRegular,
    lineHeight: 18,
    fontSize: FontSize.size_xs,
    width: 267,
    zIndex: 1,
    textAlign: "left",
    overflow: "hidden",
  },
  text8: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  text6: {
    left: 251,
    width: 70,
    height: 15,
    top: 10,
    color: Color.colorBlack,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  text3: {
    width: 324,
  },
  conversation: {
    top: 37,
    zIndex: 1,
    left: 22,
  },
  buttonSecondaryChild: {
    borderColor: Color.colorWhitesmoke_300,
    width: 348,
    marginLeft: 8,
    height: 1,
    borderTopWidth: 1.1,
    zIndex: 2,
    borderStyle: "solid",
  },
  buttonSecondary: {
    top: 111,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    backgroundColor: Color.colorWhitesmoke_200,
    width: 347,
    height: 182,
    paddingVertical: Padding.p_sm,
    justifyContent: "center",
    borderRadius: Border.br_xl,
    paddingHorizontal: Padding.p_5xl,
    alignItems: "center",
    left: 11,
    position: "absolute",
  },
  text9: {
    left: 293,
    width: 88,
    height: 20,
    top: 208,
    color: Color.colorBlack,
    position: "absolute",
  },
  list: {
    top: 629,
    height: 330,
  },
  text12: {
    top: 16,
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: 16,
    position: "absolute",
  },
  chartChild: {
    top: 60,
  },
  chartItem: {
    top: 96,
  },
  chartInner: {
    top: 132,
  },
  vectorIcon: {
    top: 168,
  },
  chartChild1: {
    top: 204,
  },
  chartChild2: {
    top: 240,
  },
  k: {
    top: 64,
    color: Color.colorGray_400,
  },
  k1: {
    top: 100,
    color: Color.colorGray_400,
  },
  k2: {
    top: 136,
    color: Color.colorGray_400,
  },
  k3: {
    top: 172,
    color: Color.colorGray_400,
  },
  k4: {
    color: Color.colorGray_400,
    top: 208,
  },
  text13: {
    left: 16,
  },
  text14: {
    left: 310,
  },
  text15: {
    left: 271,
  },
  text16: {
    left: 232,
  },
  text17: {
    left: 194,
  },
  text18: {
    left: 155,
  },
  text19: {
    left: 116,
  },
  text20: {
    left: 77,
  },
  graphIcon: {
    top: 115,
    right: 42,
    maxWidth: "100%",
    height: 89,
    left: 16,
    position: "absolute",
    overflow: "hidden",
  },
  chart: {
    top: 313,
    height: 282,
  },
  text21: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  text22: {
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
    height: 120,
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  text25: {
    color: Color.colorGray_400,
    lineHeight: 18,
    fontSize: FontSize.size_xs,
    marginTop: 8,
    fontFamily: FontFamily.smallText,
    fontWeight: "500",
  },
  card1: {
    width: 173,
  },
  card2: {
    width: 159,
    height: 120,
    marginLeft: 12,
  },
  stats: {
    top: 174,
    left: -156,
  },
  text28: {
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
  },
  pill1: {
    backgroundColor: Color.colorWhitesmoke_100,
    paddingHorizontal: Padding.p_sm,
  },
  pill2: {
    backgroundColor: Color.colorWhitesmoke_100,
    paddingHorizontal: Padding.p_sm,
    marginLeft: 8,
  },
  pill3: {
    marginLeft: 8,
    paddingHorizontal: Padding.p_sm,
    backgroundColor: Color.colorSienna,
  },
  tabs: {
    top: 123,
    left: 26,
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
  homeIndicatorChild: {
    left: 9,
    top: 11,
  },
  homeIndicator: {
    marginLeft: -188,
    bottom: 0,
    width: 375,
    height: 34,
    left: "50%",
    position: "absolute",
  },
  text31: {
    zIndex: 0,
  },
  conversationChild: {
    top: 0,
    left: -21,
    zIndex: 1,
  },
  conversation1: {
    top: 831,
    left: 49,
  },
  profileImageIcon: {
    left: 344,
    width: 40,
    height: 40,
    top: 11,
    position: "absolute",
  },
  text32: {
    marginLeft: -175,
    fontSize: FontSize.size_xl,
    letterSpacing: -0.4,
    lineHeight: 28,
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  header: {
    top: 56,
    left: 2,
    width: 412,
  },
  time: {
    letterSpacing: 0.1,
    lineHeight: 20,
    fontFamily: FontFamily.robotoMedium,
    color: Color.m3RefNeutralNeutral10,
    zIndex: 0,
    fontWeight: "500",
    textAlign: "left",
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
    left: "50%",
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

export default Frame11;
