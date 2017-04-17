import { Storyline }        from './storyline';
import { Award }            from './award';
import { Participant }      from './participant';



export class Title{
    ReleaseYear?:number;
    TitleName?:string;
    Genres?: string[];
    Storylines?:any;
    Awards?:any;
    OtherNames?:any;
    Participants?:any;
    TitleId?:number;
    TitleNameSortable?:string;
    Keywords?:any;
    KeyGenres?:any;
    _id:string;
}

