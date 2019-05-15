import { Component } from '@angular/core';
import { HomePage1 } from '../home1/home1';
import { FeedPage } from '../feed/feed';
import { About1Page } from '../about1/about1';
//import { CriarMetasPage } from '../criar-metas/criar-metas';
import { HomePage } from '../home/home';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  //controla o que vai ser carregado em cada tab
  tab1Root = HomePage1; //HomePage1, Abaout1Page e ContactPage são 3 classes que estarão nas abas
  //Adicionei essa parte pra que a page que criei de feed seja uma das abas. Apareceu a lâmpada e 
  //eu cliquei nela e ele importou lá em cima automaticamente
  tab2Root = HomePage;
  
  tab4Root = FeedPage;
  tab7Root = About1Page;
  constructor() {

  }
}
