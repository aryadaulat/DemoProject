import { createNavigationContainerRef } from '@react-navigation/native';
import type { MainRouterParamList } from '../types/navigation';

export const navigationRef = createNavigationContainerRef<MainRouterParamList>();

export function navigate(name: keyof MainRouterParamList, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as any, params);
  }
}

export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}

export function resetTo(routeName: keyof MainRouterParamList, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.reset({
      index: 0,
      routes: [{ name: routeName as any, params }],
    });
  }
}
