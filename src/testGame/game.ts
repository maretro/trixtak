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

    transferToHand(index: number) {
        this.cards.transferTo(index, this.hand);
    }
    transferToTrick(index: number) {
        this.trick.addCardFrom(index, this.hand);
    }
}

function run() {
    const t = new TestGame();
    t.renderState();
    let x = ''
    while (x !== 'end') {
        x = readline.question("Command: ");
        if (x.length >= 2) {
            if (x[0] == 'h') {
                t.transferToHand(Number(x.slice(1)));
            }
            if (x[0] == 't') {
                t.transferToTrick(Number(x.slice(1)));
            }
        }
        t.renderState();
    }
};

run();