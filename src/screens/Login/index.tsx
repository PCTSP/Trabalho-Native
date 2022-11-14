import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, Switch, Linking } from 'react-native';
import { styles } from './styles';
import { Feather, EvilIcons } from '@expo/vector-icons';
import logo from '../../../img/logo.png'

export const Login = () => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Feather name="arrow-left" size={30} color="white" />
      <Image style={styles.logo} source={logo}></Image>
      <EvilIcons name="location" size={40} color="white" />
      </View>

      <Text style={styles.title}>Acessar sua conta</Text>

      <TextInput style={styles.input} placeholder='CPF' keyboardType={"numeric"}/>

      <View style={styles.keepInfo}>
        <Text style={styles.infoText}>Lembrar meu CPF</Text>
        <Switch
        trackColor={{ false: "#767577", true: "red" }}
        thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>

      <TextInput style={styles.input} placeholder='Senha' keyboardType={"numeric"} secureTextEntry={true}/>

      <View style={styles.keepInfo}>
        <Text style={styles.infoText}>Habilitar acesso com digital</Text>
        <Switch
        trackColor={{ false: "#767577", true: "red" }}
        thumbColor={isEnabled2 ? "#fff" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch2}
        value={isEnabled2}
        />
      </View>

      <Text style={styles.link}>Esqueci minha senha</Text>
      <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Entrar</Text>

      </TouchableOpacity>

    </View>
  )
}
