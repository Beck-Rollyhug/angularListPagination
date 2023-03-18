const DEFAULT_PER_PAGE: number = 5

export function setVariables(
  newPage: number,
  newSearch: string,
  newFormat: string,
  newType: string
)
{
  return {
    page: newPage,
    perPage: DEFAULT_PER_PAGE,
    type: newType ? newType : `ANIME`,
    genres: 'Drama'

    // search: newSearch ? newSearch : `A`,
    // format: newFormat ? newFormat : `MOVIE`,
  }
}
