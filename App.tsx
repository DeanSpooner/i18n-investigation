import React from "react";
import { Text, View, StyleSheet } from "react-native";
import "./i18n"; // Import the i18n configuration
import { useTranslationWithFunction } from "./useTranslationWithFunction";

const App = () => {
  const { translate } = useTranslationWithFunction();

  const team = translate("misc.teamA")();
  const scoreA = 1234567;
  const scoreB = 1;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {translate("instructions.howManyPointsDidXScoreInTotal")(team, scoreA)}
      </Text>
      <Text style={styles.text}>
        {translate("instructions.theyScoredNumPoints")(scoreA)}
      </Text>
      <Text style={styles.text}>
        {translate("instructions.theyScoredNumPoints")(scoreB)}
      </Text>
      <Text style={styles.text}>
        {translate("instructions.iAmOnlyInEnglish")()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  text: {
    fontSize: 18,
    color: "#333",
  },
});

export default App;
