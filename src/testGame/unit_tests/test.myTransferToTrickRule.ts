import { expect } from 'chai';
import 'mocha'

import { CardSet } from '@core/cardSet';
import { Card } from '@core/card';
import { MyTransferToTrickRule } from '../myTransferToTrickRule';


describe ('TestGame: Transfer to Trick',() => {
    const rule = new MyTransferToTrickRule();
    it ('should always allow transfer to empty trick', () => {
        const trick = new CardSet();
        const hand = new CardSet();    
        hand.addCard(new Card({a:1}));
        expect(rule.check(0, hand, trick)).be.true;
    })
    const trick = new CardSet();
    trick.addCard(new Card({color: 'red', number: 1}));
    trick.addCard(new Card({color: 'red', number: 2}));
    trick.addCard(new Card({color: 'green', number: 1}));

    it ('should allow transfer if first trick color is not in hand and is not on the card to be transfered', () => {
        const hand = new CardSet();
        hand.addCard(new Card({color: 'green', number: 1}));
        hand.addCard(new Card({color: 'blue', number: 6}));
        hand.addCard(new Card({color: 'yellow', number: 8}));
        expect(rule.check(0, hand, trick)).be.true;
        expect(rule.check(1, hand, trick)).be.true;
        expect(rule.check(2, hand, trick)).be.true;
    })
    it ('should only allow transfer if first trick color is in hand and is also on the card to be transfered', () => {
        const hand = new CardSet();
        hand.addCard(new Card({color: 'green', number: 1}));
        hand.addCard(new Card({color: 'red', number: 6}));
        hand.addCard(new Card({color: 'yellow', number: 8}));
        expect(rule.check(0, hand, trick)).be.false;
        expect(rule.check(1, hand, trick)).be.true;
        expect(rule.check(2, hand, trick)).be.false;
    })


});