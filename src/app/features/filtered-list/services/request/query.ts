export const QUERY_FILTERS_SEARCH_FORMAT_TYPE: string = `
  query ($page: Int, $perPage: Int, $search: String, $type: MediaType) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media (isLicensed: true, isAdult: false, search: $search, type: $type) {
        id,
        title {
          english,
          native
        },
        format,
        type,
        startDate {
            year,
            month,
            day
        },
        meanScore,
        genres
      }
    }
  }
`
