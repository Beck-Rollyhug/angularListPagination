import {FilterInfo} from "../../../../core/types/FilterInfo";
import {DEFAULT_FORMAT, DEFAULT_TYPE} from "../constants";

export function setVars(vars: FilterInfo) {
  return {
    page: vars.pagination.currentPage,
    perPage: vars.pagination.perPage,
    type: vars.type ? vars.type : DEFAULT_TYPE,
    search: vars.search ? vars.search : null,
    formatIn: vars.format.length > 0 ? vars.format : DEFAULT_FORMAT
    // format: newFormat ? newFormat : `MOVIE`,
  }
}
