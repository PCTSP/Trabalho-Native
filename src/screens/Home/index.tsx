import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "../Home/styles";
import { MaterialIcons, Entypo, Feather, Ionicons } from '@expo/vector-icons';
import icon from '../../../img/iconSha.png'

export const Home = () => {

  return (
    <View style={styles.container}>

      <View style={styles.header}>

        <View style={styles.iconsAlign}>
          <MaterialIcons name="library-music" size={30} color="white" />
          <Text style={styles.textHeader}>Biblioteca</Text>
        </View>

        <Entypo name="dots-three-horizontal" size={30} color="white" />

        <View style={styles.iconsAlign}>
          <Feather name="trending-up" size={30} color="white" />
          <Text style={styles.textHeader}>Tops</Text>
        </View>

      </View>

      <Text style={styles.text}>Dar um Shazam</Text>

      <Image style={styles.iconShazam} source={icon}></Image>

      <Ionicons style={styles.iconSearch} name="ios-search-circle" size={80} color="gray" />

    </View>
  )
}