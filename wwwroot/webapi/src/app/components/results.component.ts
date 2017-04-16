import { Component, Input, OnInit,  }             from '@angular/core';

import { Title }                                from '../classes/title';

@Component({
    selector: 'search-results',
    template: 
            //If there are no results
            '<ng-container *ngIf="titles.length==0;">'+
                '<p class="srchResults-summary">There are no results for {{searchParam}}</p>'+
            '</ng-container>'+
            
            //If there is at least one result
            '<ng-container *ngIf="titles.length>0;">'+
                '<p *ngIf="titles.length==1;" class="srchResults-summary">There is {{titles.length}} result for "{{searchParam}}".</p>'+
                '<p *ngIf="titles.length>1;" class="srchResults-summary">There are {{titles.length}} results for "{{searchParam}}".</p>'+
                '<ul>'+
                    '<li *ngFor="let title of titles">'+
                        '<a-title [title]="title"></a-title>'+
                    '</li>'+
                '</ul>'+
            '</ng-container>'    
})


export class ResultsComponent implements OnInit {
    @Input() titles:Title[];
    @Input() searchParam:string;
    errorMessage:any;
    
    constructor(){}
    
    ngOnInit(){ }
}
