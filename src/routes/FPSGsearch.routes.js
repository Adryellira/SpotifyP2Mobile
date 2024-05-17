import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FPSGSearchMenu from "../screens/FPSGsearchmenu";
import FPSGSearch from "../screens/FPSGsearch";

const Stack = createNativeStackNavigator();

export default function FPSGSearchRoutes() {
    return (
        <Stack.Navigator
            initialRouteName="SearchMenu"
            screenOptions={{ headerShown: false, headerTintColor: 'white', }}
        >
            <Stack.Screen name="SearchMenu" component={FPSGSearchMenu} options={{ animation: 'none' }} />
            <Stack.Screen name="Search" component={FPSGSearch} options={{ animation: 'none' }} />
        </Stack.Navigator>
    )
}