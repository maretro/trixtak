import { Card } from '@core/card';
interface ICardHolder {
    getCard(index: number): Card;
    getNumberOfCards(): number;
}

export { ICardHolder }