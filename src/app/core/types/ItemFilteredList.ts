export type ItemFilteredList = {
  id: number;
  title: {
    english: string | null;
    native: string;
  };
  format: string;
  type: string;
  startDate: {
    year: string;
    month: string;
    day: string;
  };
  averageScore: number;
  genres: string;
}
