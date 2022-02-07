import React, { useCallback, useState } from 'react';
import { FlatList, View, Text, TouchableOpacity, Alert } from 'react-native';
import useMount from 'react-use/lib/useMount';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import WeatherService from "../../services/WeatherService";
import StorageService from "../../services/StorageService";
import { StorageKeys } from '../../consts/storage';
import { Weather } from '../../types/weather';
import convertToCelsius from '../../utils/convertToCelsius';
import { AvalibleCity } from '../../types/AvalibleCity';
import { Temp } from '../../types/temp';
import { Screens } from "../../consts/navigation"
import Flex from '../../components/Flex';
import Header from '../../components/header/Header';
import Items from '../../components/Items/Items';
import style from './MasterScreen.style';

interface MasterScreenProps { }

const MasterScreen = (props: MasterScreenProps) => {
  const { navigate } = useNavigation();
  const { t } = useTranslation();

  const [weather, setWeather] = useState<Weather[]>([]);
  const [avalibleCity, setAvalibleCity] = useState<AvalibleCity[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);


  useMount(() => {
    getWeather()
  });

  const getAvalibleCities = (data: Weather[]) => {
    const sortedArray = data.sort(function (a, b) {
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
  };

  const getWeather = useCallback(async () => {
    setRefreshing(true)
    WeatherService.getWeather().then((response) => {
      setWeather(response.data);
      getAvalibleCities(response.data)
      StorageService.set(StorageKeys.WeatherData, response.data);
    }).catch(() => {
      StorageService.get(StorageKeys.WeatherData).then((items) => {
        getAvalibleCities(items)
        setWeather(items);
      })
        .catch(error =>{
          Alert.alert(t('error-message-title'),t('error-message-body'))
        })
    })
    setRefreshing(false)
  }, [weather]);


  const renderItem = ({ item }) => (
    <Items image={item.picture} title={item.name} onPress={() => {
      const newArray: Temp[] = [];
      weather.forEach(obj => {
        if (item.name === obj.city.name) {
          var newElement: Any = {}
          newElement.date = Date.parse(obj.date);
          newElement.temp = convertToCelsius(obj.temp, obj.tempType)
          newArray.push(newElement)
        }
      })
      navigate(Screens.Home.Details, {
        data: newArray.sort(function (x, y) {
          return x.date - y.date;
        }), title: item.name
      })
    }} />



  );

  return (
    <Flex style={style.container}>
      <Header header={t('title')} backButton ></Header>
      <FlatList
        data={avalibleCity}
        renderItem={renderItem}
        refreshing={refreshing}
        onRefresh={() => getWeather()}
      />
    </Flex>
  );
};

export default MasterScreen;

