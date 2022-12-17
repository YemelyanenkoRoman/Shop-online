import { NavListT } from '../../types/types';
import { SvgSelector } from './SvgSelector';

export const serviceList: NavListT[] = [
  { value: <SvgSelector id={'search'} />, link: '/', id: 'search' },
  { value: <SvgSelector id={'shopping_cart'} />, link: '/', id: 'shopping_cart' },
];
