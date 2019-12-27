import React from 'react';
import { Card } from '../index';
import './style.css';

export class Hand extends React.Component {
  renderPlayerHand = hand => {
    return hand.map((elem, key) => {
      return <Card key={key} value={elem.value} />;
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className='hand__container'>
          {this.renderPlayerHand(this.props.playerHand)}
        </div>
      </React.Fragment>
    );
  }
}
