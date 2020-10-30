import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import InsertRestaurant from '../Screens/Registration/InsertRestaurantScreen'
import Booking1Screen from '../Screens/Booking/Booking1Screen';
import SearchToolScreen from '../Screens/Booking/SearchToolScreen';
import InsertEmailAddress from '../Screens/Registration/InsertEmailAddressScreen';
import OpeningDaysScreen from '../Screens/Registration/OpeningDaysScreen';
import InsertSocialsScreen from '../Screens/Registration/InsertSocialsScreen';
import InsertMenuScreen from '../Screens/Registration/InsertMenuScreen';
import OpeningScreen from '../Screens/Restaurant/OpeningHours';
import HallsScreen from '../Screens/Restaurant/SeatsAndHalls';
import SocialScreen from '../Screens/Restaurant/SocialLinkRestaurant';
import MenuScreen from '../Screens/Restaurant/MenuRestaurant';
import ChooseRoleScreen from '../Screens/Registration/ChooseRoleScreen';
import UserNameSurnameScreen from '../Screens/Registration/UserNameSurnameScreen';
import ChooseCategoryScreen from '../Screens/Registration/ChooseCategoryScreen';
import PaymentMethodScreen from '../Screens/Registration/PaymentMethodScreen';
import InsertDishScreen from '../Screens/Registration/InsertDishScreen';
import SearchScreen from '../Screens/SearchScreen';
import StatsScreen from '../Screens/StatsScreen';
import GoalScreen from '../Screens/GoalsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from '../Screens/ProfileScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import { Ionicons } from '@expo/vector-icons';
import LoginApp from '../LoginAPIKEY';
import FiltersScreen from '../Screens/FiltersScreen';
import UploadScreen from '../Components/Upload'; 

//The Login is inside the StackNavigator, then the stack call the Drawer and the Drawer call the Tab ohh where do you want to access the 
// userid in this file? 
// actually for that you need to use react context. are you familiar with that? Lol, let me try

const RestaurantNavigator = () => {
    const Stack = createStackNavigator();  

    return(
        <Stack.Navigator initialRouteName="Skip">
          <Stack.Screen name="Upload"component={UploadScreen} />
          <Stack.Screen name="Opening"component={OpeningScreen} options={{headerShown: false}} />
          <Stack.Screen name="Email"component={InsertEmailAddress}/>
          <Stack.Screen name="SeatAndHalls"component={HallsScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Social"component={SocialScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Menu"component={MenuScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Restaurant"component={InsertRestaurant}/>
          <Stack.Screen name='Skip' component = {DrawerNavigator} options={{headerShown: false}}/>
          <Stack.Screen name="ChooseRole"component={ChooseRoleScreen}/>
          <Stack.Screen name="UserNameSurname"component={UserNameSurnameScreen}/>
          <Stack.Screen name="ChooseCategory"component={ChooseCategoryScreen}/>
          <Stack.Screen name="PaymentMethod"component={PaymentMethodScreen}/>
          <Stack.Screen name="SearchTool"component={SearchToolScreen}/>
          <Stack.Screen name="Booking1"component={Booking1Screen}/>
          <Stack.Screen name="OpeningDays"component={OpeningDaysScreen}/>
          <Stack.Screen name="InsertSocials"component={InsertSocialsScreen}/>
          <Stack.Screen name="InsertMenu"component={InsertMenuScreen}/>
          <Stack.Screen name="InsertDish"component={InsertDishScreen}/>
          <Stack.Screen name='Login' component={LoginApp}/>
          <Stack.Screen name="Settings"component={SettingsScreen}/>
          <Stack.Screen name="Filters"component={FiltersScreen} />
        </Stack.Navigator>
    )
}

const TabNav = () => {
    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator

        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
         let iconName;
         if (route.name === 'Search') {
            iconName = focused
            ? 'ios-search'
            : 'ios-search';
          } else if (route.name === 'Goals') {
            iconName = focused
            ? 'md-locate'
            : 'md-locate';
          }

          else if (route.name === 'Profile') {
            iconName = focused
            ? 'md-contact'
            : 'md-contact';
          }
          else if (route.name === 'Stats') {
            iconName = focused
            ? 'md-git-branch'
            : 'md-git-branch';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
                  },
                })}
                tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                }}

        initialRouteName="Search">

          <Tab.Screen name="Search"component={SearchScreen}/>
          <Tab.Screen name="Stats"component={StatsScreen}/>
          <Tab.Screen name="Goals"component={GoalScreen} />
          <Tab.Screen name="Profile"component={ProfileScreen} />
        </Tab.Navigator>
    )
}
//the skip page is a link to search you want to go to search?
// if you can manage to get the email some where near to drawernavigator i can do the rest
// ok i'll try to do that, we can catch up later or tomorrow
// as you wish. but whenever you find out the way to get the id just poke me. I will do the rest and upload that to github. ok?
//Ok, thank you so much!
// you are very cool to wokr with 
//you too!
// see you hahahah

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const [userId, setUserId] = useState(null); // I got the idea. 
  useEffect(() => {
    // please run the project and let me see the output

  }, []);

  return(
    <Drawer.Navigator>
    <Drawer.Screen name="HomeScreen"component={TabNav}/>
    <Drawer.Screen name="ContactUs"component={TabNav}/>
    <Drawer.Screen name="MyBookings"component={TabNav}/>
    <Drawer.Screen name="MyReviews"component={TabNav}/>
    <Drawer.Screen name="MyFavourites"component={TabNav}/>
    <Drawer.Screen name="InviteAFriend"component={TabNav}/>
  </Drawer.Navigator>
  )
}


export default RestaurantNavigator;
