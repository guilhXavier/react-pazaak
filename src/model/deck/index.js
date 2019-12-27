exports.buildHand = deck => {
  const deckCopy = deck;
  const newHand = [];

  while (newHand.length < 4) {
    const randInd = Math.floor(Math.random() * deckCopy.length);

    const newCard = deckCopy.slice(randInd)[0];

    newHand.push(newCard);
  }

  return newHand;
};
