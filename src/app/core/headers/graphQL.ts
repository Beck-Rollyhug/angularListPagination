import {setVariables} from "../../features/filtered-list/services/request/variables";
import {QUERY} from "../../features/filtered-list/services/request/query";

export default function setConfig(
  search: string,
  format: string,
  type: string,
  page: number
) {
  const newVariables = setVariables(search, format, type, page)
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: QUERY,
      variables: newVariables
    })
  }
}


