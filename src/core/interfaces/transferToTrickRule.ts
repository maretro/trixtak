import { CardSet } from '@core/cardSet';
interface ITransferToTrickRule {
    check(index: number, hand: CardSet, trick: CardSet): boolean;
}

export { ITransferToTrickRule };