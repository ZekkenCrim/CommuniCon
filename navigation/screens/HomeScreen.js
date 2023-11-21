import * as React from "react";
import {View, Text, StyleSheet} from "react-native";

export default function HomeScreen({navigation}) {
    returm(
        <View style={StyleSheet.Home}>
          <Text style={styles.Text}
            onPress={() => alert('This is the "Home" Screen.')}>
            Home Screen
          </Text>
        </View>

    );
}

const styles = StyleSheet.create({
    Home:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

    },
    Text:{
        fontSize: 26,
        fontWeight:"bold",
    },
});