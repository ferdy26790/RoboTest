import React, { Component } from 'react';
import { connect } from 'react-redux'
class GridController extends Component {
  constructor(){
    super()
    this.state = {
      rows: 10,
      columns: 5,
      validStart: false,
      isPlaced: false
      
    }
  }
  checkState = () => {
    
  }
  render() {
    if (this.state.rows > 0 && !this.state.validStart) {
      this.setState({
        validStart: true
      })
    } else if ( this.state.rows === 0 && this.state.validStart ) {
      this.setState({
        validStart: false
      })
    }
    let msgValid =  ''
    if ( !this.state.rows ) {
      msgValid = 'please enter a unit x unit valid grid'
    }
    return (
      <div>
        <h4>Enter Grid</h4>
          <div>
            <p> Rows: {this.state.rows} 
              <button
                onClick={() => {
                  if(this.state.rows + 1 >= 11) {
                    alert('has reached maximum value')
                  } else {
                    this.setState({ rows: this.state.rows + 1 })
                  }
                }}
              >
                +
              </button>
              <button
                onClick={() => {
                  if(this.state.rows - 1 < 0) {
                    alert('has reached minimum value')
                  } else {
                    this.setState({ rows: this.state.rows - 1 })
                  }
                }}
              >
                -
              </button>
            </p>
          </div>
          <div>
            <p> Columns: {this.state.columns} 
              <button
                onClick={() => {
                  if(this.state.columns + 1 >= 11) {
                    alert('has reached maximum value')
                  } else {
                    this.setState({ columns: this.state.columns + 1 })
                  }
                }}
              >
                +
              </button>
              <button
                onClick={() => {
                  if(this.state.columns - 1 < 0) {
                    alert('has reached minimum value')
                  } else {
                    this.setState({ columns: this.state.columns - 1 })
                  }
                }}
              >
                -
              </button>
            </p>
          </div>
        <div>
          {
            this.state.validStart ? 
            <button
              onClick={() => {
                this.props.generateBoard({
                  rows: this.state.rows,
                  columns: this.state.columns
                })
                this.props.handleReady()
              }}>Generate</button>
            :
            <p style={{ color: 'red' }}> {msgValid} </p>
          }
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  generateBoard: (payload) => dispatch({
    type: 'GENERATE_BOARD',
    payload: payload
  })
  
})

export default connect(null, mapDispatchToProps)(GridController);