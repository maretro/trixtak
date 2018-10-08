import { expect } from 'chai';
import 'mocha';
import {CardSet} from '@core/cardSet';
import {Card} from '@core/card';

describe('CardSet', () => {
    const cardSet = new CardSet();
    const card_01 = new Card({color: 'red'});
    const card_02 = new Card({color: 'blue'});
    const card_03 = new Card({color: 'green'});
    const cards_01 = new CardSet();
    const cards_02 = new CardSet();
    
    it('should take cards', () => {
        cardSet.addCard(card_01);
        cardSet.addCard(card_02);
    })
    it ('should hold cards', () => {
        expect(cardSet.getNumberOfCards()).to.equal(2);
        expect(Card.isEqual(cardSet.getCard(0), card_01)).be.true;
        expect(Card.isEqual(cardSet.getCard(1), card_02)).be.true;     
    })
    it('should be able to remove cards', () => {
        const card = cardSet.removeCard(0);
        expect(Card.isEqual(card, card_01)).be.true;
        expect(Card.isEqual(cardSet.getCard(0), card_02)).be.true;     
        expect(cardSet.getNumberOfCards()).to.equal(1);
    })
    it('should handle if card with undefined index is looked at', () => {
        const card = cardSet.getCard(1);
        expect(Card.isNull(card)).be.true;
    })
    it('should handle if card with NaN index is looked at', () => {
        const card = cardSet.getCard(NaN);
        expect(Card.isNull(card)).be.true;
    })
    it('should handle if card with undefined index is removed', () => {
        const nrBefore = cardSet.getNumberOfCards();
        const card = cardSet.removeCard(1);
        const nrAfter = cardSet.getNumberOfCards();
        expect(Card.isNull(card)).be.true;
        expect(nrBefore).to.equal(nrAfter);
    })
    it('should be able to transfer cards between sets', () => {
        let temp_card;
        cards_01.addCard(card_01);
        cards_02.addCard(card_02);
        cards_02.addCard(card_03);
        cards_02.transferTo(0, cards_01);
        expect(cards_01.getNumberOfCards()).to.equal(2);
        expect(cards_02.getNumberOfCards()).to.equal(1);
        temp_card = cards_01.getCard(1);
        expect(Card.isEqual(temp_card, card_02)).be.true;
        temp_card = cards_02.getCard(0);
        expect(Card.isEqual(temp_card, card_03)).be.true;
    })
    it('should handle transfer with undefined index', () => {
        const nrBefore = cards_01.getNumberOfCards();
        cards_02.transferTo(10, cards_01);
        const nrAfter = cards_01.getNumberOfCards();
        expect(nrBefore).to.equal(nrAfter);
    })
    it ('should not remove a card if NaN index is provided', () => {
        const cs = new CardSet();
        cs.addCard(card_01);
        cs.addCard(card_02);
        cs.addCard(card_03);
        const card = cs.removeCard(NaN);
        expect(cs.getNumberOfCards()).to.equal(3);
        expect(Card.isNull(card)).be.true;
    })
    it ('should provide a way to check NULL card set', () => {
        const cardSet = CardSet.nullCardSet;
        const cardSet_02 = new CardSet();
        expect(CardSet.isNull(cardSet)).be.true;
        expect(CardSet.isNull(cardSet_02)).be.false;
    })
})