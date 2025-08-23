import React from 'react';
import {FlatList, View} from 'react-native';
import MainContainer from '../../../components/organisms/DSCMainContainer';
import { DefaultButton } from '../../../components/atoms/DSCButton';
import { styles } from './simulationStyles';
import { StackScreenProps } from '@react-navigation/stack';
import { SimulationStackParamList } from '../../../Navigation/SimulationNavigation';
import { DSCGroupField } from '../../../components/molecules/DSCGroupField';
import CardRow from './Components/CardRows';

type SimulationDetailsViewProps = StackScreenProps<SimulationStackParamList, 'detalhamento'>;

const SimulationDetailsView: React.FC<SimulationDetailsViewProps> = ({route}) => {
   const parcelas = route.params?.parcelas || [];

  return (
    <MainContainer customEdges={['bottom', 'left', 'right']}>
        <View style={styles.container}>
            <FlatList
            data={parcelas}
            keyExtractor={(_, index) => `parcela-${index}`}
            renderItem={({ item, index }) => (
                <DSCGroupField 
                  title={`Parcela ${index + 1}`} 
                  onPress={()=>{}}>
                    <CardRow                  
                      label="Valor da Parcela"
                      value={item.parcela}
                    />
                    <CardRow                  
                      label="Juros"
                      value={item.juros}
                    />
                    <CardRow                   
                      label="Amortização da dívida"
                      value={item.amortizacao}
                    />
                    <CardRow                   
                      label="Saldo devedor"
                      value={item.saldoDevedor}
                    />
                </DSCGroupField>
            )
        }/>
        </View>
        <View style={{ flex: 1 }} />
        <DefaultButton 
        title="Contratar"
        onPress={()=> {}} />
    </MainContainer>
    );
};

export default SimulationDetailsView;
