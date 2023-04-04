import { View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View
      style={{
        backgroundColor: "purple",
        borderColor: "black",
        marginTop: 10,
        borderRadius: 4,
      }}>
      <Pressable
        onPress={props.onDeleteGoal.bind(this, props.id)}
        android_ripple={{ color: "#c1c1c1" }}
        style={({ pressed }) => pressed && { opacity: 0.5 }}>
        <Text style={{ fontSize: 20, color: "yellow", padding: 8 }}>
          {props.text}
        </Text>
      </Pressable>
    </View>
  );
}
export default GoalItem;
