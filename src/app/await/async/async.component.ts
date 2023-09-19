import { Component } from '@angular/core';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.scss']
})
export class AsyncComponent {


  // async keyword with function always returns a promise
  async getData(){

    return "Data Reacived"  
  }

}
