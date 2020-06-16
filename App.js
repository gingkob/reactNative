import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [text, setText] = useState("Open up App.js to start working on your apppppp!")

  const textHandler = () =>{
    setText("Novi text!")
  }

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Button title="Click me!" color='green' onPress={textHandler}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    tintColor: '#fff'
  },
});
