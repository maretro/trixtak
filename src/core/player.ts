import { CardSet } from '@core/cardSet';

class Player {
    private hand = CardSet.nullCardSet;
    constructor(private id: string) {}
    getId() {
        return this.id;
    }
    getHand() {
        return this.hand;
    }
    setHand(cardSet: CardSet): void {
        this.hand = cardSet;
    }
}

export { Player }