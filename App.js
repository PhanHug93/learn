import {
    StyleSheet,
    StatusBar,
    SafeAreaView,
    FlatList,
    Button,
    View,
    ImageBackground,
} from "react-native";
import React, {useState} from "react";
import GoalInput from "./GoalInput";
import GoalItem from "./GoalItem";
import StartGameScreen from "./screens/StartGameScreen";
import {LinearGradient} from 'expo-linear-gradient';
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';

function Cat() {
    const [modalIsVisible, setVisible] = useState(false);
    const [arrayText, setArrayText] = useState([]);

    function handleModalVisible(isVisble) {
        setVisible(isVisble);
    }

    function handleData(originText) {
        setArrayText((currentData) => [
            ...currentData,
            {text: originText, id: Math.random().toString()},
        ]);
    }

    function handleDeleteDataById(id) {
        setArrayText((currentData) => {
            return currentData.filter((goal) => goal.id !== id);
        });
    }

    function handleClick(textValue) {
        handleData(textValue);
        handleModalVisible(false);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Button
                title="Add new Goal"
                color={"gray"}
                onPress={() => handleModalVisible(true)}
            />
            <GoalInput
                modalVisible={modalIsVisible}
                onAddGoal={handleClick}
                onBack={() => handleModalVisible(false)}
            />
            <View
                style={{
                    width: "100%",
                    padding: 15,
                    backgroundColor: "red",
                }}>
                <FlatList
                    style={{
                        backgroundColor: "#a3b5d8",
                    }}
                    data={arrayText}
                    renderItem={(itemData) => {
                        return (
                            <GoalItem
                                text={itemData.item.text}
                                id={itemData.item.id}
                                onDeleteGoal={(id) => {
                                    handleDeleteDataById(id);
                                }}
                            />
                        );
                    }}
                    keyExtractor={(item, index) => {
                        return item.id;
                    }}
                    alwaysBounceVertical={false}
                />
            </View>
        </SafeAreaView>
    );
}

export default function App() {
    const [numberPicked, setNumberPicked] = useState();
    const [gameOver, setGameOver] = useState(false);
    const [fontsLoaded] = useFonts({
        'regular': require('./assets/fonts/cs_regular.ttf'),
        'bold': require('./assets/fonts/cs_bold.ttf'),
    });
    if (!fontsLoaded) {
        return <AppLoading/>;
    }

    function handleBackToHome(){
        setNumberPicked(null)
        setGameOver(false)
    }

    function handleNumberPicked(number) {
        setNumberPicked(number);
    }

    function handleGameOver() {
        setGameOver(true)
    }

    let screen = <StartGameScreen onPickNumber={handleNumberPicked}/>

    if (numberPicked) {
        screen = <GameScreen
            excludeNumber={numberPicked}
            onGameOver={handleGameOver}
            onBackPress={handleBackToHome}
        />
    }
    if (gameOver) {
        screen = <GameOverScreen onBackHome={handleBackToHome}/>
    }
    return <LinearGradient colors={[Colors.bgColorStart, Colors.bgColorEnd]} style={styles.rootScreen}>
        <ImageBackground
            source={require('./assets/images/corgi.jpg')}
            resizeMode='contain'
            style={styles.rootScreen}
            imageStyle={styles.backgroundImage}
        >
            <SafeAreaView style={styles.safeview}>{screen}</SafeAreaView>
        </ImageBackground>
    </LinearGradient>
}
const styles = StyleSheet.create({
    safeview: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    rootScreen: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.25,
    },
    container: {
        flex: 1,
        backgroundColor: "green",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});
