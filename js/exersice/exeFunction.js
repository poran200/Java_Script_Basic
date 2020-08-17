const makeDeck = {
  deck: [],
  drawnCard: [],
  suits: ["hearts", "diamonds", "spades", "clubs"],
  values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
  initializeDeck() {
    const { suits, values, deck } = this;
    for (const value of values.split(",")) {
      for (const suit of suits) {
        deck.push({
           value,
          suit,
        });
      }
    }
  },
  drawCard() {
    const card = this.deck.pop();
    this.drawnCard.push(card);
    return card;
  },
  drawMultipule(numCard) {
    const cards = [];
    for (let i = 0; i < numCard; i++) {
      card.push(this.drawCard());
    }
    return cards;
  },
};
const mydeck = makeDeck.initializeDeck();
const card = makeDeck.drawCard();
console.log(card);