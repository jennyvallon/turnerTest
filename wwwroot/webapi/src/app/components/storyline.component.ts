import { Component, Input, OnInit }             from '@angular/core';

import { Storyline }                                from '../classes/storyline';

@Component({
    selector: 'a-storyline',
    template:
            '<p class="storyline" [ngClass]="{\'ellipses\' : isClicked===false}">'+
                '<span class="storyline-type" (click)="toggle()">{{storyline.Type}} - </span>'+
                '<span class="storyline-description">{{storyline.Description}}</span>'+
            '</p>',
    styleUrls:['./../styles/storyline.style.css']
})


export class StorylineComponent implements OnInit {
    @Input() storyline;Storyline;
    
    isClicked:boolean;
    
    constructor(){
        this.isClicked=false;
    }
    
    ngOnInit(){
        
    }
    
    toggle(){
        console.log(this.isClicked);
        this.isClicked=!this.isClicked;
    }
}
