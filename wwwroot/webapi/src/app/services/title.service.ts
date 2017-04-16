import { Injectable }               from '@angular/core';
import { Http, Response }           from '@angular/http';


import { ErrorService }             from './error.service';
import { Title }                    from '../classes/title';
import { TITLES }                   from './dummy';  

@Injectable()
export class TitleService {
    private apiUrl = 'http://localhost:5000/api/content/';  
    
    
    constructor(private http:Http, private errorService:ErrorService){} 
    
//    getTitles(title:string): Promise<Title[]> {
//        let searchUrl= this.apiURL+title;
//        return this.http.get(this.searchUrl)
//                   .toPromise()
//                   .then(this.extractData)
//                   .catch(this.errorService.handleError);
//    }

    getTitles(){return TITLES;}

    
    
    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }
}