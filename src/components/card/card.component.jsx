import React from 'react';

export class Card extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className='card__container'>
          <div className='card__value'>{this.props.value}</div>
        </div>
      </React.Fragment>
    );
  }
}
