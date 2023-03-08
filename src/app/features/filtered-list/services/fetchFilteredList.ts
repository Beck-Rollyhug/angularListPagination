import {FILTERED_LIST_URL} from "../../../core/constants/fetchURLs";
import {QUERY} from "./request/query";
import setConfig from "../../../core/headers/graphQL";
import {catchError, of, map, switchMap} from "rxjs";
import {fromFetch} from "rxjs/fetch";

export default async function fetchFilteredList(page: number) {
  const config = setConfig(QUERY, {
    page: page,
    perPage: 5
  })
  return fromFetch(FILTERED_LIST_URL, config)
    .pipe(
      switchMap(res => {
        if (res.ok) { return res.json() }
        return of({ error: true, message: `Error ${ res.status }` })
      }),
      catchError(err => { throw err.message }),
      map( data => data.data.Page)
    )
    .subscribe()
}
