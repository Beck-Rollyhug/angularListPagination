type Item = {
  id: number,
  text: string,
  filterOption: string,
  isChecked: boolean,
  isDisabled: boolean
}

export const FORMAT_OPTIONS: Item[] = [
  {
    id: 0,
    text: 'Сериал',
    filterOption: 'TV',
    isChecked: false,
    isDisabled: false
  },
  {
    id: 1,
    text: 'Быстрый сериал',
    filterOption: 'TV_SHORT',
    isChecked: false,
    isDisabled: false
  },
  {
    id: 2,
    text: 'Фильм',
    filterOption: 'MOVIE',
    isChecked: false,
    isDisabled: false
  },
  {
    id: 3,
    text: 'Спешл',
    filterOption: 'SPECIAL',
    isChecked: false,
    isDisabled: false
  },
  {
    id: 4,
    text: 'OVA',
    filterOption: 'OVA',
    isChecked: false,
    isDisabled: false
  },
  {
    id: 5,
    text: 'ONA',
    filterOption: 'ONA',
    isChecked: false,
    isDisabled: false
  },
  {
    id: 6,
    text: 'Музыка',
    filterOption: 'MUSIC',
    isChecked: false,
    isDisabled: false
  },
  {
    id: 7,
    text: 'Новелла',
    filterOption: 'NOVEL',
    isChecked: false,
    isDisabled: false
  },
  {
    id: 8,
    text: 'ONE-SHOT',
    filterOption: 'ONE_SHOT',
    isChecked: false,
    isDisabled: false
  }
];

export const TYPE_OPTIONS: Item[] = [
  {
    id: 0,
    text: 'Аниме',
    filterOption: 'ANIME',
    isChecked: true,
    isDisabled: false
  },
  {
    id: 1,
    text: 'Манга',
    filterOption: 'MANGA',
    isChecked: false,
    isDisabled: false
  }
];
