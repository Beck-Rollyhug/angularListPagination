import { ItemFilteredList } from '../../../core/types/ItemFilteredList';
import { FilterInfo } from "../../../core/types/FilterInfo";

export const DEFAULT_TOTAL_PAGES: number = 0;
export const DEFAULT_CURRENT_PAGE: number = 1;
export const DEFAULT_LAST_PAGE: number = 0;
export const DEFAULT_HAS_NEXT_PAGE: boolean = false;
export const DEFAULT_ITEMS_PER_PAGE: number = 5;

export const DEFAULT_SEARCH: string = '';
export const DEFAULT_FORMAT: string[] = ['TV', 'TV_SHORT', 'MOVIE', 'SPECIAL', 'OVA', 'ONA', 'MUSIC', 'NOVEL', 'ONE_SHOT'];
export const DEFAULT_TYPE: string = 'ANIME';

export const DEFAULT_LIST: ItemFilteredList[] = createDefaultList()
export const DEFAULT_FILTER: FilterInfo = {
  search: DEFAULT_SEARCH,
  format: DEFAULT_FORMAT,
  type: DEFAULT_TYPE,
  pagination: {
    total: DEFAULT_TOTAL_PAGES,
    currentPage: DEFAULT_CURRENT_PAGE,
    lastPage: DEFAULT_LAST_PAGE,
    hasNextPage: DEFAULT_HAS_NEXT_PAGE,
    perPage: DEFAULT_ITEMS_PER_PAGE
  }
}

export const DEFAULT_LIST_ITEM: ItemFilteredList = {
  id: 0,
  title: {
    english: '',
    native: ''
  },
  format: '',
  type: '',
  startDate: {
    year: '',
    month: '',
    day: ''
  },
  averageScore: 0,
  genres: ''
}

export default function createDefaultList() {
  let arr: ItemFilteredList[] = []
  for (let i = 0; i < DEFAULT_ITEMS_PER_PAGE; i++) {
    arr.push({
      id: i,
      title: {
        english: '',
        native: ''
      },
      format: '',
      type: '',
      startDate: {
        year: '',
        month: '',
        day: ''
      },
      averageScore: 0,
      genres: ''
    })
  }
  return arr;
}
