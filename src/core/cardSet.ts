import {Card} from '@core/card';
import {ICardHolder} from '@core/interfaces/cardHolder';

class CardSet implements ICardHolder {
    public cards: Card[];
    constructor(  ) {
        this.cards = [];
    }

    addCard(card: Card) {
        if (card) {
            this.cards.push(card);
        }
    }

    getCard(index: number) {
        return this.cards[index];
    }

    getNumberOfCards() {
        return this.cards.length;
    }

    removeCard(index: number) {
        const card = this.cards[index];
        this.cards.splice(index, 1);
        return card;
    }

    transferTo(index: number, cardSet: CardSet) {
        const card = this.removeCard(index);
        cardSet.addCard(card);
    }
}

export {CardSet};