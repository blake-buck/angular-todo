import * as Todo from './todo.actions';
import { Inputter } from './inputter/inputter.component';

export const initialState:string[] =['a', 'b', 'c']

export function reducer(state=initialState, action: any):string[]{
    switch(action.type){

        case Todo.ActionTypes.AddTask:{
            let newTasks = state
            newTasks.push(action.payload)
            console.log(newTasks)
            return newTasks
        }

        case Todo.ActionTypes.DeleteTask:{
            let newTasks = state;
            state.splice(action.payload, 1);
            console.log(newTasks)
            return newTasks
        }

        default:{
            return state
        }

    }
    
}