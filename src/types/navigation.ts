import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type MainRouterParamList = {
  Homepage: undefined;
  Detail: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
};

export type MainRouterScreenProps<T extends keyof MainRouterParamList> =
  NativeStackScreenProps<MainRouterParamList, T>;
