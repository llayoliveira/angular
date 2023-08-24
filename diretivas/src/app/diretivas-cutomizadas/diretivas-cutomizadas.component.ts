import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-cutomizadas',
  templateUrl: './diretivas-cutomizadas.component.html',
  styleUrls: ['./diretivas-cutomizadas.component.scss']
})
export class DiretivasCutomizadasComponent implements OnInit {

  mostrarCursos: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }

}
