import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Welcome } from "../assets/pages/Welcome";
import { UserIdentification } from "../assets/pages/UserIdentification";
import { Confirmation } from "../assets/pages/Confirmation";

import colors from "../styles/colors";
import { PlantSelect } from "../assets/pages/PlantSelect";

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white,
      },
    }}
  >
    <stackRoutes.Screen name="Welcome" component={Welcome} />

    <stackRoutes.Screen name="UserIdentification" component={UserIdentification} />

    <stackRoutes.Screen name="Confirmation" component={Confirmation} />

    <stackRoutes.Screen
    name="PlantSelect"
    component={PlantSelect}
    />
    

  </stackRoutes.Navigator>
);

export default AppRoutes;