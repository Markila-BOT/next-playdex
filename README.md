## Getting Started

Imagine we have a vehicle catalog site. Please, implement a multilevel menu component `components/SideMenu/index.tsx` using data from the `useSideMenu` hook. Design example:

![alt text](https://i.stack.imgur.com/agMDJ.png)

Requirements:

1. You are not limited in using any packages/libraries. However do not use ones for implementing menu component.
2. Do not modify `useSideMenu`.
3. Each level should have a left indent similarly to the image above. Let's take `1rem` for the indent and formula `i * 1rem`, where `i` - is a level number. So for the first level the indent equals `0rem`, for the second = `1rem`, for the third one = `2rem`, etc.
4. Note that the number of menu levels is unlimited and may change from one vehicle types to another. For example, for the `Bikes` we may have less levels than for the `Cars` and for other types of vehicle it may differ.
5. Menu link which property `to` equals to the current url path should be highlighted by text color or background color.
6. Menu item may be either a navigation link or an item which can make some action (e.g. Logout). Please, check types `lib/types/navigation.ts` and `useSideMenu`.
7. Solution should be published online. For example, you can use [Stackblitz](https://stackblitz.com/edit/next-typescript?file=package.json) for that purpose.
