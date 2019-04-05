import { FuseNavigation } from '@omega/core';

export const navigation: FuseNavigation[] = [
  {
    id: 'menu',
    title: 'Menu',
    type: 'group',
    children: [
      {
        id: 'home',
        title: 'Home',
        type: 'item',
        icon: 'home',
        url: '/home'
      },
      {
        id: 'forms',
        title: 'Forms',
        type: 'item',
        icon: 'aspect_ratio',
        url: '/forms'
      },
      {
        id: 'data-grid',
        title: 'Data Grid',
        type: 'item',
        url: '/data-grid',
        icon: 'format_list_bulleted'
      }
    ]
  }
];
