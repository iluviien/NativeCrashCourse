import { View, StyleSheet, Text, Pressable } from "react-native";
function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalsText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    borderRadius: 15,

    margin: 8,
    backgroundColor: "#d2aee6"
  },
  pressedItem: {
    opacity: 0.5
  },
  goalsText: {
    color: "#a600ff",
    padding: 10
  }
});
