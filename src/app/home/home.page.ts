import { Component } from '@angular/core';
import { PizzeriaService } from '../pizzeria.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(private pizzeria: PizzeriaService) {}

  totalPedidos: number = 0;

  ngOnInit() {
    console.log('Home: OnInit');
  }

  ionViewWillEnter() {
    console.log('Home: ionViewWillEnter');
    this.totalPedidos = this.pizzeria.getTotalPedidos();
  }

  ionViewWillLeave() {
    console.log("Home: ionViewWillLeave");
  }

  ionViewDidLeave() {
    console.log("Home: ionViewDidLeave");
  }

  ngOnDestroy() {
    console.log('Home: OnDestroy');
  }

}
