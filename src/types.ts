export interface ContextState{messages:{role:string;content:string}[];}
export interface ContextChange{type:"added"|"removed"|"repeated"|"unchanged";content:string;index:number;}
export interface DiffResult{changes:ContextChange[];addedCount:number;removedCount:number;repeatedCount:number;similarity:number;}