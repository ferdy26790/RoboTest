import React, { Component } from 'react';
import SquareColumns from './SquareColumns'
import { connect } from 'react-redux'
class Board extends Component {
  constructor(){
    super()
    this.state = {
      rows: [],
      columns: []
    }
  }
  render() {
    return (
      <div>
        <SquareColumns rows={this.props.board.rows} columns={this.props.board.columns}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    board: state.Board
  }
}

export default connect(mapStateToProps)(Board);