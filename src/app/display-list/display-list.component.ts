import {Component, OnInit} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
    selector:'display-list',
    templateUrl:'./display-list.component.html',
    styleUrls:['display-list.component.css']
})

export class DisplayList implements OnInit{
    tasks: Observable<string[]>

    k:string = 'jef'
    
    constructor(private store: Store<{tasks:string[]}>){
        this.tasks = store.pipe(select('tasks'))
    }

    checkCompletion(index:number){
        let element = document.getElementById(index.toString())
        
        if(element.className === 'complete'){
            element.classList.remove('complete');
        }
        else{
            element.classList.add('complete')
        }
    }

    deleteTask(index:number){
        this.store.dispatch({type:'[Display List] DeleteTask', payload:index})
    }

    ngOnInit(){

    }
}