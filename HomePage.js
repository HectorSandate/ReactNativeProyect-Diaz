import React from "react";
import { Image, Text, View, ScrollView, StyleSheet, Dimensions, ImageBackground } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  return (
    <ImageBackground
      source={{
        uri: "https://irp.cdn-website.com/8af471c9/dms3rep/multi/pan+artesanal+de+centeno.jpeg",
      }}
      style={styles.backgroundImage}
    >

      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={{
              uri: "https://static.wixstatic.com/media/324563_4e19b2660a5a4d27b56768dcb4974ff8~mv2.png/v1/fill/w_560,h_324,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LOGO%20SANTO%20PAN%20_MR_PNG-01.png",
            }}
            style={styles.logo}
          />

          <Text style={styles.slogan}>El mejor pan artesanal</Text>
        </View>

        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        >
          <View style={styles.item}>
            <ImageBackground
              source={{ uri: "https://example.com/item.png" }}
              style={styles.panImageBackground}
            >
              <View style={styles.overlay}>
                <Text style={styles.title}>Chocolatin</Text>
                <Text style={styles.subtitle}>Pan de hojaldre relleno de chocolate</Text>
              </View>

              <View style={styles.cutout}>
                <Image
                  source={{
                    uri: "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2FPan%20de%20Chocolate_1.png?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&q=80&w=1200&h=627",
                  }}
                  style={styles.cutoutImage}
                />
                <Text style={styles.cutoutText}></Text>
              </View>
              <MapView
                style={styles.mapContainer}
                initialRegion={{
                  latitude: 24.0148574,
                  longitude: -104.6798644,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              >
                <Marker
                  coordinate={{ latitude: 24.0148574, longitude: -104.6798644 }}
                  title="Santo Pan - Domingo Arrieta"
                  description="Ubicación de Santo Pan"
                />
              </MapView>
            </ImageBackground>
          </View>
          {/* Agrega más elementos aquí para ampliar el carrusel */}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const Screen1 = () => (
  <View style={styles.drawerScreen}>
    <Text style={styles.drawerText}>Pantalla 1</Text>
  </View>
);

const Screen2 = () => (
  <View style={styles.drawerScreen}>
    <Text style={styles.drawerText}>Pantalla 2</Text>
  </View>
);

const Drawer = createDrawerNavigator();

const Drawers = () => {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false, drawerLabel: () => null }}
        >
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Screen1" component={Screen1} />
          <Drawer.Screen name="Screen2" component={Screen2} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  };    


const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },

  overlay: {
    flex: 0.2,
    // top: 30,
    bottom: 90,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20,
    // justifyContent: "center",
    // alignItems: "center",
    marginTop: 50
  },

  descriptionText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },

  container: {
    flex: 1,

    backgroundColor: "transparent",
  },

  logoContainer: {
    position: "absolute",
    zIndex: 2,
    top: 0,
    left: 90,
    right: 0,
  },

  logo: {
    width: 200,
    height: 116,
    resizeMode: "contain",
  },

  scrollViewContent: {
    alignItems: "center",
  },

  item: {
    width: width,

    height: 200,
  },

  panImageBackground: {
    width: width,

    height: height, // Ajusta la altura para que cubra toda la pantalla
  },

  title: {
    fontSize: 40,
    top: 10,

    color: "#fff",

    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 20,
    top: 50,

    color: "#fff",
  },
  slogan: {
    fontSize: 18,
    color: '#ffff',
    textAlign: 'center',
    marginTop: 10,
    right: 30,
    backgroundColor: 'rgba(0,0,0,0.5)', 
    paddingVertical: 10,
    paddingHorizontal: 20   

  },

  cutout: {
    position: "absolute",

    top: -90,

    right: 10,

    width: 100,

    height: 100,

    borderRadius: 50,

    borderWidth: 5,

    borderColor: "#fff",

    overflow: "hidden",
  },

  cutoutImage: {
    width: 100,

    height: 100,

    resizeMode: "cover",
  },

  mapContainer: {
    flex: 1,
    height: 200,
    borderRadius: 105, // Añadido para redondear los bordes
    overflow: 'hidden', // Añadido para asegurar que el mapa respete el redondeo
  },
  

  cutoutText: {
    position: "absolute",

    bottom: 0,

    left: 0,

    right: 0,

    backgroundColor: "rgba(0,0,0,0.7)",

    color: "#fff",

    fontSize: 12,

    textAlign: "center",
  },
  drawerScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  drawerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color:"000000"
  },


});

export default HomeScreen;