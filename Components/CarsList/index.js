import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import styles from "./styles";
import CarItem from "../CarItem/CarItem";
import CarsList from "./CarsList";
const index = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={CarsList}
        renderItem={({ item }) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default index;
