import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  flexBoxArr: Array<any> = [
    { path: 'align-content'},
    { path: 'align-self' },
    { path: 'alignment'},
    { path: 'flex-basis' },
    { path: 'flex-grow' },
    { path: 'flex-shrink' },
    { path: 'flex-wrap'},
    { path: 'flow-direction' },
    { path: 'grids'},
    { path: 'grow-shrink-basis' },
    { path: 'hexagon'},
    { path: 'holygrail'},
    { path: 'justify' },
    { path: 'media-objects' },
    { path: 'order'},
    { path: 'showcase' },
    { path: 'vertical'}
  ];


   openNav() {
     let mySidenavElement = document.getElementById("mySidenav");
     if(mySidenavElement) mySidenavElement.style.width = "250px";
  }
  
   closeNav() {
    let mySidenavElement = document.getElementById("mySidenav");
    if(mySidenavElement) mySidenavElement.style.width = "0";
  }
}
