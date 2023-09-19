import { Component, OnInit } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-internal',
  templateUrl: './internal.component.html',
  styleUrls: ['./internal.component.scss'],
})
export class InternalComponent implements OnInit {
  videoSubscription1: Subscription | any;
  videoSubscription2: Subscription | any;
  videoSubscription3: Subscription | any;

  constructor(private _designUtility: DesignUtilityService) {}
  msg: string | any;
  ngOnInit() {
    // const broadCast = interval(1000);

    const broadCast1 = timer(500, 10); // timer(dealy,interval)
    this.videoSubscription1 = broadCast1.subscribe((res) => {
      console.log('internal broadcast Start Before', res + 1);
      this.msg = 'Video ' + (res + 1);
      if (res == 0) {
      }
      this._designUtility.print(this.msg, 'elCon');
      if (res >= 4) {
        this.videoSubscription1.unsubscribe();
      }
    });

    const broadCast2 = timer(1000, 100); // timer(dealy,interval)
    this.videoSubscription2 = broadCast2.subscribe((res) => {
      console.log('internal broadcast Start Before', res + 1);
      this.msg = 'Video ' + (res + 1);
      if (res == 0) {
      }

      this._designUtility.print(this.msg, 'elCon2');
      if (res >= 9) {
        this.videoSubscription2.unsubscribe();
      }
    });

    const broadCast3 = timer(2000, 100); // timer(dealy,interval)
    this.videoSubscription3 = broadCast3.subscribe((res) => {
      console.log('internal broadcast Start Before', res + 1);
      this.msg = 'Video ' + (res + 1);
      if (res == 0) {
        // console.log(res);
      } else if (res >= 14) {
        this.videoSubscription3.unsubscribe();
      }
      this._designUtility.print(this.msg, 'elCon3');
      //  else {
      // }
    });
    // this._designUtility.print(this.msg,'elCon2')
    // this._designUtility.print(this.msg,'elCon3')
  }
}
