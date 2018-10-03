// untestest, this should be an interface for rendering
// later, I guess...
import { Card } from '@core/card'
import { ICardHolder } from '@core/interfaces/cardHolder'

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

    static cardSetString (cards: ICardHolder, line: number) {
        let lineString = '';
        for (let i = 0; i < cards.getNumberOfCards(); i++) {
            if (line == 0) {
                lineString += (i < 10 ? ' ' : '') + String(i) + ':';
            } else {
                lineString += '   ';
            }
            lineString += this.cardString(cards.getCard(i), line);
        }
        return lineString;
    }

    static renderCardSet(cards: ICardHolder) {
        for (let i = 0; i < 4; i++) {
            console.log(this.cardSetString(cards, i));
        }
    }
}

export { CardRenderer }