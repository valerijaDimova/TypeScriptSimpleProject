import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

type Style = ViewStyle | TextStyle | ImageStyle;

const crossCenter: Style = {
  alignItems: 'center',
};

const crossFlexStart: Style = {
  alignItems: 'flex-start',
};

const alignSpaceBetween: Style = {
  alignContent: 'space-between',
};

const crossFlexEnd: Style = {
  alignItems: 'flex-end',
};
const mainCenter: Style = {
  justifyContent: 'center',
};

const mainSpaceBetween: Style = {
  justifyContent: 'space-between',
};

const mainSpaceAround: Style = {
  justifyContent: 'space-around',
};

const center: Style = {
  ...mainCenter,
  ...crossCenter,
};

const column: Style = {
  flexDirection: 'column',
};

const row: Style = {
  flexDirection: 'row',
};

const fill: Style = {
  flex: 1,
};
const halfFill: Style = {
  flex: 1 / 2,
};

const centerFill: Style = {
  ...fill,
  ...center,
};

/**
 * @deprecated Use `Flex` component instead.
 */
export default StyleSheet.create({
  crossCenter,
  crossFlexEnd,
  mainCenter,
  mainSpaceBetween,
  center,
  centerFill,
  column,
  alignSpaceBetween,
  columnMainCenter: {
    ...column,
    ...mainCenter,
  },
  columnCrossCenter: {
    ...column,
    ...crossCenter,
  },
  columnCenter: {
    ...column,
    ...center,
  },
  row,
  rowMainCenter: {
    ...row,
    ...mainCenter,
  },
  rowMainSpaceBetween: {
    ...row,
    ...mainSpaceBetween,
  },
  rowMainSpaceAround: {
    ...row,
    ...mainSpaceAround,
  },
  rowCrossCenter: {
    ...row,
    ...crossCenter,
  },
  rowCrossFlexStart: {
    ...row,
    ...crossFlexStart,
  },
  rowCenter: {
    ...row,
    ...center,
  },
  fill,
  halfFill,
  selfCenter: {
    alignSelf: 'center',
  },
  selfStart: {
    alignSelf: 'flex-start',
  },
  selfEnd: {
    alignSelf: 'flex-end',
  },
});
