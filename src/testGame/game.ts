import { Trick } from '@core/trick';
import { Card } from '@core/card';
import { CardSet } from '@core/cardSet';



const cards = []

class TestGame {
    private cards: CardSet;
    constructor() {
        this.cards = new CardSet();
        this.generateCards();
        for (let i = 0; i < this.cards.getNumberOfCards(); i++) {
            console.log(i, this.cards.getCard(i));
        }
    }

    private generateCards() {
        const colors = ['red', 'green', 'blue'];
        const numbers = [1,2,3,4];
        for (const c of colors) {
            for (const n of numbers) {
                const card = new Card({color:c, number: n});
                    this.cards.addCard(card);
            }
        }

    }
}

function run() {
    const t = new TestGame();
}

run();