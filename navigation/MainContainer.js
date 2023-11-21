import * as React from "react";
import { NavigationContainer }  from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

//Screens
import HomeScreen from './screens/HomeScreen';
import EventsScreen from './screens/EventsScreen';
import CalendarScreen from './screens/CalendarScreen';
import BulletinScreen from './screens/BulletinBoardScreen';
import ProfileScreen from './screens/ProfileScreen';

// Screen names
const homeName = 'Home';
const eventName = 'Events';
const calendarName = 'Calender';
const bulletinName = 'Bulletin';
const profileName = 'Profile';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName={homeName} 
            screenOptions={
                ({route}) => ({ tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (rn === eventName) {
                        iconName = focused ? 'newspaper' : 'newspaper-outline'
                    } else if (rn === calendarName) {
                        iconName = focused ? 'calendar' : 'calendar-outline'
                    } else if (rn === bulletinName) {
                        iconName = focused ? 'clipboard' : 'clipboard-outline'
                    } else if (rn === profileName) {
                        iconName = focused ? 'person-circle' : 'person-circle-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                },
             })}>

             <Tab.Screen name={homeName} component={HomeScreen}/>
             <Tab.Screen name={eventName} component={EventsScreen}/>
             <Tab.Screen name={calendarName} component={CalendarScreen}/>
             <Tab.Screen name={bulletinName} component={BulletinScreen}/>
             <Tab.Screen name={profileName} component={ProfileScreen}/>

            </Tab.Navigator>
            </NavigationContainer>        
    );
}
