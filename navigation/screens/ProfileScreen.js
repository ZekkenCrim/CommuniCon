import * as React from "react";
import {View, Text, StyleSheet} from "react-native";

export default function ProfileScreen({navigation}) {
    return(
        <View style={StyleSheet.Profile}>
          <Text style={styles.Text}
            onPress={() => navigation.navigate('Home')}>
            Profile Screen
          </Text>
        </View>

    );
}

const styles = StyleSheet.create({
    Profile:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

    },
    Text:{
        fontSize: 26,
        fontWeight:"bold",
    },
});