import React from 'react';
import { Card, Hand } from '../index';
import { buildHand } from '../../model/deck';
import { cards } from '../../db';
import './style.css';

export class Table extends React.Component {
  constructor() {
    super();

    this.state = {
      player: 'Joao',
      score: 0,
      grid: ['', '', '', '', '', '', '', '', ''],
      hand: [],
    };
  }

  componentDidMount = () => {
    this.setState({ hand: buildHand(cards) });
  };

  filterPlayedCards = grid => {
    return grid.filter(elem => elem !== '');
  };

  filterEmptySlots = grid => {
    return grid.filter(elem => elem === '');
  };

  renderPlayerInfo = (player, score) => {
    return (
      <React.Fragment>
        <div className='player-info__container'>
          <div className='player-info__name'>{player}</div>
          <div className='player-info__score'>{score}</div>
        </div>
      </React.Fragment>
    );
  };

  renderCardField = grid => {
    return (
      <React.Fragment>
        <div className='card-field__container'>
          <div className='card-field__cards'>
            {this.renderPlayedCards(this.filterPlayedCards(grid))}
            {this.renderEmptySlots(this.filterEmptySlots(grid))}
          </div>
        </div>
      </React.Fragment>
    );
  };

  renderHand = playerHand => {
    return (
      <React.Fragment>
        <Hand playerHand={playerHand} />
      </React.Fragment>
    );
  };

  renderActions = () => {
    return (
      <React.Fragment>
        <div className='actions__container'>
          <div className='actions__button'>End Turn</div>
          <div className='actions__button'>Stand</div>
        </div>
      </React.Fragment>
    );
  };

  renderPlayedCards = grid => {
    return grid.map((elem, key) => {
      return (
        <React.Fragment>
          <Card key={key} value={elem.value} />
        </React.Fragment>
      );
    });
  };

  renderEmptySlots = grid => {
    return grid.map((elem, key) => {
      return (
        <React.Fragment>
          <div className='card-empty' key={key}></div>
        </React.Fragment>
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className='table__container'>
          {this.renderPlayerInfo(this.state.player, this.state.score)}
          {this.renderCardField(this.state.grid)}
          {this.renderHand(this.state.hand)}
          {this.renderActions()}
        </div>
      </React.Fragment>
    );
  }
}
