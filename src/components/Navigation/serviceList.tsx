import { NavListT } from '../../types/types';
import { SvgSelector } from './SvgSelector';

export const serviceList: NavListT[] = [
  { value: <SvgSelector id={'search'} />, link: '/', id: 'search' },
  { value: <SvgSelector id={'shoppingcart'} />, link: '/shoppingcart', id: 'shoppingcart' },
];
