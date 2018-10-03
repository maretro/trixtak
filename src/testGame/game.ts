import { Trick } from '@core/trick';
import { Card } from '@core/card';
import { CardSet } from '@core/cardSet';
import { CardRenderer } from './cardRenderer'
import * as readline  from 'readline-sync';



const cards = []

class TestGame {
    private cards: CardSet;
    private hand: CardSet;
    private trick: Trick;
    constructor() {
        this.cards = new CardSet();
        this.hand = new CardSet();
        this.trick = new Trick();
        this.generateCards();
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
    renderState() {
        console.log("--------------------------------------")
        console.log("Unused cards:");
        CardRenderer.renderCardSet(this.cards); 
        console.log("Hand:");
        CardRenderer.renderCardSet(this.hand); 
        console.log("Trick:");
        CardRenderer.renderCardSet(this.trick); 


    }
}

function run() {
    const t = new TestGame();
    t.renderState();
    let x = ''
    while (x !== 'end') {
        x = readline.question("Command: ");
        t.renderState();
    }
};

run();