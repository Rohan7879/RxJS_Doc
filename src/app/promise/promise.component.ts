import { Component } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent {
  
  
  AppleAvailable() {
    return false;
  }
  
  SamsungAvailable() {
    return true;
  }
  
  PromiseVal: string | any;
  
  Apple = {
    brand: 'Apple',
    model: 'Macbookair 15 inch Apple',
    price: 125000,
    available: this.AppleAvailable()
  }
  
  Samsung = {
    brand: 'Samsung',
    model: 'thinpad Pro 15 inch Samsung',
    price: 250000,
    available: this.SamsungAvailable()
  }

  
  NotAvailable = {
    brand: 'Not Available',
    model: 'Not Available',
    price: 0,
    available: false
  }


  ngOnInit(): void {
    let buyLeptop = new Promise((resolve, reject) => {
      // resolve('Promise Resolved');
      // reject('Promise Rejected');
      if (this.AppleAvailable()) {
        return setTimeout(() => {
          resolve(this.Apple);
        }, 3000);
      } else if (this.SamsungAvailable()) {
        return setTimeout(() => {
          resolve(this.Samsung);
        }, 3000);
      } else {
        return setTimeout(() => {
          reject(this.NotAvailable);
        }, 3000);
      }
    })

    buyLeptop.then(resolve => {
      console.log('then Code =>' , resolve);
      this.PromiseVal = resolve
    }).catch(error => {
      console.log('Catch Code =>' + error);
      this.PromiseVal = error
    })
  }

}
