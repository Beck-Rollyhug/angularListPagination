export default async function fetchFilteredList() {
  const url = 'https://graphql.anilist.co'
  const variables = {}
  const query = `
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
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: query,
      variables: variables
    })
  }
  return await fetch(url, options)
    .then(res => res.json())
    .then(data => data.data.Media)
    .catch(e => console.error(e))
}
