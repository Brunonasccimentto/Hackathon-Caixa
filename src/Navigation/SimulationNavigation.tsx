import { StackNavigationProp } from "@react-navigation/stack";
import { calcParcelas } from "../Presentation/Hooks/useCalcs";
import SimulationDetailsView from "../Presentation/Views/simulationScreen/simulationDetailsView";
import SimulationView from "../Presentation/Views/simulationScreen/simulationView";
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialDesignIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../components/StyleGuide/ColorExtension";

export type SimulationStackParamList = {
  detalhamento: {parcelas: calcParcelas[]};
  simulação: undefined;
};

const headerOptions: NativeStackNavigationOptions = {
  headerTitle: '',
  headerBackTitle: '',
  headerShown: true,
  headerBackButtonDisplayMode: 'default',
  headerShadowVisible: false,
  headerTintColor: Colors.primaryHighlight,
  headerStyle: {
    backgroundColor: Colors.bgNeutral2,
  },
  headerLeft: () => <BackButton />, 
};

function BackButton(): React.ReactNode {
  const navigation = useNavigation<StackNavigationProp<SimulationStackParamList>>();

  return (
    navigation.canGoBack() ?
    <MaterialDesignIcons
    name="arrow-left"
    size={24}
    color={Colors.primaryHighlight}
    onPress={navigation.goBack}
    />
    : <View/>
  );
}

const Stack = createNativeStackNavigator<SimulationStackParamList>();

const SimulationNavigation: React.FC = () => (
  <Stack.Navigator initialRouteName="simulação">
    <Stack.Screen 
      name="simulação" 
      component={SimulationView} 
      options={{headerShown: false}}
    />
    <Stack.Screen 
      name="detalhamento" 
      component={SimulationDetailsView} 
      options={{...headerOptions, headerTitle: 'Detalhamento'}}
    />
  </Stack.Navigator>
);

export default SimulationNavigation;