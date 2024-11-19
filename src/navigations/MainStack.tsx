import React from 'react';
import NavigationStrings from '../constants/NavigationStrings';
import * as Screens from '../screens/index';

export default function (Stack: any) {
  return (
    <>
      <Stack.Screen
        name={NavigationStrings.TABSCREEN}
        component={Screens.TABSCREEN}
      />
      <Stack.Screen
        name={NavigationStrings.COLLECTION}
        component={Screens.COLLECTION}
      />
      <Stack.Screen
        name={NavigationStrings.COLLECTION2}
        component={Screens.COLLECTION2}
      />
      <Stack.Screen
        name={NavigationStrings.VIEWITEM}
        component={Screens.VIEWITEM}
      />
    </>
  );
}
