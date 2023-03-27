import {setVars} from "../../features/filteredlist/services/request/variables";
import {QUERY_FILTERS_SEARCH_FORMAT_TYPE} from "../../features/filteredlist/services/request/query";
import {FilterInfo} from "../types/FilterInfo";

export default function setConfig (filterVars: FilterInfo) {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: QUERY_FILTERS_SEARCH_FORMAT_TYPE,
      variables: setVars(filterVars)
    })
  }
}


