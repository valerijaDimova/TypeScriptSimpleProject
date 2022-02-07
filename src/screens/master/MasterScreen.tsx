import React, { useCallback, useState }  from 'react';
import { FlatList, View, Text,TouchableOpacity } from 'react-native';
import useMount from 'react-use/lib/useMount';
import { useNavigation } from '@react-navigation/native';

import WeatherService from "../../services/WeatherService";
import StorageService from "../../services/StorageService";
import { StorageKeys } from '../../consts/storage';
import { Weather } from '../../types/weather';
import convertToCelsius from '../../utils/convertToCelsius';
import { AvalibleCity } from '../../types/AvalibleCity';
import { Temp } from '../../types/temp';
import { Screens } from "../../consts/navigation"
interface MasterScreenProps {}

const MasterScreen = (props: MasterScreenProps) => {
 const { navigate } = useNavigation();
 const [weather, setWeather] = useState<Weather[]>([]);
 const [avalibleCity, setAvalibleCity] = useState<AvalibleCity[]>([]);


 useMount(() => {
   getWeather()
});

 const getWeather = useCallback(async () => {
  WeatherService.getWeather().then((response) => {
    setWeather(response.data);
    const sortedArray = response.data.sort(function(a, b) {
      return a.city.name.localeCompare(b.city.name);
    });
    const newArray: AvalibleCity[] = [];
    
    sortedArray.forEach(obj => {
      if (!newArray.some(o => o.name === obj.city.name)) {
        
        var newElement: Any = {}
        newElement.name = obj.city.name;
        newElement.picture = obj.city.picture;
    
        newArray.push(newElement)
      }
      setAvalibleCity(newArray)
    })


   StorageService.set(StorageKeys.WeatherData, response.data);
  }).catch(() => {
   StorageService.get<Weather[]>(StorageKeys.WeatherData).then((items) => setWeather(items)).catch( error => console.error("Error: ",error))
  })
}, [weather]);

 const renderItem = ({ item }) => (  <TouchableOpacity onPress={() => {
  const newArray: Temp[] = [];
 weather.forEach(obj => {
   if(item.name === obj.city.name){
    var newElement: Any = {}
    newElement.date = Date.parse(obj.date);
    newElement.temp = convertToCelsius(obj.temp,obj.tempType)
    newArray.push(newElement)
   }
 })
 console.log("This is the array: ",newArray )
   navigate(Screens.Home.Details, { data: newArray.sort(function(x, y){
    return x.date - y.date;
}) })
 } }>
  <Text >{item.name}</Text>
</TouchableOpacity>);
 
  return (
    <View>
      <FlatList
        data={avalibleCity}
        renderItem={renderItem}
      />
    </View>
  );
};

export default MasterScreen;

