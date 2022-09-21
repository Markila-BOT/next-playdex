import { useRouter } from 'next/router';
import { MenuLink } from '../../types';

export const useSideMenu: () => ReadonlyArray<MenuLink> = () => {
  const router = useRouter();

  return [
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
          title: 'Cars',
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
                {
                  title: 'TT',
                  to: '/auto/audi/tt',
                  children: [
                    {
                      title: 'III (8S)',
                      to: '/auto/audi/q3/iii-8s',
                      children: [
                        {
                          title: 'Cupe',
                          to: '/auto/audi/tt/i-8u/cupe',
                        },
                      ],
                    },
                    {
                      title: 'I (B5)',
                      to: '/auto/audi/tt/i-b5',
                      children: [
                        {
                          title: 'Cupe',
                          to: '/auto/audi/tt/i-b5/cupe',
                        },
                        {
                          title: 'Sedan',
                          to: '/auto/audi/tt/i-b5/sedan',
                        },
                        {
                          title: 'Universal',
                          to: '/auto/audi/tt/i-b5/universal',
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
          title: 'Bikes',
          icon: '🏍',
          to: '/moto',
          children: [
            {
              title: 'BMW',
              to: '/moto/bmw',
              children: [
                {
                  title: 'F 650',
                  to: '/moto/bmw/f-650',
                },
                {
                  title: 'F 750',
                  to: '/moto/bmw/f-750',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Logout',
      icon: '🚪',
      action: () => {
        console.log('Logout…');
        router.push('/');
      },
    },
  ];
};
