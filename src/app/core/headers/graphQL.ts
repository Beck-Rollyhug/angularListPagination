import {setVariables} from "../../features/filtered-list/services/request/variables";
import {QUERY_BASIC, QUERY_FILTERS, QUERY, buildQuery} from "../../features/filtered-list/services/request/QUERY_FILTERS";

export default function setConfig(
  search: string | null,
  format: string | null,
  type: string | null,
  page: number
) {
  let newVariables;
  if (!search) {
    newVariables = setVariables(null, format, type, page)
  }
  else if (!format) {
    newVariables = setVariables(search, null, type, page)
  }
  else if (!type) {
    newVariables = setVariables(search, format, null, page)
  }
  else {
    newVariables = setVariables(search, format, type, page)
  }
  const query = buildQuery()
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: query,
      variables: newVariables
    })
  }
}


