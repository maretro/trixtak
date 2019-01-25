import { Card } from '@core/card';
interface ICardHolder {
    getCard(index: number): Card;
    getNumberOfCards(): number;
    containsCardWithSimilarCategory(card: Card, categories: string[]): boolean;
}

export { ICardHolder }