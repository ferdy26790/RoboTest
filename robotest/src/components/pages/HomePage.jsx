import React, { Component } from 'react';
import Board from '../board/Board'
import Controller from '../controlpanel/Controller'
class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <br/>
          <div className="row">
            <div style={{border:"1px solid blue"}} className="col-md-8">
              <Board />
            </div>
            <div style={{border:"1px solid red"}} className="col-md-2">
              <Controller />
            </div>
          </div>
      </div>
    );
  }
}

export default HomePage;