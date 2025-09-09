import { Component, OnInit } from '@angular/core';
import { ConsultorModel } from './models/consultor.interface';
import { ConsultorComponent } from "./consultor/consultor.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  
import { ConsultorService } from './services/consultor.service';
import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],  
  standalone: true,                      
  imports: [ConsultorComponent, CommonModule, FormsModule, ParentComponent] 
})
export class AppComponent implements OnInit {
  nomeDaEmpresa: string = 'TechConsult Solutions';
  consultores: ConsultorModel[] = [];
  filtrados: ConsultorModel[] = [];
  termo: string = '';

  constructor(private consultorService: ConsultorService) {}

  ngOnInit(): void {
    this.consultores = this.consultorService.getConsultores();
    this.filtrados = [...this.consultores];
  }

  filtrar(): void {
    const t = this.termo.trim().toLowerCase();
    if (!t) {
      this.filtrados = [...this.consultores];
      return;
    }

    this.filtrados = this.consultores.filter(c =>
      c.nome.toLowerCase().includes(t) ||
      c.especialidade.toLowerCase().includes(t) ||
      c.email.toLowerCase().includes(t)
    );
  }
}
