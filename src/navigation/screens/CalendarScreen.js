import * as React from "react";
import react, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Modal} from "react-native";
import {Calendar, CalendarList, Agenda} from "react-native-calendars";
import Day from "react-native-calendars/src/calendar/day";

export default function CalendarScreen({navigation}) {
    const [showModal,setShowModal] = useState(false);
    return(
        <View style={StyleSheet.header}>
          <Text style={styles.Text}
            onPress={() => navigation.navigate('Home')}>
            Calendar Screen
          </Text>
          
          <View>

           <TouchableOpacity style={styles.button} onPress={() => setShowModal(true)}>
           <Text style={styles.CalText}>Calendar</Text>
            </TouchableOpacity>

           <Modal visible={showModal} animationType="fade">
           <Calendar style={styles.calendarComp} onDayPress={() => {
            console.log(Date)
            setShowModal(false)
            }}
            onMonthChange={() => {}}
                initialDate={"2023-11-21"}
               // minDate={""}
              //  maxDate={""}
              //  hideExtraDays: true
              //  disableArrowLeft: true
              //  disableArrowRight: true
              //  hideArrows: true
              //  hideDayNames: true
             // markedDates={{
             //   '2023-11-26': {
              //      marked: true, 
              //      dotColor: 'red', 
              //      selected: true, 
               //     selectedColor: 'purple',
               //     selectedTextColor: 'white'}}} 

               //multi Dot
            //    markingType={'multi-dot'}
            //    markedDates={{
            //     '2023-11-26': {dots: [{color: 'red'},{color: 'green'}], 
            //     selected:true, selectedColor: 'lightblue', selectedTextColor: 'black'},
            //     '2023-11-28': {dots: [{color: 'orange'}]}
            //     }}
            //Periods
            markingType={'period'}
            markedDates={{
                '2023-11-14': {startingDay: true, color: "lightgreen"},
                '2023-11-15': {marked: true, color:"lightgreen",dotColor: 'transparent'},
                '2023-11-16': {marked: true, color:"lightgreen", dotColor: 'transparent'},
                '2023-11-17': {endingDay: true, color:"lightgreen"},
                '2023-11-26': {startingDay: true, endingDay: true, color: 'orange'}
            }}
                    />
           </Modal>

          </View>
        </View>

    );
}

const styles = StyleSheet.create({
    header:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",


    },
    Text:{
        fontSize: 26,
        fontWeight:"bold",
    },
    button:{
        backgroundColor: 'black',
        borderRadius: 10,
        margin: 40 ,
        padding: 5,
        width: 200,
        alignItems: "center",   
        left: 30,
    },
    CalText:{
        color: '#fff',
        fontSize: 22,
    },
    calendarComp:{
        borderRadius: 10,
        elevation: 4,
        margin: 10,

    },
});