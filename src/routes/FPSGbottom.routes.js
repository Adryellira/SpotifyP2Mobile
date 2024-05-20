import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Octicons, Fontisto, Foundation } from '@expo/vector-icons';
import { Image, Pressable } from "react-native";
import FPSGSearchRoutes from "./FPSGsearch.routes";
import Routes from "./FPSGindex.routes";

const Tab = createBottomTabNavigator();

export default function NavBar() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="HomeRoute"
                backBehavior="order"
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: { backgroundColor: '#121212', borderColor: '#121212', height: '10%' },
                    tabBarInactiveTintColor: '#A5A4A5',
                    tabBarActiveTintColor: '#FFFFFF',
                    tabBarHideOnKeyboard: true,
                    tabBarIconStyle: { top: 8 },
                    tabBarLabelStyle: { bottom: 10 }
                }}
            >
                <Tab.Screen name="HomeRoute" component={Routes} options={{
                    title: 'Início',
                    tabBarIcon: ({ focused }) => (
                        focused
                            ? <Foundation name="home" size={30} color="white" />
                            : <Octicons name="home" size={24} color="#A5A4A5" />
                    )
                }} />
                <Tab.Screen name="SearchRoute" component={FPSGSearchRoutes} options={{
                    title: 'Buscar',
                    tabBarIcon: ({ focused }) => (
                        focused
                            ? <Image source={require('../../assets/buscar.png')} />
                            : <Octicons name="search" size={24} color="#A5A4A5" />
                    )
                }} />
                <Tab.Screen name="Biblioteca" component={FPSGSearchRoutes} options={{
                    tabBarIcon: () => (
                        <Image source={require('../../assets/biblioteca.png')} />
                    )
                }} />
                <Tab.Screen name="Premium" component={FPSGSearchRoutes} options={{
                    tabBarIcon: () => (
                        <Fontisto name="spotify" size={24} color="#A5A4A5" />
                    )
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}