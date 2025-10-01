import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { MainRouterParamList } from '../types/navigation';
import { navigationRef } from '../utils/navigationService';
import { DetailPost, HomePage } from '../pages';

const Stack = createNativeStackNavigator<MainRouterParamList>();

const MainRouter = () => {
  const routeNameRef = React.useRef<keyof MainRouterParamList | undefined>(
    undefined,
  );

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute()!
          .name as keyof MainRouterParamList;
      }}
      onStateChange={async () => {
        const currentRouteName = navigationRef.getCurrentRoute()!
          .name as keyof MainRouterParamList;
        routeNameRef.current = currentRouteName;
      }}
    >
      <Stack.Navigator
        initialRouteName="Homepage"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Homepage" component={HomePage} />
        <Stack.Screen name="Detail" component={DetailPost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRouter;
