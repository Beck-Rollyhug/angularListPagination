const DEFAULT_PER_PAGE: number = 5

export function setVariables(
  newPage: number,
  newPerPage?: number | null)
{
  return {
    page: newPage,
    perPage: newPerPage == null ? DEFAULT_PER_PAGE : newPerPage
  }
}
