import React from 'react';
import { FlatList, Text, View } from 'react-native';
import MainContainer from '../../../components/organisms/DSCMainContainer';
import { DSCTitle } from '../../../components/atoms/DSCTitle';
import { Size } from '../../../components/StyleGuide/SizeGuide';
import { styles } from './productsStyles';
import useProducts from '../../Hooks/useProducts';

export const ProductsView: React.FC = () => {
  const { products } = useProducts();

  return (
    <MainContainer>
      <View style={styles.container}>
        <DSCTitle text="Produtos disponíveis" size={Size.FontSize.small} />

        <FlatList
          data={products}
          style={styles.lastItem}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
                <View> 
                    <Text style={styles.itemName}>{item.nome} </Text>
                    <Text>juros {item.taxaJurosAnual}% ao ano</Text>
                    <Text>prazo máximo de {item.prazoMaximoMeses} meses</Text>
                </View>
            </View>
          )}
        />
      </View>
    </MainContainer>
  );
};

export default ProductsView;
