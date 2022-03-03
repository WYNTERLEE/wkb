import React from "react";
import { View,  StatusBar, StyleSheet } from "react-native";
import Header from "./src/components/Header";
import Albumlist from "./src/components/AlbumList";


const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Header />
      <Albumlist />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:"#f8edeb",
  }
});

export default App;