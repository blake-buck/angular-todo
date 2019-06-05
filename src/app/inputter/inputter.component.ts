import {Component} from '@angular/core';
import { Store, select } from '@ngrx/store';
@Component({
    selector:'inputter',
    templateUrl:'./inputter.component.html',
    styleUrls:['./inputter.component.css']
})

export class Inputter {
    task:string = ''

    constructor(private store: Store<{tasks:string[]}>){}

    handleChange(e:any){
        this.task = e.target.value
    }
    addTask(){
        this.store.dispatch({type:'[Inputter] AddTask', payload:this.task})
        this.task = ''
    }
}