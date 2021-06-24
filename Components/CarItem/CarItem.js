import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton/StyledButton";
const CarItem = (props) => {
  const { name, tagline, image, taglineCTA } = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.tagline}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttoncontainer}>
        <StyledButton
          type="primary"
          content={"Custom Order"}
          onPress={() => console.warn("Custom Pressed")}
        />
        <StyledButton
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => console.warn("Existing Pressed")}
        />
      </View>
    </View>
  );
};

export default CarItem;
