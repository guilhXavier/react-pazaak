import { Player } from '../index';
import { cardsField } from '../../db';

export class Match {
  constructor() {
    this.state = {
      player1: new Player(),
      player2: new Player(),
      playerTurn: {},
      playedCards: [],
    };
  }

  getCurrentPlayer = (playerTurn, players) => {
    if (playerTurn.name === players[0].name) {
      return players[0];
    }

    return players[1];
  };

  playRandomCard = cardList => {
    const randIndex = Math.floor(Math.random() * cardList.length);

    const pickedCard = cardList[randIndex];

    return pickedCard;
  };

  playCardFromHand = hand => {};

  addScore = (value, prevScore) => {
    return value + prevScore;
  };

  endMatch = (player1, player2) => {
    if (player1.state.score === player2.state.score) {
      return 'Draw!';
    }

    if (player1.state.score > player2.state.score) {
      return 'Player 1 Wins!';
    }

    if (player2.state.score < player1.state.score) {
      return 'Player 2 Wins!';
    }
  };

  endTurn = (cardList, playedCards, prevPlayer, nextPlayer) => {
    const newCard = this.playRandomCard(cardList);

    playedCards = [...playedCards, newCard];

    prevPlayer.setScore(this.addScore(newCard.value, prevPlayer.state.score));

    this.endMatch(prevPlayer, nextPlayer);

    return [playedCards, prevPlayer, nextPlayer];
  };
}
