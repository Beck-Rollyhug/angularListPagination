export const QUERY_FILTERS: string = `
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

export const QUERY_BASIC: string = `
  query ($page: Int, $perPage: Int)
  {
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

export function buildQuery() {
  const query_header = `query ($page: Int, $perPage: Int)`
  const page_header = `Page (page: $page, perPage: $perPage)`
  const page_info = `
  pageInfo {
    total
    currentPage
    lastPage
    hasNextPage
    perPage
  }
  `
  const media_header = `media (isLicensed: true)`
  const media_body = `
  {
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
  `
  const media = media_header + media_body
  const page_body = `
  {
  `+ page_info + media +`
  }
  `
  const query_body = `
  {
  `+ page_header + page_body +`
  }
  `

  const query = query_header + query_body
  return query
}
export const QUERY: string = `
  query ($page: Int, $perPage: Int) {`
    + `Page (page: $page, perPage: $perPage) {` +
     ` pageInfo {
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
