import {Action} from '@ngrx/store'

export enum ActionTypes{
    AddTask = '[Inputter] AddTask',
    DeleteTask = '[Display List] DeleteTask'
}

export class AddTask implements Action{
    readonly type = ActionTypes.AddTask
    constructor(public payload:string){}
}

export class DeleteTask implements Action{
    readonly type = ActionTypes.DeleteTask
    constructor(public payload:number){}
}

export type Union = AddTask | DeleteTask