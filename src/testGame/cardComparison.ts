import { Card } from '@core/card';
class CardComparison {
    private valueOrder: number[];
    public static isLower: number = -1;
    public static isEqual: number = 0;
    public static isHigher: number = 1;

    constructor () {
        this.valueOrder = [1,2,3,4];
    }
    compare( card_01: Card, card_02: Card) : number {
        const index_01 = this.valueOrder.indexOf(card_01.getValue('value'));
        const index_02 = this.valueOrder.indexOf(card_02.getValue('value'));
        return index_01 < index_02 ? -1 : (index_01 == index_02 ? 0 : 1);
    }
}

export { CardComparison }