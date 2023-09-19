import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, interval, map, of, reduce, scan, startWith, tap } from 'rxjs';

interface obj {
name: string,
city: string
}
@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})


export class ScanComponent implements OnInit {


  ngOnInit() {
    let time = 100
    let Number$: Subscription;
    let broadcast = interval(time);
    let arr: number[] = [];

    Number$ = broadcast.subscribe(data => {
      if (data < 10) {
        arr.push(data + 1);
      }
    })
    setTimeout(() => {
      let input$ = arr
      console.log(input$);


      const fibonacci$ = interval(1000).pipe(
        // Scan to get the fibonacci numbers (after 0, 1)  
        scan((total : number | any,n : number) => total+n ,0),
        // tap(val=>console.log("",val)),
      );
      // fibonacci$.subscribe(console.log)
    }, 2000);
    




    // this.myObservable.subscribe((value)=>{
    //   console.log(value);
    // },(err)=>{
    //   alert(err.message);
    // },()=>{
    //   alert("Completed")


    // })

  }


  constructor() {

    const firstTwoFibs = [0, 1];
    // An endless stream of Fibonacci numbers.
    // const fibonacci$ = interval(1000).pipe(
    //   // Scan to get the fibonacci numbers (after 0, 1)  
    //   scan(([a, b]) => [b, a + b], firstTwoFibs),
    //   // Get the second number in the tuple, it's the one you calculated
    //   map(([, n]) => n),
    //   // Start with our first two digits :)
    //   startWith(...firstTwoFibs)
    // );
    // fibonacci$.subscribe(res => {
    //   if (res < 1000) {
    //     // console.log(res);  

    //   }
    // })



    //     const numbers$ = of(1, 2, 3);  

    //   numbers$
    // .pipe(
    //   // Get the sum of the numbers coming in.
    //   scan((total, n) => total + n),
    //   // Get the average by dividing the sum by the total number
    //   // received so far (which is 1 more than the zero-based index).
    //   map((sum, index) => sum + index)
    // )
    // .subscribe(console.log);

  }



  // // Observable Creates a new Observable
  // myObservable = new Observable((data)=>{
  //   console.log('Starting myObservable');  
  //   setTimeout(()=>{data.next('1')},5000)
  //   setTimeout(()=>{data.next('2')},4000)
  //   setTimeout(()=>{data.next('3')},3000)
  //   // setTimeout(()=>{data.error(new Error('Try Again'))},3000)
  //   setTimeout(()=>{data.next('4')},2000)
  //   setTimeout(()=>{data.next('5')},1000)
  //   // setTimeout(()=>{data.complete()},2000)
  // })  







  // val = (total: number | any, value: number | any) => total + value;

  // source = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  //   .pipe(scan(this.val, 0))
  //   .subscribe(console.log)


  // list = (total : string | any, value : string | any) => {
  //   if(total.hasOwnProperty(value)){
  //     total[value] = total[value] + 1
  //   }else{
  //     total[value] = 1
  //   }
  //   return total
  // }

  // source1 = of('Cow','goat','duck','chicken','Cow','duck','chicken','dog','cat','dog','dog')
  // .pipe(scan((total : number | any , value : string | any) => {
  //   if(total.hasOwnProperty(value)){
  //     total[value] = total[value] + 1
  //     // console.log(total[value],value);
  //   }else{
  //     total[value] = 1
  //     // console.log(total[value],value);
  //   }
  //   return total
  // },{}))
  // .subscribe(console.log)
}

