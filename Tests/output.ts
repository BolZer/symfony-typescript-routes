const rRP = (rawRoute: string, routeParams: Record<string, string|number>): string => {Object.entries(routeParams).forEach(([key, value]) => rawRoute = rawRoute.replace(`{${key}}`, value as string)); return rawRoute;}
const aQP = (route: string, queryParams?: Record<string, string>): string => queryParams ? route + "?" + new URLSearchParams(queryParams).toString() : route;
export const path_user_route = (): { relative: (routeParams: {id:string, noteId:string}, queryParams?: Record<string, string>) => string, absolute: (routeParams: {id:string, noteId:string}, queryParams?: Record<string, string>) => string} => {return {relative: (routeParams: {id:string, noteId:string}, queryParams?: Record<string, string>): string => aQP(rRP('/user/{id}/notes/{noteId}', routeParams), queryParams), absolute: (routeParams: {id:string, noteId:string}, queryParams?: Record<string, string>): string => aQP(rRP('https://app.development.org/user/{id}/notes/{noteId}', routeParams), queryParams)}};
export const path_user_route_http = (): { relative: (routeParams: {id:string, noteId:string}, queryParams?: Record<string, string>) => string, absolute: (routeParams: {id:string, noteId:string}, queryParams?: Record<string, string>) => string} => {return {relative: (routeParams: {id:string, noteId:string}, queryParams?: Record<string, string>): string => aQP(rRP('/user/{id}/notes/{noteId}', routeParams), queryParams), absolute: (routeParams: {id:string, noteId:string}, queryParams?: Record<string, string>): string => aQP(rRP('http://app.development.org/user/{id}/notes/{noteId}', routeParams), queryParams)}};
export const path_users_route = (): { relative: (routeParams: {id:number, locale:'en'|'fr'}, queryParams?: Record<string, string>) => string, absolute: (routeParams: {id:number, locale:'en'|'fr'}, queryParams?: Record<string, string>) => string} => {return {relative: (routeParams: {id:number, locale:'en'|'fr'}, queryParams?: Record<string, string>): string => aQP(rRP('/users/{id}/{locale}', routeParams), queryParams), absolute: (routeParams: {id:number, locale:'en'|'fr'}, queryParams?: Record<string, string>): string => aQP(rRP('https://app.development.org/users/{id}/{locale}', routeParams), queryParams)}};