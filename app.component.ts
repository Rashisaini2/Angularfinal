// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'assign1';
// }


import { Component, OnInit } from '@angular/core';

import { timeStamp } from 'console';



@Component({

  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.scss']

})

export class AppComponent {

  title = 'Homepage';

}



// @Component({

//   selector: 'app-display',

//   templateUrl: './display.component.html',

//   styleUrls: ['./display.component.scss']

// })

// export class DisplayComponent implements OnInit {



//   content = 'Cloud computing  is the on-demand availability of computer system resources, especially data storage (cloud storage) and computing power, without direct active management by the user.[2] Large clouds often have functions distributed over multiple locations, each of which is a data center.';

//   isContentVisible = false;

//   togglingLog = [];

//   limit = 1;



//   constructor() { }



//   ngOnInit() {

//   }

 



//   toggleContent() {

//     const timestamp = new Date().getTime();

//     // this.togglingLog.push(timestamp);

//     this.isContentVisible = !this.isContentVisible;

//   }

//   title='counter with angular'

//   count=0

//   counter()

//   {

//     this.count++;

//   }



//   getColor(i: number): string {

//     if (i >= this.limit) {

//       return 'blue';

//     } else {

//       return 'white';

//     }

//   }

// }