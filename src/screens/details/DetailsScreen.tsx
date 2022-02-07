import * as React from 'react';
import { Text, View, StyleSheet,FlatList } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

interface DetailsScreenProps {}

const DetailsScreen = (props: DetailsScreenProps) => {
  const { params } = useRoute();
  const renderItem = ({ item }) => (
    <View>
      <Text>{item.temp+ " -----  " +  item.date}</Text>
    </View>
  );
  return (
   
  
    <View style={styles.container}>
      <FlatList
        data={params.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {}
});
