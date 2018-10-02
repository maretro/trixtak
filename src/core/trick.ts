import { Card } from '@core/card';
import { CardSet } from '@core/cardSet';

class Trick {
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
}

export {Trick};