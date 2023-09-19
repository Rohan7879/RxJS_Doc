import { Injectable } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() {  }

  print(val: any, conId: string) {
    let el = document.createElement('li');
    el.innerText = val
    document.getElementById(conId)!.appendChild(el)
  }

}

