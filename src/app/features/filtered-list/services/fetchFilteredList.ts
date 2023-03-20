import {FILTERED_LIST_URL} from "../../../core/constants/request";
import setConfig from "../../../core/headers/graphql";
import {catchError, of, map, switchMap} from "rxjs";
import {fromFetch} from "rxjs/fetch";
import {FilterInfo} from "../../../core/types/FilterInfo";

export default async function fetchFilteredList(filterVars: FilterInfo) {
  const config = setConfig(filterVars)
  return fromFetch(FILTERED_LIST_URL, config)
    .pipe(
      switchMap(res => {
        if (res.ok) { return res.json() }
        return of({ error: true, message: `Error ${ res.status }` })
      }),
      catchError(err => { throw err.message }),
      map( data => data.data)
    )
}
