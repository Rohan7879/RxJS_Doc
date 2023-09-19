import { Component, ElementRef, ViewChild } from '@angular/core';
import { from, fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent{
  constructor(private _designUtility: DesignUtilityService){}

  @ViewChild('addBtn') addBtn:ElementRef | any
  @ViewChild('addBtn2') addBtn2:ElementRef | any

  ngAfterViewInit() {
    let count = 1
    let count2 = 1
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(event =>{
      let countVal  ='Video ' + count ++
      this._designUtility.print(countVal,'eleadd');
    });
    fromEvent(this.addBtn2.nativeElement, 'click').subscribe(event =>{
      let countVal  ='Photo ' + count2 ++
      this._designUtility.print(countVal,'eleadd2');
    });
  }

  // print(val: any,conId: string){
  //   let  el = document.createElement('li');
  //   el.innerText = val  

  //   document.getElementById(conId)!.appendChild(el)
  // }
  

}

