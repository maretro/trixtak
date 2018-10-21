import { CardSet } from '@core/cardSet';
import { Card } from '@core/card';

class Trick extends CardSet {
    private cardInfo: string[] = [];
    addCard(card: Card, info?:string):void {
        super.addCard(card);
        if (info) {
            const index = this.cards.indexOf(card);
            this.cardInfo[index] = info;
        } else {

        }
    }
    getInfoForCard(card: Card) {
        const index = this.cards.indexOf(card);
        return this.cardInfo[index];
    }
}

export { Trick }