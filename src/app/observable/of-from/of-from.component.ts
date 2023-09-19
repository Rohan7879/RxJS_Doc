import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss'],
})
export class OfFromComponent implements OnInit {
  constructor(private designUtilityService: DesignUtilityService) {}
  // OF
  obsMsg: any;
  ngOnInit(): void {
    const Obs1 = of('Rohan', 'sanidhya', 'Siddharth');

    Obs1.subscribe((res) => {
      console.log(res);
      this.designUtilityService.print(res, 'elcontainer');
    });

    const Obs2 = of({ a: 'Rohan', b: 'sanidhya', c: 'Siddharth' });

    Obs2.subscribe((res) => {
      this.obsMsg = res;
      console.log('obsMsg => ', res);
    });

    // From = Array
    const Obs3 = from(['Rohan', 'sanidhya', 'Siddharth']);
    Obs3.subscribe((res) => {
      console.log(res);
      this.designUtilityService.print(res, 'elcontainer3');
    });

    // From = Promise
    const promise = new Promise((res) => {
      setTimeout(() => {
        res('Promise resolve');
      }, 2000);
    });

    const Obs4 = from(promise);
    Obs4.subscribe((res) => {
      console.log('From Promise', res);
      this.designUtilityService.print(res, 'elcontainer4');
    });
    // From = String
    const Obs5 = from('Welcome to rxJs');
    Obs5.subscribe((res) => {
      console.log(res);
      this.designUtilityService.print(res, 'elcontainer5');
    });
  }
}
