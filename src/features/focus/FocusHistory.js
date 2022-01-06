import React from "react";
import {View, StyleSheet, FlatList, Text, ScrollView, SafeAreaView} from "react-native";

import {fontSizes, spacing} from "../../utils/sizes";
import { RoundedButton } from "../../components/RoundedButton";

const HistoryItem = ({ item, index }) => {
   var colorChecker = item.status > 1 ? 'red' : 'green';
   return (
     <Text style={styles.historyItem, {backgroundColor: colorChecker, color: "white", marginBottom: 10, padding: 5 }}>{item.subject}</Text>
   )
}

export const FocusHistory = ({focusHistory, onClear}) => {
  const clearHistory = () => {
    onClear();
  }

  return (
    <>
      <SafeAreaView style={{flex: 0.5, alignItems: 'center', }}>
        {focusHistory.length != 0 ? (
        <>
        <Text style={styles.title}>Things we've focused on </Text>
          <ScrollView style={{flex: 0.5, width: "100%"}}>
            <FlatList
              style={{flex: 1}}
              contentContainerStyle={{ flex: 1, alignItems: 'center' }}
              data={focusHistory}
              renderItem={HistoryItem}
            />
          </ScrollView>
          <View style={styles.clearContainer}>
            <RoundedButton style={{paddingTop: 19}} size={75}  title="Clear" pressDec={() => onClear()} />
          </View>
        </>
        ) : <Text></Text>}
      </SafeAreaView>
      
    </>
  );
};

const styles  = StyleSheet.create( {
  historyItem: {
    fontSize: fontSizes.md
  },
  title: {
    color: 'white',
    fontSize: fontSizes.lg
  },
  clearContainer: {
    alignItems: 'center',
    padding: spacing.md
  }
})