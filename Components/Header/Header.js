import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";
const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://c0.klipartz.com/pngpicture/950/505/gratis-png-tesla.png",
        }}
      />
      <Image
        style={styles.menu}
        source={{
          uri: "https://s19538.pcdn.co/wp-content/uploads/2017/08/TESLA-Logo.jpg",
        }}
      />
    </View>
  );
};

export default Header;
