import * as React from "react";
import {View, Text, StyleSheet} from "react-native";

export default function EventsScreen({navigation}) {
    returm(
        <View style={StyleSheet.Event}>
          <Text style={styles.Text}
            onPress={() => navigation.navigate('Home')}>
            Events Screen
          </Text>
        </View>

    );
}

const styles = StyleSheet.create({
    Events:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

    },
    Text:{
        fontSize: 26,
        fontWeight:"bold",
    },
});