import { expect } from 'chai';
import { Card } from '@core/card';
import 'mocha';
import { CardComparison } from '../cardComparison'

describe('TestGame: Card Comparision', () => {
    const card_01 = new Card({color: 'red', value: 1});
    const card_02 = new Card({color: 'green', value: 2});

    it('should decide whether a card is higher/lower/equal', () => {
        const comparison = new CardComparison();
        expect(comparison.compare(card_01, card_02)).to.equal(CardComparison.isLower);
        expect(comparison.compare(card_02, card_01)).to.equal(1);

        
    })
})