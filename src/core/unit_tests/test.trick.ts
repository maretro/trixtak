import { Card } from '@core/card';
import { expect } from 'chai';
import 'mocha'
import { Trick } from '@core/trick'

describe('Trick', () => {
    const card_01 = new Card({color: 'blue'});
    const card_02 = new Card({color: 'green'});
    const trick = new Trick();
    it('should hold cards', () => {
        expect(Card.isNull(trick.getCard(0))).be.true;
        trick.addCard(card_01);
        expect(trick.getCard(0)).to.equal(card_01);
    })
    it ('should be able to save and return an Id to each card transfer', () => {
        const id = 'Heinz';
        trick.addCard(card_02, id);
        const temp_card = trick.getCard(1);
        expect(trick.getInfoForCard(temp_card)).to.equal(id);
    })
    it ('should return nullCard if infos for a card not in the trick are requested', () => {
        const card_03 = new Card({color: 'green'});
        expect(trick.getInfoForCard(card_03)).to.equal(Card.nullCard);
    })
})