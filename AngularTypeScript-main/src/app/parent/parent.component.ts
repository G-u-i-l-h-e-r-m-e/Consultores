import { Component, signal } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

  nome = signal ('Guilherme');

  mensagemDoFilho = signal ('Sem nenhuma mensagem!');

  receberMensagem(mensagem: string){
    this.mensagemDoFilho.set(mensagem);
  }
}
