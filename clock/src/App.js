/* Class Component - Main Container */
import React, {Component} from 'react';
import Display from './Display';
class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          timeLeft: 0,
          hour: 0,
          min: 0,
          sec: 0,
          start: false
      };
  }

  handleSubmit = (e) => {
      e.preventDefault();
      const { hour, min, sec } = this.state;
      this.setState({
          timeLeft: hour * 3600 + min * 60 + sec,
          start: true
      })
      this.timer = setInterval(() => {
          this.setState({
              timeLeft: this.state.timeLeft - 1
          })
      }, 1000)
  }

  format = (timeLeft) => {
      let hour = Math.floor(timeLeft / 3600);
      let min = Math.floor((timeLeft - hour * 3600) / 60);
      let sec = timeLeft - min * 60 - hour * 3600;
      return [hour, min, sec];
  }

  render() {
    const {start} = this.state;
      return (
          <div>
              <div>
                  <form onSubmit={this.handleSubmit}>
                      <label>Hour:</label>
                      <input type="number" onChange={(e) => { this.setState({ hour: Number(e.target.value) }) }} />
                      <label>Miniute:</label>
                      <input type="number" onChange={(e) => this.setState({ min: Number(e.target.value) })} />
                      <label>Second:</label>
                      <input type="number" onChange={(e) => this.setState({ sec: Number(e.target.value) })} />
                      <br />
                      <input type="submit" value="Submit" />
                  </form>
              </div>
              <div>{start && <Display timeLeft={this.state.timeLeft} format={this.format} />}</div>
              {/* <div>
                  <label>{this.format(this.state.timeLeft)[0]}</label> <br />
                  <label>{this.format(this.state.timeLeft)[1]}</label> <br />
                  <label>{this.format(this.state.timeLeft)[2]}</label>
              </div> */}

          </div>
      )
  }
}

export default App;

