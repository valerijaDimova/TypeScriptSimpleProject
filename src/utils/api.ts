import { AxiosRequestConfig } from 'axios';

import Config from '../consts/config';

const globalRequestConfig: AxiosRequestConfig = {
  headers: {
    Accept: 'application/json',
    ContentType: 'application/json',
  },
};

export const combineUrls = (url: string): string => {
  return `${Config.ApiUrl}${url}`;
};

export const combineConfig = (
  config: AxiosRequestConfig | undefined
): AxiosRequestConfig | undefined => {
  return { ...globalRequestConfig, ...config };
};
