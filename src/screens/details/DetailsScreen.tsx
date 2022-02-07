import * as React from 'react';
import { StyleSheet,FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Flex from '../../components/Flex';
import Header from '../../components/header/Header';
import SimpleRow from '../../components/simpleRow/SimpleRow';

interface DetailsScreenProps {}

const DetailsScreen = (props: DetailsScreenProps) => {
  const { params } = useRoute();
  const renderItem = ({ item }) => (
    <SimpleRow title={item.temp}/>
  );
  return (
   
  
    <Flex style={styles.container}>
      <Header header={params.title} ></Header>
      <FlatList
        data={params.data}
        renderItem={renderItem}
        keyExtractor={item => item.title + Math.random().toString()}
      />
    </Flex>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {}
});
