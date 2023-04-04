import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

function GoalInput(props) {
  const [enterGoalText, setEnterGoalText] = useState("");

  function goalInputHandler(enterGoalText) {
    setEnterGoalText(enterGoalText);
  }

  function addGoalHandler() {
    props.onAddGoal(enterGoalText);
    setEnterGoalText("");
  }

  return (
    <Modal visible={props.modalVisible} animationType="fade">
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Input here....."
          onChangeText={goalInputHandler}
          placeholderTextColor="red"
          value={enterGoalText}
        />
        <View
          style={{
            flexWrap: 'nowrap',
            flexDirection:"column",
            justifyContent: 'center',
            alignContent: 'center',
            backgroundColor: "yellow",
            paddingVertical: 50,
          }}>
          <Button title="Tap here" onPress={addGoalHandler} />
          <Button title="Cancel" onPress={props.onBack}/>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    paddingHorizontal: 20,
    backgroundColor: "blue",
  },
  textInput: {
    width: "100%",
    paddingHorizontal: 14,
    alignSelf: "flex-start",
    marginTop: 20,
    marginEnd: 15,
    backgroundColor: "#d1d1d1",
    borderColor: "#1111",
    borderRadius: 4,
    borderWidth: 2,
    color: "blue",
  },
});
