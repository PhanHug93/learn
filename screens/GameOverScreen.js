import {Text, StyleSheet, View, Image} from "react-native"
import Title from "../components/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";

function GameOverScreen({onBackHome}) {
    return <View style={styles.rootContainer}>
        <Title title={'GAME OVER'}/>
        <View style={styles.imageContainer}>
            <Image
                style={styles.image}
                source={require('../assets/images/corgi.jpg')}
            />
        </View>
        <View>
            <Text style={styles.summaryText}>Android DEV: <Text style={styles.highlight}>React Native</Text> Demo
                by <Text style={styles.highlight}>BAP</Text> team</Text>
        </View>
        <PrimaryButton onPress={onBackHome}>Start new game</PrimaryButton>
    </View>;
}

export default GameOverScreen;
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    imageContainer: {
        borderRadius: 150,
        width: 300,
        height: 300,
        borderWidth: 3,
        borderColor: Colors.contentColor,
        overflow: 'hidden',
        marginVertical: 56
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontFamily: 'regular',
        textAlign: 'center',
        fontSize: 24,
        marginVertical: 25,
    },
    highlight: {
        fontFamily: 'bold',
        color: 'green',
        fontSize: 33
    }
});