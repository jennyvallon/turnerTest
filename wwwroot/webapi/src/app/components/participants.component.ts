import { Component, Input, OnInit }             from '@angular/core';

import { Participant }                          from '../classes/participant';


@Component({
    selector: 'title-participants',
    template:
            
                '<p class="title-participants">'+
                    '<ng-container *ngFor="let participant of participants">'+
                        '<span ngIf="participant.IsKey===true">{{participant.Name}}</span>'+ //squirt out genres
                    '</ng-container>'+
                '</p>'          
})


export class ParticipantsComponent implements OnInit {
    @Input() participants:Participant[];
    
    
    constructor(){ }
    
    ngOnInit(){
        console.log('\n ParticipantsComponent OnInit');
        console.log('The below value should be a reference of participants');
        console.log(this.participants);
    }
}
