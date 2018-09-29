import React from 'react';

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    setInterval(() => this.setState({ time: new Date() }), 1000);
  }


  render(){
    let month =this.state.time.getMonth();
    let date = this.state.time.getDate();
    let year = this.state.time.getFullYear();

    let hour = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();


    return (
      <div id="clock-widget">
        <h1 id="clock">Clock</h1>
        <h3 id="time-header">Time: </h3>
         <p>{hour} {minutes} {seconds}</p>
        <h3>Date: </h3>
        <p>Fri {month} {date} {year}</p>
      </div>
    );
  }
}

export default Clock;
