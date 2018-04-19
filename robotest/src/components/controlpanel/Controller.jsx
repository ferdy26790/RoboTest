import React, { Component } from 'react';
import GridController from './GridController'
import { connect } from 'react-redux'
class Controller extends Component {
  constructor(){
    super()
    this.state = {
      initPlace: false,
      ready: false
    }
  }
  handleReady = () => {
    this.setState({
      ready: true
    })
  }
  render() {
    return (
      <div>
        {
          !this.state.ready ?
            <GridController handleReady={this.handleReady}/>
          :
            this.state.initPlace ?
              <div>
                <div >
                  <button 
                    onClick={ () => this.props.directionRobo('up') }
                  >
                    Up
                  </button> 
                </div>
                <br/>
                <div>
                  <button 
                    onClick={ () => this.props.directionRobo('down') }
                  >
                    Down
                  </button>
                </div>  
                <br/>
                <div>
                  <button 
                    onClick={ () => this.props.directionRobo('left') }
                  >
                    Left
                  </button>
                </div> 
                <br/>
                <div>
                  <button 
                    onClick={ () => this.props.directionRobo('right') }
                  >
                    Right
                  </button>
                </div> 
                <br/>
                <button
                  onClick={() => this.props.moveRobo()}>
                  Move
                </button>
              </div>
            :
              <div>
                <button
                  onClick={
                    () => {
                      this.props.initialPlace()
                      this.setState({
                        initPlace: true
                      })
                    }
                  }>
                  place
                </button>
              </div>
        }
        
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  initialPlace: () => dispatch({
    type: 'PLACE'
  }),
  directionRobo: (payload) => dispatch({
    type: 'DIRECTION',
    payload: payload
  }) ,
  moveRobo: () => dispatch({
    type: 'MOVE'
  })
})

export default connect(null, mapDispatchToProps)(Controller);