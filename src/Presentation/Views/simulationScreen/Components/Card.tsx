
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Size } from '../../../../components/StyleGuide/SizeGuide';
import { DSCSubtitle } from '../../../../components/atoms/DSCSubtitle';
import { StackNavigationProp } from '@react-navigation/stack';
import { SimulationStackParamList } from '../../../../Navigation/SimulationNavigation';
import { returnSimulation } from '../../../Hooks/useCalcs';
import { styles } from '../simulationStyles';
import { Colors } from '../../../../components/StyleGuide/ColorExtension';
import CardRow from './CardRows';

interface CardProps {
  item: returnSimulation;
  navigation?: StackNavigationProp<SimulationStackParamList>; 
  showInstallmentType?: boolean;
}

export const Card: React.FC<CardProps> = ({
  item,
  navigation,
  showInstallmentType = false,
}) => {
  
  return (
    <TouchableOpacity 
      style={styles.resultContainer}
      onPress={() => {
        if (navigation) {
          navigation.navigate('detalhamento', {parcelas: item.parcelas});
        }
      }}>

      {showInstallmentType && (
        <View style={{borderColor: Colors.bgNeutral3, borderBottomWidth: 1, paddingVertical: Size.Spacing.quark}}>
          <View style={{marginLeft: Size.Spacing.tiny}}>
            <DSCSubtitle text={`${item.tipo}`} size={Size.FontSize.micro}/>
          </View>
        </View>
      )}
      
      <View style={styles.content}> 
        <CardRow
          label={"Primeira Parcela"}
          value={item.parcelas[0].parcela}
        />
        <CardRow
          label={"Última Parcela"}
          value={item.parcelas[item.parcelas.length - 1].parcela}
        />
        <CardRow
          label={"Total com Juros"}
          value={item.valorTotalComJuros}
        />
        <CardRow
          label={"Taxa de Juros Mensal"}
          value={`${item.taxaDeJurosMensal}%`}
        />
        <Text style={[styles.resultText, {display: 'flex', width: '100%', textAlign: 'right', color: Colors.textPrimaryHighlight, fontWeight: '600', marginTop: Size.Spacing.nano}]}> 
          Ver mais {">"}
        </Text>
      </View>
      
    </TouchableOpacity>
  );
};

