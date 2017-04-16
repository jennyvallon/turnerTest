import { Component, Input, OnInit }             from '@angular/core';

import { Title }                                from '../classes/title';

@Component({
    selector: 'a-title',
    template:
            '<p>{{title?.TitleName}}</p>'+
             
            //releaseYear+Genres 
            '<p> '+ 
                '<span>{{title?.ReleaseYear}}</span>'+ 
                '<ng-container *ngFor="let genre of title?.Genres">'+
                    '<span>{{genre}}</span> '+
                '</ng-container>'+ 
            '</p> '+
            
            //participants
            '<p> '+
                '<ng-container *ngFor="let participant of title?.Participants">'+
                    '<span *ngIf="participant.IsKey===true">{{genre}}</span> '+
                '</ng-container>'+
            '</p> '+
            
            //storylines
            '<p class="title-storyLines">'+
                '<ng-container *ngFor="let storyline of title?.Storylines">'+
                    '<p class="title-storyLine">'+
                        '<span class="title-storyline-type">{{storyline.Type}}</span>'+
                        '<span class="title-storyline-type">{{storyline.Description}}</span>'+
                    '</p>'+
                '</ng-container>'+
            '</p>' 
})


export class TitleComponent implements OnInit {
    private _title:Title;
    
    @Input()
    set title(title:Title) { this._title = title; }
    get title():Title { return this._title; }
    
    
    
 
    constructor(){
    }
    
    ngOnInit(){ 
        console.log('\n TitleComponent OnInit');
        console.log('The below value should be a reference of title');
        console.log(this.title);
    }
}
