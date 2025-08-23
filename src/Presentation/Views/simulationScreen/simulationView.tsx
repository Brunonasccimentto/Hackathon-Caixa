import React from 'react';
import { FlatList, Text, View } from 'react-native';
import MainContainer from '../../../components/organisms/DSCMainContainer';
import { DSCTitle } from '../../../components/atoms/DSCTitle';
import { Size } from '../../../components/StyleGuide/SizeGuide';
import { DefaultButton } from '../../../components/atoms/DSCButton';
import { DefaultTextField } from '../../../components/atoms/DSCTextField';
import { styles } from './simulationStyles';
import { PickerField } from './Components/Dropdown';
import { Produto } from '../../../Domain/Models/Products';
import useSimulationState from './simulationState';
import UseCurrencyHelper from '../../../Helpers/currency';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SimulationStackParamList } from '../../../Navigation/SimulationNavigation';
import { Card } from './Components/Card';

export const SimulationView: React.FC = () => {
  const {
    dispatch,
    simulation,
    products,
    makeSimulation,
    resultSimulation,
    clearSimulation,
  } = useSimulationState();
  const { formatCurrency } = UseCurrencyHelper();
  const navigation =
    useNavigation<StackNavigationProp<SimulationStackParamList>>();

  return (
    <MainContainer>
      <View style={styles.container}>
        <DSCTitle text="Simule o seu emprestimo" size={Size.FontSize.small} />

        <View style={styles.inputContainer}>
          <PickerField
            placeholder="Selecione um produto"
            value={simulation.produto}
            items={products}
            onChange={(value: Produto) => {
              if (value.nome !== simulation.produto) {
                clearSimulation()
              }
              dispatch({ type: 'SET_PRODUTO', payload: value.nome });
              dispatch({ type: 'SET_MAX_MESES', payload: value.prazoMaximoMeses});
            }}
          />

          <DefaultTextField
            placeholder={'qual o valor do empréstimo'}
            value={simulation.valorEmprestimo}
            keyboardType="number-pad"
            onChangeText={value =>
              dispatch({
                type: 'SET_VALOR_EMPRESTIMO',
                payload: formatCurrency(value),
              })
            }
          />

          <>
            <DefaultTextField
              placeholder={'em quantos meses'}
              value={simulation.meses}
              keyboardType="number-pad"
              onChangeText={value =>
                dispatch({ type: 'SET_MESES', payload: value })
              }
            />

            {simulation.produto !== '' && (
              <Text style={styles.message}>
                O produto {simulation.produto} tem prazo máximo de{' '}
                {simulation.maxMeses} meses.
              </Text>
            )}
          </>
        </View>

        <FlatList
          data={resultSimulation}
          keyExtractor={(_, index) => `simulation-${index}`}
          renderItem={({ item }) => (
            <Card
              item={item}
              navigation={navigation}
              showInstallmentType={true}
            />
          )}
        />
      </View>
      <View style={{ flex: 1 }} />
      <DefaultButton
        title="Fazer simulação"
        isDisabled={
          simulation.valorEmprestimo === '' ||
          simulation.meses === '' ||
          simulation.produto === ''
        }
        onPress={makeSimulation}
      />
    </MainContainer>
  );
};

export default SimulationView;
