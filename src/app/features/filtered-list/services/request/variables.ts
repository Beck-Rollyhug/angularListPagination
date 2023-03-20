import {FilterInfo} from "../../../../core/types/FilterInfo";

export function setVars(vars: FilterInfo) {
  return {
    page: vars.pagination.currentPage,
    perPage: vars.pagination.perPage,
    type: vars.type ? vars.type : 'ANIME',
    search: vars.search ? vars.search : null,
    // format: newFormat ? newFormat : `MOVIE`,
  }
}
