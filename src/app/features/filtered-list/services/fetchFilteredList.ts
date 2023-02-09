import {FILTERED_LIST_URL} from "../../../core/constants/fetchURLs";
import {QUERY} from "./request/query";
import {VARIABLES} from "./request/variables";
import {setOptions} from "../../../core/headers/graphQL";

export default async function fetchFilteredList() {
  const url: string = FILTERED_LIST_URL
  const options: {} = setOptions(QUERY, VARIABLES)
  return await fetch(url, options)
    .then(res => res.json())
    .then(data => data.data.Media)
    .catch(e => console.error(e))
}
