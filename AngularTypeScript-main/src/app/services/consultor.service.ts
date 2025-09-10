import { Injectable } from '@angular/core';
import { ConsultorModel } from '../models/consultor.interface';

@Injectable({
  providedIn: 'root'
})

export class ConsultorService {

  constructor() { }

  consultores: ConsultorModel [] =
  [{
    nome: "Joao Silva",
    especialidade: "Desenvolvedor FullStack",
    email: 'joao@email.com',
    ativo: true
  },
  {
    nome: "Maria Silva",
    especialidade: "Desenvolvedora Front-End",
    email: 'maria@email.com',
    ativo: true
  },
  {
    nome: "Andre Silva",
    especialidade: "Desenvolvedor Back-End",
    email: 'andre@email.com',
    ativo: false
  },
  {
    nome: "Fernando Silva",
    especialidade: "UX/UI",
    email: 'fernando@email.com',
    ativo: false
  },
  {
    nome: "Louis Silva",
    especialidade: "Desenvolvedor FullStack",
    email: 'louis@email.com',
    ativo: true
  },
  {
    nome: "Maria da Silva",
    especialidade: "Desenvolvedora FullStack",
    email: 'maria@email.com',
    ativo: false
  }
]

  getConsultores(): ConsultorModel[]{
    return this.consultores
  }
}


