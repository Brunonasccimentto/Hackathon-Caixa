import React from "react";
import RegisterView from "../Presentation/Views/registerScreen/registerView";
import { NavigationContainer, NavigatorScreenParams} from "@react-navigation/native";
import { createBottomTabNavigator, BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import ProductsView from "../Presentation/Views/productsScreen/productsView";
import { Colors } from "../components/StyleGuide/ColorExtension";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimulationNavigation, { SimulationStackParamList } from "./SimulationNavigation";

export type AppBottomTabParamList = {
  Cadastro: undefined;
  Produtos: undefined;
  Simulação: NavigatorScreenParams<SimulationStackParamList>;
};

const headerOptions: BottomTabNavigationOptions = {
  headerTitle: '',
  headerShown: true,
  headerBackButtonDisplayMode: 'minimal',
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: Colors.bgNeutral2,
    },
};

const BottomTab = createBottomTabNavigator<AppBottomTabParamList>();

const AppNavigation: React.FC = () => (
  <NavigationContainer>
    <BottomTab.Navigator initialRouteName="Cadastro" 
    screenOptions={({ route }) => ({
    ...headerOptions,
    // eslint-disable-next-line react/no-unstable-nested-components
    tabBarIcon: ({ focused, color, size }) => {
      let iconName: string;

      switch (route.name) {
        case 'Cadastro':
          iconName = focused ? 'person-add' : 'person-add-outline';
          size = 18;
          break;
        case 'Produtos':
          iconName = focused ? 'pricetags' : 'pricetags-outline';
          size = 18;
          break;
        case 'Simulação':
          iconName = focused ? 'calculator' : 'calculator-outline';
          size = 18;
          break;
        default:
          iconName = 'ellipse';
      }

      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: Colors.textWhite,
    tabBarInactiveTintColor: Colors.disabled,
    tabBarStyle: {
      backgroundColor: Colors.primaryHighlight,
      borderTopWidth: 0,
    },
  })}>
      <BottomTab.Screen name="Cadastro" component={RegisterView} />
      <BottomTab.Screen name="Produtos" component={ProductsView} />
      <BottomTab.Screen name="Simulação" component={SimulationNavigation} />
    </BottomTab.Navigator>
  </NavigationContainer>
);

export default AppNavigation;
