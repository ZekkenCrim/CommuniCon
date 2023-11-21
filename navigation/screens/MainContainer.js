import * as React from 'react';
import { NavigationContainer }  from '@react-navigation/native';
import { createBottomTabNavigatior } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import HomeScreen from './HomeScreen';
import EventsScreen from './EventsScreen';
import CalendarScreen from './CalendarScreen';
import BulletinScreen from './BulletinBoardScreen';
import ProfileScreen from './ProfileScreen';

// Screen names
const homeName = 'Home';
const eventName = 'Events';
const calendarName = 'Calender';
const bulletinName = 'Bulletin';
const profileName = 'Profile';

const Tab = createBottomTabNavigatior();

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
                        iconName = focused ? 'event' : 'newspaper-outline'
                    } else if (rn === calendarName) {
                        iconName = focused ? 'calendar' : 'calendar-outline'
                    } else if (rn === bulletinName) {
                        iconName = focused ? 'list' : 'clipboard-outline'
                    } else if (rn === profileName) {
                        iconName = focused ? 'profile' : 'person-circle-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                },
             })}>

             <Tab.Screen name={homeName} component={HomeScreen}/>


            </Tab.Navigator>
            </NavigationContainer>        
    );
}