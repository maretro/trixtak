import { expect } from 'chai';
import 'mocha';
import {Trick} from '@core/trick';
import {Card} from '@core/card';
import {CardSet} from '@core/cardSet';

describe('Trick', () => {
    const trick = new Trick();
    const card_01 = new Card({a:'x', b:1});
    const card_02 = new Card({a:'y', b:2});
    it('cards should be addable via "transfer" from card set', () => {
        const hand = new CardSet();
        hand.addCard(card_01);
        hand.addCard(card_02);
        trick.addCardFrom(0, hand);
        expect(hand.getNumberOfCards()).to.equal(1);
    })
    it('should have option to see cards', () => {
        const card = trick.getCard(0);
        expect(Card.isEqual(card, card_01)).be.true;
    })
    it ('should have a "first" cards', () => {
        const card = trick.getFirstCard();
        expect(Card.isEqual(card, card_01)).be.true;

    })
})