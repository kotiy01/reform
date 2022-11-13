import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import Practics from "./screens/Practics";
import Menu from "./screens/Menu";
import Account from "./screens/Account";
import Dialogs from "./screens/Dialogs";
import Breath from "./screens/Breath";
import Meditation from "./screens/Meditation";
import Settings from "./screens/Settings";

const Stack = createStackNavigator()

const HomeNavigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Home"
                component={Home}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="Practics"
                component={Practics}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="Dialogs"
                component={Dialogs}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="Breath"
                component={Breath}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="Meditation"
                component={Meditation}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}
export { HomeNavigation }

const MenuNavigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Menu"
                component={Menu}    
                options={{headerShown: false}}
            />

        </Stack.Navigator>
    )
}
export { MenuNavigation }

const AccountNavigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Account"
                component={Account}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Settings"
                component={Settings}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}
export { AccountNavigation }