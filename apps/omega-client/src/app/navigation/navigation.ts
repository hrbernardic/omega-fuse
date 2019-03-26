import { FuseNavigation } from '@omega/core';

export const navigation: FuseNavigation[] = [
  {
    id       : 'menu',
    title    : 'Menu',
    type     : 'group',
    children : [
      {
        id       : 'home',
        title    : 'Home',
        type     : 'item',
        icon     : 'input',
        url      : '/home'
      },
      {
        id       : 'forms',
        title    : 'Forms',
        type     : 'item',
        icon     : 'aspect_ratio',
        url      : '/forms'
      }
    ]
  }
];
