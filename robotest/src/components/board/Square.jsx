import React, { Component } from 'react';
import ragup from '../../asset/ragup.jpeg'
import ragdown from '../../asset/ragdown.jpeg'
import ragleft from '../../asset/ragleft.jpeg'
import ragright from '../../asset/ragright.jpeg'
import { connect } from 'react-redux'
class Square extends Component {
  constructor(){
    super()
    this.state = {
      cord: null,
      right: ragright,
      left: ragleft,
      down: ragdown,
      up: ragup
    }
  }
  componentWillMount(){
    this.setState({
      cord: this.props.idx
    })
  }
  render() {
    return (
      <div style={squareStyles}>
        {
          this.props.robo.roboCurrentPosition === this.state.cord ?
          <img style={squareRoboStyles} src={this.state[this.props.robo.roboDirection]} alt="robo" />
          :
          <p></p>
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

const squareStyles={
  border: '1px solid black',
  width: '60px',
  height: '60px'
}

const squareRoboStyles={
  width: '40px',
  height: '58px'
}
export default connect(mapStateToProps)(Square);