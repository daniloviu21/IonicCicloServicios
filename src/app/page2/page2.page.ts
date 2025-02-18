import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
  standalone: false
})
export class Page2Page implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Page2: OnInit');
  }

  ionViewWillEnter() {
    console.log('Page2: ionViewWillEnter');
  }

  ionViewWillLeave() {
    console.log("Page2: ionViewWillLeave");
  }

  ionViewDidLeave() {
    console.log("Page2: ionViewDidLeave");
  }

  ngOnDestroy() {
    console.log('Page2: OnDestroy');
  }

}
