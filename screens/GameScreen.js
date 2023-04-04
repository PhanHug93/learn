import {useState, useEffect} from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";
import GuessText from "../components/GuessText";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Ionicons from '@expo/vector-icons/Ionicons';

function generateRandomNumber(min, max, exclude) {
    try {
        const rndNumber = Math.floor(Math.random() * (max - min) + min);
        if (rndNumber === exclude) {
            return generateRandomNumber(min, max, exclude);
        } else {
            return rndNumber;
        }
    } catch (e) {
        return 8;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({excludeNumber, onGameOver, onBackPress}) {
    const [numbersLog, setNumberLogs] = useState([]);

    const initialGuessNumber = generateRandomNumber(
        minBoundary,
        maxBoundary,
        excludeNumber
    );
    const [guessNumber, setGuessNumber] = useState(initialGuessNumber)

    useEffect(() => {
        if (initialGuessNumber > excludeNumber) {
            onGameOver()
        }
    }, [excludeNumber, guessNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, [numbersLog])

    function handlePlus() {
        nextGuessHandler('greater')
    }

    function handleMinus() {
        nextGuessHandler('lower')
    }

    function nextGuessHandler(direction) {
        let newRndNumber = 0;
        if (direction === 'lower') {
            maxBoundary = excludeNumber;
            newRndNumber = generateRandomNumber(minBoundary, maxBoundary, excludeNumber);
        } else {
            minBoundary = excludeNumber;
            newRndNumber = generateRandomNumber(minBoundary, maxBoundary, excludeNumber);
        }
        setGuessNumber(newRndNumber);
        setNumberLogs((oldData) => [newRndNumber, ...oldData])
    }

    return <View style={styles.rootContainer}>
        <Title title={"Opponent's Guess"}/>
        <View style={styles.guessContainer}>
            <GuessText content={guessNumber}/>
        </View>
        <View marginTop={24}>
            <Text>Higher or Lower</Text>
            <View style={styles.buttonsContainer}>
                <PrimaryButton onPress={handlePlus}>
                    <Ionicons name="md-remove" size={32} color="green"/>
                </PrimaryButton>
                <PrimaryButton onPress={handleMinus}>
                    <Ionicons name="md-add" size={32} color="green"/>
                </PrimaryButton>
            </View>
        </View>
        <Text>LOG ROUNDS {numbersLog.length}</Text>
        <FlatList data={numbersLog}
                  renderItem={(item) => <Title title={item.item}/>}
                  keyExtractor={(item) => item}
        />
        <PrimaryButton onPress={onBackPress}>OnBack</PrimaryButton>
    </View>;
}

export default GameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 56,
        paddingHorizontal: 24,
        flexDirection: 'column'
    },
    guessContainer: {
        marginTop: 30
    },
    buttonsContainer: {
        alignItems: 'center',
        marginVertical: 24,
        flexDirection: 'column',
    }
})