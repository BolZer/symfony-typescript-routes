const rRP = (rawRoute: string, routeParams: Record<string, string>): string => {Object.entries(routeParams).forEach(([key, value]) => rawRoute = rawRoute.replace(`{${key}}`, value)); return rawRoute;}
const aQP = (route: string, queryParams?: Record<string, string>): string => queryParams ? route + "?" + new URLSearchParams(queryParams).toString() : route;
export const path_user_route = (): { relative: (routeParams: {id: string, noteId: string}, queryParams?: Record<string, string>) => string, absolute: (routeParams: {id: string, noteId: string}, queryParams?: Record<string, string>) => string} => {return {relative: (routeParams: {id: string, noteId: string}, queryParams?: Record<string, string>): string => aQP(rRP('/user/{id}/notes/{noteId}', routeParams), queryParams), absolute: (routeParams: {id: string, noteId: string}, queryParams?: Record<string, string>): string => aQP(rRP('https://app.development.org/user/{id}/notes/{noteId}', routeParams), queryParams)}};
export const path_user_route_http = (): { relative: (routeParams: {id: string, noteId: string}, queryParams?: Record<string, string>) => string, absolute: (routeParams: {id: string, noteId: string}, queryParams?: Record<string, string>) => string} => {return {relative: (routeParams: {id: string, noteId: string}, queryParams?: Record<string, string>): string => aQP(rRP('/user/{id}/notes/{noteId}', routeParams), queryParams), absolute: (routeParams: {id: string, noteId: string}, queryParams?: Record<string, string>): string => aQP(rRP('http://app.development.org/user/{id}/notes/{noteId}', routeParams), queryParams)}};
export const path_users_route = (): { relative: (queryParams?: Record<string, string>) => string, absolute: (queryParams?: Record<string, string>) => string} => {return {relative: (queryParams?: Record<string, string>): string => aQP('/users', queryParams), absolute: (queryParams?: Record<string, string>): string => aQP('https://app.development.org/users', queryParams)}};