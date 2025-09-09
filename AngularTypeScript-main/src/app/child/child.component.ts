import { Component,signal,input,output} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  nomeRecebido = input<string>('');
  enviarMensagem = output<string>();

  contador = signal(0);

  increment(){
    this.contador.update(valor => valor +1);
    const mensagem = "Mensagem enviada!";
    this.enviarMensagem.emit(mensagem);
  }
  
}
