import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'compartilhamento-de-dados-angular';

  produtos = [{
    nome: 'Mochila Adidas',
    descricao: 'Ideal para o uso no dia a dia, a Mochila Adidas oferece comodidade para voce.'
  }];

  recebeProduto(produto: {nome: string, descricao: string}){
    this.produtos.push({
      nome: produto.nome,
      descricao: produto.descricao
    })
  }
}
