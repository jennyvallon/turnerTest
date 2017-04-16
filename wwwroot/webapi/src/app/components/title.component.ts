import { Component, Input, OnInit }             from '@angular/core';

import { Title }                                from '../classes/title';

@Component({
    selector: 'a-title',
    template:
            '<p class="title">{{title?.TitleName}}</p>'+ 
             
            //releaseYear+Genres 
            '<p class="title-meta"> '+ 
                '<span class="year">Year: {{title?.ReleaseYear}}  -  Genres: </span>'+ 
                '<ng-container *ngFor="let genre of title?.Genres">'+
                    '<span class="genre">{{genre}}</span> '+
                '</ng-container>'+  
            '</p> '+
            
            //participants
            '<p> '+
                '<ng-container *ngFor="let participant of title?.Participants">'+
                    '<span class="participants" *ngIf="participant.IsKey===true">{{genre}}</span> '+
                '</ng-container>'+
            '</p> '+
            
            //storylines
            '<p class="title-storylines">'+
                '<ng-container *ngFor="let storyline of title?.Storylines">'+
                    '<p class="storyline ellipses">'+
                        '<span class="storyline-type">{{storyline.Type}} - </span>'+
                        '<span class="storyline-description">{{storyline.Description}}</span>'+
                    '</p>'+
                '</ng-container>'+
            '</p>',
    styleUrls:['./../styles/title.style.css']
})


export class TitleComponent implements OnInit {
    private _title:Title;
    
    @Input() 
    set title(title:Title) { this._title = title; }
    get title():Title { return this._title; }
    
    constructor(){ }
    
    ngOnInit(){ }
}
