import React from 'react';
import { Alert } from 'react-native';
import {View} from 'react-native';
import MainContainer from '../../../components/organisms/DSCMainContainer';
import { DSCTitle } from '../../../components/atoms/DSCTitle';
import { Size } from '../../../components/StyleGuide/SizeGuide';
import { DefaultButton } from '../../../components/atoms/DSCButton';
import { styles } from './registerStyles';
import { DefaultTextField } from '../../../components/atoms/DSCTextField';
import useProducts from '../../Hooks/useProducts';
import UseCurrencyHelper from '../../../Helpers/currency';

export const RegisterView: React.FC = () => {
  const {produto, dispatch, registerNewProduct} = useProducts();
  const {convertCurrencyString} = UseCurrencyHelper();

  return (
    <MainContainer>
      <View style={styles.container}>
        <DSCTitle text="Cadastro de produto" size={Size.FontSize.small} />
       
        <View style={styles.inputContainer}>
          <DefaultTextField 
          placeholder={'Nome do produto'} 
          value={produto.nome} 
          onChangeText={(text)=> {dispatch({type: 'SET_NOME', payload: text})}}/>

          <DefaultTextField 
          placeholder={'Taxa de juros anual (%)'} 
          value={produto.taxaJurosAnual} 
          keyboardType='numeric'
          onChangeText={(text)=> {dispatch({type: 'SET_TAXA_JUROS', payload: convertCurrencyString(text)})}}/>

          <DefaultTextField 
          placeholder={'Prazo máximo (meses)'} 
          value={produto.prazoMaximoMeses} 
          keyboardType='number-pad'
          onChangeText={(text)=> {dispatch({type: 'SET_PRAZO_MAXIMO', payload: Number(text)})}}/>
      </View>
        
      </View>
      <View style={{ flex: 1 }} />
      <DefaultButton 
      title="Cadastrar"
      isDisabled= {produto.nome === '' || produto.taxaJurosAnual === '' || produto.prazoMaximoMeses === ''}
      onPress={registerNewProduct} />
    </MainContainer>
  );
};

export default RegisterView;
