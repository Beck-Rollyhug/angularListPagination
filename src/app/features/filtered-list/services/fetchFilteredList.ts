import {FILTERED_LIST_URL} from "../../../core/constants/fetchURLs";
import {QUERY} from "./request/query";
import setOptions from "../../../core/headers/graphQL";

export default async function fetchFilteredList(page: number) {
  const url: string = FILTERED_LIST_URL
  const options: {} = setOptions(QUERY, {
    page: page,
    perPage: 5
  })
  return await fetch(url, options)
    .then(res => res.json())
    .then(data => data.data)
    .catch(e => console.error(e))
}
