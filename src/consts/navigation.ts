import { HomeStackParamList } from '../types/navigation'

type HomeScreens = keyof HomeStackParamList;

type Screens = { Home: Record<HomeScreens, HomeScreens> };

export const Screens: Screens = {
  Home: {
    Details: 'Details',
    Master: 'Master',
  },

};
