import React from 'react';
import './style.css';

export class Card extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className='card__container positive'>
          <div className='card__value'>{this.props.value}</div>
        </div>
      </React.Fragment>
    );
  }
}
