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
  handleSave = () => {
    let jsonLog = JSON.stringify(this.props.robo.roboLog)
    fetch('https://test.interaktiv.sg/robot-test/', 
    {
      body: jsonLog,
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'test-robot-interaktiv',
        'email': 'ferdy26790@gmail.com'
      },
      method: 'POST', 
      mode: 'cors', 
    })
      .then(response => {
        console.log(response)
        alert('saved')
      })
      .catch(err => {
        console.log(err)
        alert('something wrong while save')
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
                <div>
                  <button
                    onClick={() => this.props.moveRobo()}>
                    Move
                  </button>
                </div>
                <br/>
                <div>
                  <button
                    onClick={() => this.handleSave()}>
                    Save
                  </button>
                </div>
                <br/>
                <div>
                  <button
                    onClick={() => this.props.newPlace()}>
                    Place
                  </button>
                </div>
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
const mapStateToProps = (state) => {
  return {
    robo: state.Robo
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
  }),
  newPlace: () => dispatch({
    type: 'NEWPLACE'
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(Controller);