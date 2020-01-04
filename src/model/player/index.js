export class Player {
  constructor() {
    this.state = {
      name: '',
      score: 0,
      stand: false,
      hand: [],
    };
  }

  setHand(hand) {
    this.state.hand = hand;
  }

  setStand(stand) {
    this.state.stand = stand;
  }

  setScore(newScore) {
    this.state.score = newScore;
  }
}
