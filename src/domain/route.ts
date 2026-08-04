import type { LineString } from 'geojson';
export type Position = readonly [longitude:number,latitude:number];
export interface RouteStop{id:string;order:number;title:string;coordinates:Position;summary:string}
export interface FixedRoute{id:string;name:string;geometry:LineString;stops:readonly RouteStop[];fixture:boolean}
export function validateRoute(route:FixedRoute):string[]{const errors:string[]=[];if(route.geometry.type!=='LineString'||route.geometry.coordinates.length<2)errors.push('Itinerari duhet të ketë një vijë të vlefshme.');if(route.stops.length===0)errors.push('Itinerari duhet të ketë ndalesa.');const orders=route.stops.map(({order})=>order);if(new Set(orders).size!==orders.length)errors.push('Renditja e ndalesave duhet të jetë unike.');for(const stop of route.stops){const [lng,lat]=stop.coordinates;if(lng<19||lng>21||lat<39||lat>43)errors.push(`Koordinatat e ${stop.title} janë jashtë Shqipërisë.`)}return errors}
