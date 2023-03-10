import {setVariables} from "../../features/filtered-list/services/request/variables";
import {QUERY} from "../../features/filtered-list/services/request/query";

export default function setConfig(page: number) {
  const newVariables = setVariables(page)
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


