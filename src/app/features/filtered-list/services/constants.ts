import { ItemFilteredList } from '../../../core/types/ItemFilteredList';

export const DEFAULT_TOTAL_PAGES: number = 0;
export const DEFAULT_CURRENT_PAGE: number = 1;
export const DEFAULT_LAST_PAGE: number = 0;
export const DEFAULT_HAS_NEXT_PAGE: boolean = false;
export const DEFAULT_ITEMS_PER_PAGE: number = 0;

export const DEFAULT_SEARCH: string = '';
export const DEFAULT_FORMAT: string = '';
export const DEFAULT_TYPE: string = '';

export default function  getFilteredListPreloader(length: number) {
  let arr: ItemFilteredList[] = []
  for (let i = 0; i < length; i++) {
    arr.push({
      id: i,
      title: {
        english: '',
      },
      format: '',
      type: '',
      startDate: {
        year: '',
        month: '',
        day: ''
      },
      meanScore: -1,
      genres: ''
    })
  }
  return arr;
}
