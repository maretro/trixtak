import {expect, assert} from 'chai';
import 'mocha';
import {Card} from '@core/card';

describe ('Card', () => {
    it ('should take value dict', () => {
        const value = {color: 'red'};
        const card = new Card(value);
    })
    it ('should be able to return a specific value', () => {
        const value = {color: 'red'};
        const card = new Card(value);
        expect(card.getValue('color')).to.equal(value.color);
    })
    it ('should handle wrong value request', () => {
        const value = {color: 'red'};
        const card = new Card(value);
        assert.isUndefined(card.getValue('number'));
        assert.isTrue(!card.getValue('blub'));
    })
    it ('should provide a category list', () => {
        const card = new Card({a:1, b:2, c:3});
        expect(card.getValueCategories()).to.deep.equal(['a', 'b', 'c']);
    })
    it ('should allow for check of equality', () => {
        const card_01 = new Card({color: 'red', number: 1});
        const card_02 = new Card({color: 'red', number: 2});
        const card_03 = new Card({color: 'green', number: 1});
        const card_04 = new Card({color: 'red', number: 1});
        expect(Card.isEqual(card_01, card_04)).be.true;
        expect(Card.isEqual(card_01, card_02)).be.false; 
        expect(Card.isEqual(card_03, card_01)).be.false; 
        expect(Card.isEqual(card_04, card_01)).be.true;
        expect(Card.isEqual(card_02, card_01)).be.false; 
        expect(Card.isEqual(card_03, card_01)).be.false; 

    })
    
    it ('should allow for check of equality in category subset ', () => {
        const card_01 = new Card({a: 'x', b: 'y', c: 1});
        const card_02 = new Card({a: 'x', b: 'z', c: 1});
        const card_03 = new Card({a: 'x', b: 'y', c: 2});
        const card_04 = new Card({a: 'x', b: 'y'});
        expect(Card.isEqual(card_01, card_02)).be.false;
        expect(Card.isEqual(card_01, card_03)).be.false;
        expect(Card.isEqual(card_01, card_04)).be.false;
        expect(Card.isEqual(card_01, card_04, ['a', 'b'])).be.true;
        expect(Card.isEqual(card_01, card_02, ['a', 'b'])).be.false;
        expect(Card.isEqual(card_01, card_02, ['a', 'c'])).be.true;
        expect(Card.isEqual(card_01, card_03, ['a', 'c'])).be.false;
    })
})