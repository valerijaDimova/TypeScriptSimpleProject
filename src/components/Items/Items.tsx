import * as React from 'react';
import {  StyleSheet, TouchableOpacity, Image } from 'react-native';
import Flex from '../Flex';
import Text from '../text/Text';
import style from './Items.style';

interface ItemsProps { 
    image: string;
    title: string;
    onPress: () => void
}

const Items: React.FC<ItemsProps> = ({
    image,
    title,
    onPress,
  }) => {
    return (
        <Flex style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Flex style={style.container}>
                    <Flex>
                        <Image source={{
                            uri: image,
                            cache:"force-cache"
                            
                        }} 
                        style={style.image}
                        />
                    </Flex>
                    <Flex>
                        <Text color='danger' fontSize='h4' style={style.title}>{title}</Text>
                    </Flex>
                </Flex>
            </TouchableOpacity>
        </Flex>
    );
};

export default Items;

const styles = StyleSheet.create({
    container: {}
});
