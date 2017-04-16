import { BrowserModule }                from '@angular/platform-browser';
import { 
    NgModule,
    CUSTOM_ELEMENTS_SCHEMA  
}                                       from '@angular/core';
import { FormsModule }                  from '@angular/forms';
import { HttpModule }                   from '@angular/http';

//Components
import { RootComponent }                from './components/root.component';
import { SearchComponent }              from './components/search.component';
import { TitleComponent }               from './components/title.component';
import { ResultsComponent }             from './components/results.component';



//Services
import { ErrorService }                 from './services/error.service';
import { TitleService }                 from './services/title.service';


@NgModule({
  declarations: [
    ResultsComponent,
    TitleComponent,
    SearchComponent, 
    RootComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ErrorService, TitleService],
  bootstrap: [RootComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
