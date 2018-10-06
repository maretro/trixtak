import {Card} from '@core/card';
import {ICardHolder} from '@core/interfaces/cardHolder';

class CardSet implements ICardHolder {
    public cards: Card[];
    constructor(  ) {
        this.cards = [];
    }

    addCard(card: Card): void {
        if (card) {
            this.cards.push(card);
        }
    }

    getCard(index: number): Card {
        const result = this.cards[index];
        return result ? result: Card.nullCard;
    }

    getNumberOfCards(): number {
        return this.cards.length;
    }

    removeCard(index: number): Card {
        if (Number.isNaN(index)) {
            return Card.nullCard;
        }
        const card = this.cards[index];
        if (card) {
            this.cards.splice(index, 1);
            return card;
        }
        return Card.nullCard;
    }

    transferTo(index: number, cardSet: CardSet): void {
        const card = this.removeCard(index);
        if (!Card.isNull(card)) {
            cardSet.addCard(card);
        }
    }
}

export {CardSet};