import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FPSGHome from "../screens/FPSGhome";
import FPSGSettings from "../screens/FPSGsettings";
import FPSGProfile from "../screens/FPSGprofile";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{ headerShown: false, headerTintColor: 'white' }}
            >
                <Stack.Screen name="Home" component={FPSGHome} />
                <Stack.Screen name="Settings" component={FPSGSettings}
                    options={{
                        animation: 'ios', headerShown: true, headerTitle: 'Configurar',
                        headerStyle: { backgroundColor: '#202020' }, headerTitleAlign: 'center'
                    }}
                />
                <Stack.Screen name="Profile" component={FPSGProfile} options={{
                    animation: 'slide_from_right',
                    headerShown: true, headerTransparent: true, headerTitle: ''
                }} />
            </Stack.Navigator>
    )
}