import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './HomePage'; // Importa la página HomePage.js

const Stack = createStackNavigator();

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation(); // Obtiene el objeto de navegación
  
  const handleLogin = () => {
    // Verifica las credenciales
    if (email === 'juan@gmail.com' && password === '123') {
      // Navega a la página HomePage
      navigation.navigate('HomePage');
    } else {
      console.log('Credenciales incorrectas');
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://img.freepik.com/foto-gratis/pan-panaderia-saludable-pan-grano-artesanal-marco-vertical-mesa_166373-2521.jpg' }}
        style={styles.backgroundImage}
        blurRadius={2} // Ajusta el desenfoque según sea necesario
      >
        <View style={styles.innerContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={{ uri: 'https://static.wixstatic.com/media/324563_4e19b2660a5a4d27b56768dcb4974ff8~mv2.png/v1/fill/w_560,h_324,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LOGO%20SANTO%20PAN%20_MR_PNG-01.png' }}
              style={styles.logoImage}
            />
            <Text style={styles.logoText}>SantoPan</Text>
            <Text style={styles.logoSubtitle}>TALLER DE PAN ARTESANAL</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#707070"
              onChangeText={setEmail}
              value={email}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#707070"
              onChangeText={setPassword}
              value={password}
              secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  innerContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo negro semitransparente
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoImage: {
    width: 250,
    height: 150,
    marginBottom: 10,
  },
  logoText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  logoSubtitle: {
    color: '#fff',
    fontSize: 16,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo blanco semitransparente
    borderRadius: 5,
    height: 50,
    marginBottom: 20,
    paddingLeft: 15,
    fontSize: 16,
    color: '#000',
  },
  button: {
    backgroundColor: '#FFD700', // Amarillo dorado
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
