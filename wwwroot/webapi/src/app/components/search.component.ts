import { 
    Component, 
    Input, 
    OnInit, 
    Output,
    EventEmitter 
}                                               from '@angular/core';
import {NgForm}                                 from '@angular/forms';

import { TitleService }                         from '../services/title.service';
import { Title }                                from '../classes/title';

@Component({
    selector: 'search-form',
    template: 
            '<form #f="ngForm" (ngSubmit)="onSubmit(f)">'+
                '<label>Google</label>'+
                '<input type="text" name=userInput '+
                '(ngModel)="model.searchTerm">'+ 
                '<button type="submit">'+
                    '<img src="../assets/search.png">'+
                '</button>'+
            '</form>',
    styleUrls:['./../styles/search.style.css']
})


export class SearchComponent implements OnInit {
    @Output() results = new EventEmitter<Title[]>();
    @Output() error = new EventEmitter<any>();
    @Output() searchTerm = new EventEmitter<string>();
    
    constructor(private titleService:TitleService){}
    
    titles:Title[];
    errorMessage:any;
    userInput:string;
    
    ngOnInit(){ }
    
//    search(f:NgForm){
//        this.assign(f);
//        this.titleService.getTitles(this.userInput)
//                        .then(
//                            response => this.sendResults(response),
//                            error =>  this.sendError(error)
//                        )
//                        .then(this.searchTerm.emit(this.userInput));
//    }

    assign(f){
        this.userInput=f.form.value.userInput;
    }

    onSubmit(f:NgForm){
        this.assign(f);
        console.log("\n onSubmit()");
        console.log(f.form.value.userInput + " should equal what was in the log box");
        console.log(this.userInput + " should equal the value above it");
        this.getResults();  
        this.searchTerm.emit(this.userInput);
        f.reset();
    }
    
    //get info from service
    getResults(){
        var results=this.titleService.getTitles();
        console.log("\n getResults()");
        console.log("the below value should be dummy results")
        console.log(results);
        this.sendResults(results);
    }
    
    
    //assign response to property
    //fire emit event
    sendResults(response:Title[]){
        this.titles=response;
        console.log("\n sendResults()");
        console.log("The below value should match value above");
        console.log(this.titles);
        this.results.emit(response);
//        this.searchTerm.emit(this.userInput);
    }
    
    
    //assign response to property
    //fire emit event
//    sendError(error){
//        this.errorMessage=<any>error;
//        this.error.emit(error);
//        this.searchTerm.emit(this.userInput);
//    }
}
