import React from "react";
import { StyleSheet, Text, View, Image, StatusBar,  } from "react-native";
import Header from "./src/components/Header";
import Albumlist from "./src/components/AlbumList";


const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar />
      <Header />
      <Albumlist />
    </View>
  );
};



export default App;