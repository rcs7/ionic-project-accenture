import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { FeedPage } from '../feed/feed';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  //controla o que vai ser carregado em cada tab
  tab1Root = HomePage; //HomePage, AbaoutPage e ContactPage são 3 classes que estarão nas abas
  //Adicionei essa parte pra que a page que criei de feed seja uma das abas. Apareceu a lâmpada e 
  //eu cliquei nela e ele importou lá em cima automaticamente
  tab4Root = FeedPage;

  constructor() {

  }
}
