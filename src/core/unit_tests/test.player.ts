import { CardSet } from '@core/cardSet';
import { Card } from '@core/card';
import { expect } from 'chai';
import 'mocha'
import { Player } from '@core/player';

describe('Player', () => {
    const id = 'Heinz';
    const player = new Player(id);
    const card_01 = new Card({color:'red'});
    const card_02 = new Card({color:'green'});
    const hand = new CardSet();
    hand.addCard(card_01);
    hand.addCard(card_02);

    it('should have an Id', () => {
        expect(player.getId()).to.equal(id);
    })
    it('should be able to have a hand', () => {
        let temp_hand = player.getHand();
        expect(CardSet.isNull(temp_hand)).be.true;
        player.setHand(hand);
        temp_hand = player.getHand();
        expect(temp_hand.getCard(0)).to.equal(card_01);
        expect(temp_hand.getCard(1)).to.equal(card_02);
        expect(CardSet.isNull(temp_hand)).be.false;
    })
})
