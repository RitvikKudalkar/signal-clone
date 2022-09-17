import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { db } from "../firebase";

const AddChat = ({ navigation }) => {
  const [input, setInput] = useState("");

  const createChat = async () => {
    await db
      .collection("chats")
      .add({
        chatName: input,
      })
      .then(() => {
        navigation.goBack();
      })
      .catch((err) => alert(err.message));
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter the chat name"
        value={input}
        onChangeText={(text) => setInput(text)}
        autoFocus
        onSubmitEditing={createChat}
        leftIcon={
          <Icon
            name="wechat"
            type="antdesign"
            size={24}
            color="black"
            style={{ margin: 10 }}
          />
        }
      />
      <Button disabled={!input} onPress={createChat} title="Create new chat" />
    </View>
  );
};

export default AddChat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
