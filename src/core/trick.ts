import { Card } from '@core/card';
import { CardSet } from '@core/cardSet';
import { ICardHolder } from '@core/interfaces/cardHolder';

class Trick implements ICardHolder {
    private cards: CardSet;
    constructor() {
        this.cards = new CardSet();
    }
    addCardFrom(index: number, cards: CardSet) {
        cards.transferTo(index, this.cards);
    }
    getCard(index: number) {
        return this.cards.getCard(index);
    }
    getFirstCard() {
        return this.getCard(0);
    }
    getNumberOfCards() {
        return this.cards.getNumberOfCards();
    }
}

export {Trick};