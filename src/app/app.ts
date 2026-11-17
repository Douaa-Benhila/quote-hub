import { Component } from '@angular/core';
//import { QuoteList } from './quotes/quote-list/quote-list';
import { Navbar } from './navbar/navbar';
import { QuoteList } from './quotes/quote-list/quote-list'
// un composant : tout ce qui permet de faire l'affichage d'angular
//le fichier 3 partie 
//partie : type script 
//partie template.
//partie css.


@Component({
  imports: [Navbar,QuoteList],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
}
