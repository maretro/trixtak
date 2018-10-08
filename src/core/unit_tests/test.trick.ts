import { Card } from '@core/card';
import { expect } from 'chai';
import 'mocha'
import { Trick } from '@core/trick'

describe('Trick', () => {
    it('should hold cards', () => {
        const trick = new Trick();
        expect(Card.isNull(trick.getCard(0))).be.true;
    })
})