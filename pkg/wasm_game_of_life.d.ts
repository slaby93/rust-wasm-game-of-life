/* tslint:disable */
export enum Cell {Dead,Alive,}
export class Universe {
free(): void;

static  new(): Universe;

 render(): string;

 width(): number;

 height(): number;

 cells(): number;

 tick(): void;

}
