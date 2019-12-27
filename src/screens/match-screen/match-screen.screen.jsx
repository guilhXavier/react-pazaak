import React from 'react';
import { Table } from '../../components';
import './style.css';

export class MatchScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      match: {},
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className='match-screen__container'>
          <div className='side'>
            <Table />
          </div>
          <div className='side'>
            <Table />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
