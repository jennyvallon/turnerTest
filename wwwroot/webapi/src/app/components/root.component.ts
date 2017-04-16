import { 
    Component, 
    OnInit, 
    Output, 
    OnChanges, 
    ViewChild,ComponentRef 
}                                               from '@angular/core';
import { Title }                                from '../classes/title';
import { ResultsComponent }                     from './results.component';


@Component({
    selector: 'app-root',
    template: '<search-form '+
                '(error)="onError($event)" '+
                '(results)="onResults($event)" '+
                '(searchTerm)="onSearch($event)"> '+        
            '</search-form>'+
            '<error-message *ngIf="error" [errorMessage] ></error-message>'+
            '<search-results *ngIf="results" [titles]="titles" [searchParam]="searchParam"></search-results>',//only populate after a response from the server
    styleUrls:['./../styles/root.style.css']
})


export class RootComponent implements OnInit{
    //rendering
    error:boolean;
    results:boolean;
    
    //passing info
    titles:Title[];
    errorMessage:any;
    searchParam:string;
    
    
    constructor(){  }
    
    //no error or results on initialize
    ngOnInit(){
        console.log("\n OnInit")
        this.initialize();
    }
    
    initialize(){//reset error and result divs
        console.log("initialize()");
        this.error=false;
        this.results=false;
        this.titles=undefined;
        this.errorMessage=undefined;
    }
    
    onError(error:any){
        console.log("\n onError()");
        this.initialize();
        this.error=true;
        this.results=false;
        this.errorMessage=error;
        console.log(this.errorMessage);
    }
    
    onResults(response:Title[]){
        console.log("\n onResults()");
        this.initialize();
        this.results=true;
        this.error=false;
        this.titles=response;
        console.log("The below value should be the results");
        console.log(this.titles);
    }
    
    onSearch(arg:string){
        console.log("\n onSearch()");
        console.log("The value below should match the searched value");
        this.searchParam=arg;
        console.log(this.searchParam);
    }
}
