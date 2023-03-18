export const QUERY_FILTERS_SEARCH_FORMAT_TYPE: string = `
  query ($page: Int, $perPage: Int, $type: MediaType, $genre: String) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media (isLicensed: true, type: $type, genre: $genre) {
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


// export const QUERY_FILTERS_SEARCH_FORMAT_TYPE: string = `
//   query ($page: Int, $perPage: Int, $search: String, $format: MediaFormat, $type: MediaType) {
//     Page (page: $page, perPage: $perPage) {
//       pageInfo {
//         total
//         currentPage
//         lastPage
//         hasNextPage
//         perPage
//       }
//       media (isLicensed: true, search: $search, format: $format, type: $type) {
//         id,
//         title {
//           english
//         },
//         genres,
//         type,
//         startDate {
//             year,
//             month,
//             day
//         },
//         meanScore,
//         genres
//       }
//     }
//   }
// `
