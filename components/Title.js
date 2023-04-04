import {Text, StyleSheet, View} from "react-native"

function Title({title}) {
    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
    </View>;
}

export default Title;

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
    },
    title: {
        width: '100%',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    }
})