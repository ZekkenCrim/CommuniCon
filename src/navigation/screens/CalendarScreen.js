import * as React from "react";
import {View, Text, StyleSheet} from "react-native";

export default function CalendarScreen({navigation}) {
    return(
        <View style={StyleSheet.Calendar}>
          <Text style={styles.Text}
            onPress={() => navigation.navigate('Home')}>
            Calendar Screen
          </Text>
        </View>

    );
}

const styles = StyleSheet.create({
    Calendar:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

    },
    Text:{
        fontSize: 26,
        fontWeight:"bold",
    },
});