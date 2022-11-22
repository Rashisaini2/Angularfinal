import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})


export class InputComponent  {

 

  fullname = ['Abc xyz'];

  addname(newname: string) {

    if (newname) {

    this.fullname.push(newname);

   

    }

  }

}
// export class InputComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
