import React from 'react';
import { View, FlexStyle, StyleProp, ViewStyle } from 'react-native';

interface Props extends FlexStyle {
  style?: StyleProp<ViewStyle>;
}

const Flex: React.FC<Props> = ({ style, children, ...props }) => (
  <View style={[props, style]}>{children}</View>
);

export default Flex;
