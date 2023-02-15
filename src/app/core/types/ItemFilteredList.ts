export type ItemFilteredList = {
  id: number;
  title: {
    english: string;
  };
  format: string;
  type: string;
  startDate: {
    year: string;
    month: string;
    day: string;
  };
  meanScore: number;
  genres: string;
}
