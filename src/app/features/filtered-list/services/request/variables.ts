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
    type: newType ? newType : 'ANIME',
    search: newSearch ? newSearch : null,
    // format: newFormat ? newFormat : `MOVIE`,
  }
}
