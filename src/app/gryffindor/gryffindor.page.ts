import { Component, OnInit } from '@angular/core';
import { Pedido, PizzeriaService } from '../pizzeria.service';

@Component({
  selector: 'app-gryffindor',
  templateUrl: './gryffindor.page.html',
  styleUrls: ['./gryffindor.page.scss'],
  standalone: false
})
export class GryffindorPage implements OnInit {

  constructor(private pizzeria: PizzeriaService) { }

  pedidos: Pedido[] = [];

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.pedidos = this.pizzeria.getPedidos();
  }

  generarPedido(casa: string, pizza: string): void {
    this.pizzeria.generarPedido({casa,pizza});
  }

}
