import { Component, input } from '@angular/core'
import { Button } from 'primeng/button'
import { Card } from 'primeng/card'
import { Tag } from 'primeng/tag'
import { Quote } from '../quote.model'

@Component({
  selector: 'app-quote-card',
  imports: [Button, Card, Tag],
  templateUrl: './quote-card.html',
  styleUrl: './quote-card.scss',
})
export class QuoteCard {
  quote = input.required<Quote>()

  copyToClipboard() {
    void navigator.clipboard.writeText(this.quote().content)
  }
}