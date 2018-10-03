// untestest, this should be an interface for rendering
// later, I guess...
import { Card } from '@core/card'
import { CardSet } from '@core/cardSet'

/*
FgRed = "\x1b[31m"
FgGreen = "\x1b[32m"
FgYellow = "\x1b[33m"
FgBlue = "\x1b[34m"
eset = "\x1b[0m
*/


class CardRenderer {
    private static template = 
    ['s ___ \x1b[0m',
     's| C |\x1b[0m',
     's| N |\x1b[0m',
     's ~~~ \x1b[0m']
     private static colorMap = {
         'red':'R',
         'green':'G',
         'blue':'B'
     }
     private static colorMap2 = {
        'red':'\x1b[31m',
        'green':'\x1b[32m',
        'blue':'\x1b[34m'
    }

    static cardString (card: Card, line: number) {
        return this.template[line]
        .replace('N', card.getValue('number'))
        .replace('C', this.colorMap[card.getValue('color')])
        .replace('s', this.colorMap2[card.getValue('color')])

    }

    static cardSetString (cards: CardSet, line: number) {
        let lineString = '';
        for (let i = 0; i < cards.getNumberOfCards(); i++) {
            lineString += this.cardString(cards.getCard(i), line) + ' ';
        }
        return lineString;
    }

    static renderCardSet(cards: CardSet) {
        for (let i = 0; i < 4; i++) {
            console.log(this.cardSetString(cards, i));
        }
    }
}

export { CardRenderer }