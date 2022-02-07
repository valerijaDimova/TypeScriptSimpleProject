import { RouteProp } from '@react-navigation/native';

type BaseProps = { title?: string };

export type HomeStackParamList = {
    Master: BaseProps;
    Details: BaseProps;
  };