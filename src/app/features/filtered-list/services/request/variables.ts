const DEFAULT_PER_PAGE: number = 5

export function setVariables(
  newSearch: string,
  newFormat: string,
  newType: string,
  newPage: number,
  newPerPage?: number | null)
{
  return {
    search: newSearch,
    format: newFormat,
    type: newType,
    page: newPage,
    perPage: newPerPage == null ? DEFAULT_PER_PAGE : newPerPage
  }
}
