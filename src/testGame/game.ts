import { Card } from '@core/card';
import { CardSet } from '@core/cardSet';
import { CardRenderer } from './cardRenderer';
import { MyTransferToTrickRule } from './myTransferToTrickRule';
import * as readline  from 'readline-sync';

class TestGame {
    private cards: CardSet;
    private hand: CardSet;
    private trick: CardSet;
    private rule: MyTransferToTrickRule;
    constructor() {
        this.cards = new CardSet();
        this.hand = new CardSet();
        this.trick = new CardSet();
        this.rule = new MyTransferToTrickRule();
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
        if (this.rule.check(index, this.hand, this.trick)) {
            this.hand.transferTo(index, this.trick);
        } else {
            console.log("You are not allowed to transfer this card to the trick!");
        }
    }
}

function run() {
    const t = new TestGame();
    t.renderState();
    let x = ''
    while (x !== 'end') {
        x = readline.question('Command ("li" for list): ');
        if (x.length >= 2) {
            if (x[0] == 'l') {
                console.log('Available commands:');
                console.log('h[x]: transfer card with index [x] from unused cards to hand');
                console.log('t[x]: transfer card with index [x] from hand to trick');
                console.log('end: end game');
            }
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

// run();