import { CardSet } from '@core/cardSet';
import { Card } from '@core/card';
import { ITransferToTrickRule } from '@core/interfaces/transferToTrickRule';
class MyTransferToTrickRule implements ITransferToTrickRule {
    check(index: number, hand: CardSet, trick: CardSet): boolean {
        if (trick.getNumberOfCards() > 0) {
            const firstCard = trick.getCard(0);
            const selectedCard = hand.getCard(index);
            if (!Card.isEqual(firstCard, selectedCard, ['color'])) {
                for (let i=0; i < hand.getNumberOfCards(); i++) {
                    if (Card.isEqual(firstCard, hand.getCard(i), ['color'])) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
}

export { MyTransferToTrickRule };