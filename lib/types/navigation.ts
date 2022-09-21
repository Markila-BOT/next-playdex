import { UrlObject } from 'url';
import { Emoji, Icon } from './media';

type BaseLink = {
  readonly title: string;
  readonly icon?: Icon | Emoji;
};

export type NavigationLink = BaseLink & {
  readonly to: string | UrlObject;
};

export type ActionLink = BaseLink & {
  readonly action: () => void;
};

export type ParentLink = NavigationLink & {
  readonly children: ReadonlyArray<MenuLink>;
};

export type MenuLink = ParentLink | NavigationLink | ActionLink;
