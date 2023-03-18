import {setVariables} from "../../features/filtered-list/services/request/variables";
import {QUERY_FILTERS_SEARCH_FORMAT_TYPE} from "../../features/filtered-list/services/request/QUERY_FILTERS_SEARCH_FORMAT_TYPE";

export default function setConfig(
  page: number,
  search: string,
  format: string,
  type: string
) {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: QUERY_FILTERS_SEARCH_FORMAT_TYPE,
      variables: setVariables(page, search, format, type)
    })
  }
}


