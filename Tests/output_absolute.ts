const replaceRouteParams = (rawRoute: string, routeParams: Record<string, string|number|null>): string => {Object.entries(routeParams).forEach(([key, value]) => rawRoute = rawRoute.replace(`{${key}}`, value as string)); return rawRoute;}
const appendQueryParams = (route: string, queryParams?: Record<string, string|number>): string => queryParams ? route + "?" + new URLSearchParams(queryParams as Record<string, string>).toString() : route;
export const path_user_route = (): { absolute: (routeParams: {id:string, noteId:string}, queryParams?: Record<string, string>) => string} => {return {absolute: (routeParams: {id:string, noteId:string}, queryParams?: Record<string, string>): string => appendQueryParams(replaceRouteParams('https://app.development.org/user/{id}/notes/{noteId}', routeParams), queryParams)}};
export const path_user_route_http = (): { absolute: (routeParams: {id:string, noteId:string}, queryParams?: Record<string, string>) => string} => {return {absolute: (routeParams: {id:string, noteId:string}, queryParams?: Record<string, string>): string => appendQueryParams(replaceRouteParams('http://app.development.org/user/{id}/notes/{noteId}', routeParams), queryParams)}};
export const path_user_route_without_scheme = (): { absolute: (routeParams: {scheme:string, id:string, noteId:string}, queryParams?: Record<string, string>) => string} => {return {absolute: (routeParams: {scheme:string, id:string, noteId:string}, queryParams?: Record<string, string>): string => appendQueryParams(replaceRouteParams('{scheme}://app.development.org/user/{id}/notes/{noteId}', routeParams), queryParams)}};
export const path_users_route_without_requirements_and_defaults = (): { absolute: (queryParams?: Record<string, string>) => string} => {return {absolute: (queryParams?: Record<string, string>): string => appendQueryParams('https://app.development.org/users', queryParams)}};
export const path_users_route_with_requirements = (): { absolute: (routeParams: {id:number, locale:'en'|'fr'}, queryParams?: Record<string, string>) => string} => {return {absolute: (routeParams: {id:number, locale:'en'|'fr'}, queryParams?: Record<string, string>): string => appendQueryParams(replaceRouteParams('https://app.development.org/users/{id}/{locale}', routeParams), queryParams)}};
export const path_users_route_with_requirements_and_defaults = (): { absolute: (routeParams: {id:number, locale?:'en'|'fr'}, queryParams?: Record<string, string>) => string} => {return {absolute: (routeParams: {id:number, locale?:'en'|'fr'}, queryParams?: Record<string, string>): string => appendQueryParams(replaceRouteParams('https://app.development.org/users/{id}/{locale}', {...{"locale":"en"}, ...routeParams}), queryParams)}};
export const path_users_route_with_requirements_and_null_defaults = (): { absolute: (routeParams: {id:number, locale?:'en'|'fr'}, queryParams?: Record<string, string>) => string} => {return {absolute: (routeParams: {id:number, locale?:'en'|'fr'}, queryParams?: Record<string, string>): string => appendQueryParams(replaceRouteParams('https://app.development.org/users/{id}/{locale}', {...{"locale":null}, ...routeParams}), queryParams)}};
export const path_generate_route_with_long_requirement_as_union = (): { absolute: (routeParams: {intent:'new_email'|'email'|'print'|'printdebug'|'preview'|'preview_data'|'preview_text'|'gct.legalize', documents:string}, queryParams?: Record<string, string>) => string} => {return {absolute: (routeParams: {intent:'new_email'|'email'|'print'|'printdebug'|'preview'|'preview_data'|'preview_text'|'gct.legalize', documents:string}, queryParams?: Record<string, string>): string => appendQueryParams(replaceRouteParams('https://app.development.org/generate/{intent}/{documents}', routeParams), queryParams)}};