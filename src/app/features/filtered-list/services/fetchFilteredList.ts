import {FILTERED_LIST_URL} from "../../../core/constants/fetchURLs";
import setConfig from "../../../core/headers/graphQL";
import {catchError, of, map, switchMap} from "rxjs";
import {fromFetch} from "rxjs/fetch";

export default async function fetchFilteredList(
  search: string,
  format: string,
  type: string,
  page: number
) {
  const config = setConfig(search, format, type, page)
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
