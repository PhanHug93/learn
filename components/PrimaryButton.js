import {TextInput, View, Text, Pressable, StyleSheet} from "react-native";
import Colors from "../constants/colors";

function PrimaryButton({children, onPress}) {

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({pressed}) =>
                    pressed
                        ? [styles.buttonInterContainer, styles.pressed]
                        : styles.buttonInterContainer
                }
                onPress={onPress}
                android_ripple={{color: Colors.rippleColor}}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden",
    },
    buttonInterContainer: {
        backgroundColor: Colors.buttonColor,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: Colors.contentBtnColor,
        fontSize: 25,
        textAlign: "center",
    },
    pressed: {
        opacity: 0.75,
    },
});
