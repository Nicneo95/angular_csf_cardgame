// interface can be used as a type for objects
export interface Card {
  // define the attribute and the data type
  suit: string;
  card: number;
  value: number;
}

export interface RemoveCard {
  name: string;
  cardNum: number;
}

export interface Hand {
  name: string;
  cards: Card[];
}

export const SUIT = ['clover', 'spade', 'diamond', 'heart'];
export const VALUE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

// this is a class
export class Deck {
  // with properties name deck with is an array of Card object
  private deck: Card[] = [];
  // constructor of the class takes an optional parameter named "count", which defaults to 1 if not provided
  constructor(count = 1) {
    // number of times to create multiple decks of cards
    for (let c = 0; c < count; c++) {
      // iterates over each suit in an array clover, spade, diamond, heart
      for (let s of SUIT) {
        // iterates over values of the card
        for (let i = 0; i < 13; i++) {
          this.deck.push({
            suit: s,
            // + 1 because index start with 0
            card: i + 1,
            value: VALUE[i],
          });
        }
      }
    }
  }

  shuffle() {
    const deckSize = this.deck.length;
    for (let i = 0; i < deckSize; i++) {
      let idx = Math.floor(Math.random() * deckSize);
      const toSwap = this.deck[idx];
      this.deck[idx] = this.deck[i];
      this.deck[i] = toSwap;
    }
  }

  canTake(): boolean {
    return this.deck.length > 0;
  }

  take(count = 1): Card[] {
    return this.deck.splice(0, count);
  }

  dump(): Card[] {
    return this.deck;
  }
}
