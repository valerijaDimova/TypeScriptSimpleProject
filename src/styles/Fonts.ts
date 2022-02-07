import { StyleSheet, Dimensions, PixelRatio, Platform } from 'react-native';

const { width } = Dimensions.get('screen');
const scale = width / 320;

export function normalize(size: number) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 4;
  }
}

export type FontSize =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'small'
  | 'medium'
  | 'regular'
  | 'large'
  | 'extraLarge';

export type FontWeight = 'normal' | 'semiBold' | 'bold';

const medium = normalize(14);
const regular = normalize(16);

const size: Record<FontSize, number> = {
  small: normalize(12),
  medium,
  regular,
  large: normalize(25),
  extraLarge: normalize(35),
  h6: medium,
  h5: regular,
  h4: normalize(18),
  h3: normalize(20),
  h2: normalize(22),
  h1: normalize(24),
};

export default StyleSheet.create({
  normal: {
    fontWeight: 'normal',
  },

  semiBold: {
    fontWeight: '500',
  },
  bold: {
    fontWeight: 'bold',
  },

  uppercase: {
    textTransform: 'uppercase',
  },
  regular: {
    fontSize: size.regular,
  },
  medium: {
    fontSize: size.medium,
  },
  small: {
    fontSize: size.small,
  },
  h1: {
    fontSize: size.h1,
  },
  h2: {
    fontSize: size.h2,
  },
  h3: {
    fontSize: size.h3,
  },
  h4: {
    fontSize: size.h4,
  },
  h5: {
    fontSize: size.h5,
  },
  h6: {
    fontSize: size.h6,
  },
  extraLarge: {
    fontSize: size.extraLarge,
  },
  large: {
    fontSize: size.large,
  },
});
