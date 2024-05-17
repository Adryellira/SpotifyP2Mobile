import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Octicons } from '@expo/vector-icons';
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
                    tabBarStyle: { backgroundColor: '#121212', borderColor: '#121212' }, 
                    tabBarInactiveTintColor: '#A5A4A5', 
                    tabBarActiveTintColor: '#FFFFFF', 
                    tabBarHideOnKeyboard: true,
                    
                }}
            >
                <Tab.Screen name="HomeRoute" component={Routes} options={{
                    title: 'Início',
                    tabBarIcon: () => (
                        <Octicons name="home" size={24} color="#A5A4A5" />
                    )
                }} />
                <Tab.Screen name="SearchRoute" component={FPSGSearchRoutes} options={{
                    title: 'Buscar',
                    tabBarIcon: () => (
                        <Octicons name="search" size={24} color="#A5A4A5" />
                    )
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}