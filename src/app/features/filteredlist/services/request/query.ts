export const QUERY_FILTERS_SEARCH_FORMAT_TYPE: string = `
  query ($page: Int, $perPage: Int, $search: String, $type: MediaType, $formatIn: [MediaFormat]) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      },
      media (isLicensed: true, isAdult: false, search: $search, type: $type, format_in: $formatIn, sort: SCORE_DESC) {
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
        averageScore,
        genres
      }
    }
  }
`
