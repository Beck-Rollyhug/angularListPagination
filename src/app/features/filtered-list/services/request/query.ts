export const QUERY: string = `
  query {
    Media(isLicensed:true) {
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
  `
