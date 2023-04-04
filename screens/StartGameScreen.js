import {
    TextInput,
    View,
    StyleSheet,
    Alert,
} from "react-native";
import {useState} from 'react';
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

function StartGameScreen({onPickNumber}) {
    const [currentNumber, setCurrentNumber] = useState('');

    function handleInput(text) {
        setCurrentNumber(text)
    }

    function handleReset() {
        setCurrentNumber('')
    }

    function handleAlertCanceled() {
        console.log('Cancel Alert!!!')
    }

    function handleConfirm() {
        const chosenNumber = parseInt(currentNumber);
        if (isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 99) {
            Alert.alert('Android',
                'Invalid number!!!!',
                [{text: 'OK', style: 'destructive', onPress: handleReset},
                    {text: 'Cancel', style: 'cancel', onPress: handleAlertCanceled}]
            )
            return;
        }
        onPickNumber(chosenNumber);
    }

    return (
        <View style={styles.inputContainer}>
            <Title title={'Input value'}/>
            <TextInput
                value={currentNumber}
                style={styles.numberInput}
                keyboardType="number-pad"
                maxLength={2}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={handleInput}
            />
            <View style={styles.buttonContainer}>
                <View style={{flex: 1}}>
                    <PrimaryButton onPress={handleReset}>Reset</PrimaryButton>
                </View>
                <View style={{flex: 1}}>
                    <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: "#4e0329",
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: {width: 0, height: 50},
        shadowRadius: 6,
        shadowOpacity: 0.25,
        justifyContent: "center",
        alignItems: "center",
    },
    numberInput: {
        height: 50,
        width: 80,
        fontSize: 35,
        borderBottomColor: "#ddb52f",
        borderBottomWidth: 2,
        marginVertical: 30,
        color: "#ddb52f",
        fontWeight: "bold",
        textAlign: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        marginHorizontal: 25,
        marginBottom: 20
    },
});
