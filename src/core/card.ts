class Card {

    static isEqual(card_01: Card, card_02: Card, categories?: any[]): boolean {
        let categoriesToCheck = categories;
        if (!categoriesToCheck) {
            categoriesToCheck = Array.from(new Set([...card_01.getValueCategories(), ...card_02.getValueCategories()]));
        }
        for (const category of categoriesToCheck) {
            if (card_01.getValue(category) !== card_02.getValue(category)) {
                return false;
            }
        }
        return true;
    }

    static nullCard = new Card({});
    static isNull(card: Card): boolean {
        return (card === this.nullCard);
    }

    constructor(private value: any) {}
    getValue(category: string) {
        return this.value[category];
    }

    private getValueCategories(): string[] {
        return Object.keys(this.value);
    }
}

export {Card};