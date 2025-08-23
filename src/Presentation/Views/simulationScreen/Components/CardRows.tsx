import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../simulationStyles';
import UseCurrencyHelper from '../../../../Helpers/currency';

interface CardRowProps {
  label: string;
  value: string | number;
}

const CardRow: React.FC<CardRowProps> = ({ label, value }) => {
  const { formatCurrencyNumberToString } = UseCurrencyHelper();
  const isValueNumber = typeof value === 'number';

  return (
    <View style={styles.resultRow}>
      <Text style={styles.resultText}>{label}</Text>
      <Text style={styles.resultText}>
        {isValueNumber ? formatCurrencyNumberToString(value) : value}
      </Text>
    </View>
  );
};

export default CardRow;
