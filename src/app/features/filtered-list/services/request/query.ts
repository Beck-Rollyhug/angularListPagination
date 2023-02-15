export const QUERY: string = `
  query ($page: Int, $perPage: Int) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media (isLicensed: true) {
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
