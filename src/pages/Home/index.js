import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header'
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';

const list = [
    {
        id: 1,
        label: 'Boleto Luz',
        value: '154,32',
        date: '07/01/2023',
        type: 0 // despesas
    },
    {
        id: 2,
        label: 'Pix Cliente',
        value: '350,00',
        date: '06/01/2023',
        type: 1 // receita
    },
    {
        id: 3,
        label: 'Salário',
        value: '1.320,00',
        date: '05/01/2023',
        type: 1
    },
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="André"/>
        <Balance saldo="2.250,90" gasto="-574,65"/>
        <Actions/>
        <Text style={styles.title}>Últimas Movimentações</Text>
        <FlatList 
        style={styles.list}
        data={list}
        keyExtractor={ (item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={ ({item}) => <Moviments data={item}/>}
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list:{
    marginStart: 14,
    marginEnd: 14,

  }
});