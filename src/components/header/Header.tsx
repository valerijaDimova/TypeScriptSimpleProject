import React from 'react';
import { TouchableOpacity, Dimensions,Image } from 'react-native';


import Flex from '../Flex';
import Text from '../text/Text';

import styles from './Header.style';


import { useNavigation } from '@react-navigation/native';
import Colors  from '../../styles/Colors';
const { width } = Dimensions.get('screen');

interface Props {
  header: string;
  backButton?: boolean;
}

const Header: React.FC<Props> = ({ header,backButton }) => {
  const { goBack } = useNavigation();

  return (
    <Flex style={styles.baseContainer}>
      {
        backButton ?? <Flex>
        <TouchableOpacity onPress={() => goBack()}>
          <Image style={{width:20,height:20,tintColor: Colors.White}} source={require('../../assets/icons/arrow-left-small.png')} />
        </TouchableOpacity>
      </Flex>
      }
      
      <Flex marginHorizontal={5} paddingLeft={10} width={width - 100} alignSelf={'center'}>
        <Text
          fontWeight="bold"
          align="center"

          fontSize="h3"
          numberOfLines={1}
          adjustsFontSizeToFit={true}
         
        >
          {header}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Header;
