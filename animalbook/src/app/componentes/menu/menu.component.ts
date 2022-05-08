import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  mostrarMenu: boolean = false;

  ngOnInit(): void {}

  abrirMenu() {
    this.mostrarMenu = !this.mostrarMenu;
  }
}
