import { MenuLink } from '../../types';

export const sideMenu: ReadonlyArray<MenuLink> = [
  {
    title: 'Home',
    icon: '🏠',
    to: '/',
  },
  {
    title: 'Catalog',
    icon: '📦',
    to: '/catalog',
    children: [
      {
        title: 'Auto',
        icon: '🚗',
        to: '/auto',
        children: [
          {
            title: 'Audi',
            to: '/auto/audi',
            children: [
              {
                title: 'A4',
                to: '/auto/audi/a4',
                children: [
                  {
                    title: 'V (B9) Restyle',
                    to: '/auto/audi/a4/v-b9-restyle',
                    children: [
                      {
                        title: 'Sedan',
                        to: '/auto/audi/a4/v-b9-restyle/sedan',
                      },
                    ],
                  },
                  {
                    title: 'IV (B8)',
                    to: '/auto/audi/a4/iv-b8',
                    children: [
                      {
                        title: 'Sedan',
                        to: '/auto/audi/a4/iv-b8/sedan',
                      },
                      {
                        title: 'Universal',
                        to: '/auto/audi/a4/iv-b8/universal',
                      },
                    ],
                  },
                ],
              },
              {
                title: 'Q3',
                to: '/auto/audi/q3',
                children: [
                  {
                    title: 'III (8S)',
                    to: '/auto/audi/q3/iii-8s',
                    children: [
                      {
                        title: 'Cupe',
                        to: '/auto/audi/q3/i-8u/cupe',
                      },
                    ],
                  },
                  {
                    title: 'II (F3)',
                    to: '/auto/audi/q3/ii-f3',
                    children: [
                      {
                        title: 'SUV',
                        to: '/auto/audi/q3/ii-f3/suv',
                      },
                    ],
                  },
                ],
              },
              {
                title: 'TT',
                to: '/auto/audi/tt',
                children: [
                  {
                    title: 'I (8U)',
                    to: '/auto/audi/q3/i-8u',
                    children: [
                      {
                        title: 'SUV',
                        to: '/auto/audi/q3/i-8u/suv',
                      },
                    ],
                  },
                  {
                    title: 'II (F3)',
                    to: '/auto/audi/q3/ii-f3',
                    children: [
                      {
                        title: 'SUV',
                        to: '/auto/audi/q3/ii-f3/suv',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: 'Moto',
        icon: '🏍',
        to: '/moto',
        children: [],
      },
    ],
  },
  {
    title: 'Logout',
    icon: '🏠',
    action: () => console.log('Logout'),
  },
];
