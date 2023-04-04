import { Text, StyleSheet, View } from "react-native"
import Colors from "../constants/colors";
function GuessText({ content }) {
    return <View>
        <Text style={styles.text}>{content}</Text>
    </View>
}
export default GuessText;

const styles = StyleSheet.create({
    text: {
        fontSize: 35,
        fontWeight: 'bold',
        color: Colors.contentColor,
        textAlign: 'center',
        borderWidth: 2,
        marginHorizontal: 55,
        borderColor: Colors.contentColor,
        padding: 30,
    }
})