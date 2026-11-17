import { Component } from '@angular/core'
import { Quote } from '../quote.model'
import { QuoteCard } from '../quote-card/quote-card'

@Component({
 selector: 'app-quote-list',
  imports: [QuoteCard],
  templateUrl: './quote-list.html',
  styleUrl: './quote-list.scss',
})
export class QuoteList {
  quotes: Quote[] = [
  {
    id: 2,
    title: 'Penser pour exister',
    content: 'Je pense, donc je suis.',
    score: 0,
    createdAt: '2025-01-20T14:30:00.000Z',
    category: {
      id: 2,
      name: 'Philosophie',
    },
    author: {
      id: 1,
      username: 'René Descartes',
    },
    userVote: null,
  },
  {
    id: 3,
    title: "Le pouvoir de l'imagination",
    content: "L'imagination est plus importante que le savoir.",
    score: 0,
    createdAt: '2025-01-25T09:15:00.000Z',
    category: {
      id: 3,
      name: 'Sagesse',
    },
    author: {
      id: 2,
      username: 'Albert Einstein',
    },
    userVote: null,
  },
  {
    id: 4,
    title: "Aimer ce que l'on fait",
    content: "Le seul moyen de faire du bon travail est d'aimer ce que l'on fait.",
    score: 0,
    createdAt: '2025-01-28T11:00:00.000Z',
    category: {
      id: 1,
      name: 'Motivation',
    },
    author: {
      id: 3,
      username: 'Steve Jobs',
    },
    userVote: null,
  },
  {
    id: 5,
    title: "L'essentiel est invisible",
    content: "On ne voit bien qu'avec le cœur. L'essentiel est invisible pour les yeux.",
    score: 0,
    createdAt: '2025-02-01T08:45:00.000Z',
    category: {
      id: 4,
      name: 'Littérature',
    },
    author: {
      id: 4,
      username: 'Antoine de Saint-Exupéry',
    },
    userVote: null,
  },
]
}