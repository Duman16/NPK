import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Padding, Border, Color } from "../GlobalStyles";
import axios from "axios";
import { Ionicons } from '@expo/vector-icons';

const Frame12 = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (inputText.trim() !== "") {
      const newMessage = { id: messages.length + 1, text: inputText, sender: "user" };
      setMessages([...messages, newMessage]);
      setInputText("");
      setIsLoading(true);

      try {
        const response = await axios.post(
          "https://api.openai.com/v1/engines/davinci-codex/completions",
          {
            prompt: inputText,
            max_tokens: 150,
            n: 1,
            stop: ["\n"],
            temperature: 0.7,
          },
          {
            headers: {
              Authorization: `Bearer YOUR_OPENAI_API_KEY`,
            },
          }
        );

        const aiMessage = {
          id: messages.length + 2,
          text: response.data.choices[0].text.trim(),
          sender: "ai",
        };

        setMessages((prevMessages) => [...prevMessages, aiMessage]);
      } catch (error) {
        console.error("Ошибка при получении ответа от ИИ:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <View style={styles.view}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Чат с ИИ</Text>
      </View>

      <ScrollView contentContainerStyle={styles.messageContainer}>
        {messages.map((message) => (
          <View
            key={message.id}
            style={[
              styles.messageBubble,
              message.sender === "user" ? styles.senderChat : styles.recipientChat,
            ]}
          >
            <Text style={[
                styles.messageText,
                message.sender === "user" ? styles.senderText : styles.recipientText,
            ]}>
                {message.text}
            </Text>
          </View>
        ))}
      </ScrollView>

      {isLoading && <Text style={styles.loadingText}>ИИ печатает...</Text>}

      <View style={styles.footerInput}>
        <TextInput
          style={styles.input}
          placeholder="Напишите сообщение..."
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity onPress={handleSend}>
          <Ionicons name="send" size={24} color={Color.colorPrimary} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.icon} source={require("../assets/iconemoji.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.icon} source={require("../assets/iconimage.png")} />
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
  header: {
    backgroundColor: Color.colorSienna,
    padding: Padding.p_base,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.smallText,
    fontWeight: 'bold',
    color: Color.colorWhite,
  },
  messageContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    padding: Padding.p_base,
  },
  messageBubble: {
    maxWidth: "75%",
    padding: Padding.p_base,
    borderRadius: Border.br_lg,
    marginBottom: Padding.p_base,
  },
  senderChat: {
    backgroundColor: Color.colorPrimary,
    alignSelf: "flex-end",
    borderTopRightRadius: Border.br_lg,
    borderBottomLeftRadius: Border.br_lg,
  },
  recipientChat: {
    backgroundColor: "#e9e9eb",
    alignSelf: "flex-start",
    borderTopLeftRadius: Border.br_lg,
    borderBottomRightRadius: Border.br_lg,
  },
  messageText: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    fontFamily: FontFamily.smallText,
  },
  senderText: {
    color: Color.colorWhite,
  },
  recipientText: {
    color: Color.colorBlack,
  },
  footerInput: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: Color.colorGainsboro,
    padding: Padding.p_base,
    backgroundColor: Color.colorWhite,
  },
  input: {
    flex: 1,
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    fontFamily: FontFamily.smallText,
    color: Color.colorBlack,
    backgroundColor: "#f0f0f0",
    borderRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_base,
    marginRight: Padding.p_base,
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: Padding.p_base,
  },
  loadingText: {
    textAlign: "center",
    color: Color.colorGray_400,
    fontFamily: FontFamily.smallText,
    fontSize: FontSize.size_sm,
    marginBottom: Padding.p_base,
  },
});

export default Frame12;

