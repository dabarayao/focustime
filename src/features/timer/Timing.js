import React from "react";
import {View, StyleSheet} from "react-native";

import { RoundedButton } from "../../components/RoundedButton";


export const Timing = ({ onChangeTime }) => {
  return (
    
    <>
      <View styles={styles.timingButton}>
        <RoundedButton size={75} title="10" pressDec={() => onChangeTime(10)} style={{paddingTop: 20, marginRight: 10}} />
      </View>

      <View styles={styles.timingButton}>
        <RoundedButton size={75} title="15" pressDec={() => onChangeTime(15)} style={{paddingTop: 20, marginRight: 10}} />
      </View>

      <View styles={styles.timingButton}>
        <RoundedButton size={75} title="20" pressDec={() => onChangeTime(20)} style={{paddingTop: 20, marginRight: 10}} />
      </View>
    </>
  )
}


const styles = StyleSheet.create({
    timingButton: {
      flex: 1,
      alignItems: "center",
    }  
});