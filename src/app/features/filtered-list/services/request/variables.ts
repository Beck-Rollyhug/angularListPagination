const DEFAULT_PER_PAGE: number = 5

export function setVariables(
  newSearch: string | null,
  newFormat: string | null,
  newType: string | null,
  newPage: number,
  newPerPage?: number)
{
  let variables: any = {
    page: newPage
  };

  if (newPerPage) {
    variables.perPage = newPerPage;
  }
  else {
    variables.perPage = DEFAULT_PER_PAGE;
  }

  if (newSearch) {
    variables.search = newSearch;
  }
  if (newFormat) {
    variables.format = newFormat;
  }
  if (newType) {
    variables.type = newType;
  }

  return variables
}
