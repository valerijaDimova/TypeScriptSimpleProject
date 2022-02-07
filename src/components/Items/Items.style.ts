import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';
import Flex from '../../styles/Flex';
import Global from '../../styles/Global';

export default StyleSheet.create({
    container: {
        ...Flex.row,
        ...Global.m2,
        ...Global.p1,
        borderWidth: 1,
        borderColor: Colors.Heather,
        borderRadius: 5,
        backgroundColor: Colors.Porcelain


    },
    image: {
        borderRadius: 5,
        width: 130,
        height: 100
    },
    title: {
        ...Global.m2,
    }

});
