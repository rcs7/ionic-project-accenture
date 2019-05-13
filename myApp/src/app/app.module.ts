import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//gerado automaticamente ao colocar FeedPageModule lá no import, lá em baixo
import { FeedPageModule } from '../pages/feed/feed.module';
//gerado automaticamente ao colocar IntroductionPageModule lá no import, lá em baixo
import { IntroductionPageModule } from '../pages/introduction/introduction.module';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    // FeedPageModule
  ],
  imports: [
    BrowserModule,
    // Difo que o módulo Root vai ser o meu MyApp
    IonicModule.forRoot(MyApp),
    //Adicionei esta linha abaixo pra que minha pag que criei feed fosse add na minha aplicação, aí ele me
    //deu uma lâmpada amarela pra eu importar Feed... aí apareceu automaticamente essa linha que está lá em 
    //cima: import { FeedPageModule } from '../pages/feed/feed.module';
    FeedPageModule,
    //Adicionei esta linha abaixo pra que minha pag que criei introduction fosse add na minha aplicação, aí ele me
    //deu uma lâmpada amarela pra eu importar Feed... aí apareceu automaticamente essa linha que está lá em 
    //cima: import { IntroductionPageModule } from '../pages/introduction/introduction.module';
    IntroductionPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
