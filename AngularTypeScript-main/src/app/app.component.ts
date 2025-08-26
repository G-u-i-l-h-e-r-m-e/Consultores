import { Component, OnInit } from '@angular/core';
import { ConsultorModel } from './models/consultor.interface';
import { ConsultorService } from './services/consultor.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [CommonModule, FormsModule]
})

export class AppComponent implements OnInit {
  nomeDaEmpresa: string = 'TechConsult Solutions';
  filtroEspecialidade: string = '';
  consultores: ConsultorModel[] = [];
  consultoresFiltrados: ConsultorModel[] = [];

  constructor(private consultorService: ConsultorService) {}

  ngOnInit(): void {
    this.consultores = this.consultorService.getConsultores();
    this.consultoresFiltrados = this.consultores;
  }

  filtrarConsultores(): void {
    const termo = this.filtroEspecialidade.toLowerCase().trim();

    this.consultoresFiltrados = this.consultores.filter(c =>
      c.especialidade.toLowerCase().includes(termo)
    );
  }
}
