import React, { Component } from 'react';
import SquareRows from './SquareRows'
class SquareColumns extends Component {
  render() {
    return (
      <div>
        {
          this.props.columns.map((column, idx) => {
            return <SquareRows key={idx} rows={this.props.rows} idx={this.props.columns.length-1 - idx}/>
          })
        }
      </div>
    );
  }
}

export default SquareColumns;