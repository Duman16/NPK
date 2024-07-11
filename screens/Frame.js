import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Frame = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Вход</Text>
          <Text style={styles.subtitle}>Введите ваши данные аккаунта</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Введите вашу почту"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Text style={styles.label}></Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Введите ваш пароль"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <Text style={styles.label}></Text>
        </View>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Frame2')}
        >
          <Text style={styles.buttonText}>Войти</Text>
        </TouchableOpacity>
        <View style={styles.orContainer}>
          <Image
            style={styles.line}
            resizeMode="cover"
            source={require("../assets/line-30.png")}
          />
          <Text style={styles.orText}>Или</Text>
          <Image
            style={[styles.line, styles.secondLine]}
            resizeMode="cover"
            source={require("../assets/line-301.png")}
          />
        </View>
        <View style={styles.socialContainer}>
          <Image
            style={styles.socialIcon}
            resizeMode="cover"
            source={require("../assets/group-128.png")}
          />
          <View style={styles.socialIcons}>
            <Image
              style={styles.socialIcon}
              resizeMode="cover"
              source={require("../assets/group-126.png")}
            />
            <Image
              style={styles.socialIcon}
              resizeMode="cover"
              source={require("../assets/group-192.png")}
            />
          </View>
        </View>
        <Text style={styles.troubleText}>Возникли проблемы?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "100%",
    alignItems: "center",
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: FontSize.size_11xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoMedium,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: FontSize.size_xs,
    color: Color.color,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 24,
    width: "100%",
    position: "relative",
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: Color.colorGray_200,
    borderBottomWidth: 1,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.robotoRegular,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  label: {
    fontSize: FontSize.size_xs,
    color: Color.color,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
    bottom: 8,
    left: 8,
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: Color.colorSienna,
    borderRadius: Border.br_58xl,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
  buttonText: {
    fontSize: FontSize.size_smi,
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoBold,
    lineHeight: 16,
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 24,
  },
  line: {
    flex: 1,
    height: 1,
    opacity: 0.6,
  },
  secondLine: {
    marginLeft: 16,
  },
  orText: {
    marginHorizontal: 16,
    fontSize: FontSize.size_xs,
    color: Color.color,
    fontFamily: FontFamily.robotoRegular,
  },
  socialContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  socialIcons: {
    flexDirection: "row",
    marginLeft: 16,
  },
  socialIcon: {
    width: 45,
    height: 45,
    borderRadius: 36,
    borderWidth: 1.5,
    borderColor: Color.colorGray_200,
    marginRight: 8,
  },
  troubleText: {
    marginTop: 24,
    fontSize: FontSize.size_xs,
    color: Color.color,
    fontFamily: FontFamily.robotoRegular,
    textDecorationLine: "underline",
  },
});

export default Frame;
