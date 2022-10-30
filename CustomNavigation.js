import React from "react";
import { createStackNavigator } from "@react-navigation/native-stack";

import Practics from "./screens/Practics";

const Stack = createStackNavigator()

const PracticsNav = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Practics"
                component={Practics}
            />
        </Stack.Navigator>
    )
}

export { PracticsNav }