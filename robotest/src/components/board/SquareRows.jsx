import React, { Component } from 'react';
import Square from './Square'
import { connect } from 'react-redux'
class SquareRows extends Component {
  render() {
    return (
      <div style={styles}>
        {
          this.props.rows.map((row, idx) => {
            let coordinate = this.props.idx + idx.toString()
            this.props.validMove(coordinate)
            return <Square key={idx} idx={coordinate}/>
          })
        }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  validMove: (payload) => dispatch({
    type: 'VALIDMOVE',
    payload: payload
  }) 
})

const styles={
  display: 'flex',
  flexDirection: 'row'
}
export default connect(null, mapDispatchToProps)(SquareRows);