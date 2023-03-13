export const QUERY: string = `
  query ($page: Int, $perPage: Int, $search: String, $format: MediaFormat, $type: MediaType) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media (isLicensed: true, search: $search, format: $format, type: $type) {
        id,
        title {
          english
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
