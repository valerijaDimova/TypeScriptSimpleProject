import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import Flex from '../Flex';
import Text from '../text/Text';
import style from './SimpleRow.style';

interface SimpleRow {
   title: string;
}

const SimpleRow: React.FC<SimpleRow> = ({
    title,
}) => {
    return (
        <Flex style={style.container} >
            <Flex>
                <Text color='danger' align='center' fontSize='h4' style={style.text}>{title + " C°"}</Text>
            </Flex>
        </Flex>
    );
};

export default SimpleRow;

const styles = StyleSheet.create({
    container: {}
});
