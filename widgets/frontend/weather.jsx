import React from 'react';

class Weather extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // data:
    };
    this.setState = this.setState.bind(this);
  }

  APICall(e){
    var request = new XMLHttpRequest();
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${e.coords.latitude}&lon=${e.coords.longitude}&appid=18401c3ad135874308ca4aab09ba1abe`;
    request.open('GET', url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
         const resp = JSON.parse(request.responseText);
         console.log(resp);
         this.setState({data: resp});

      } else {
        // We reached our target server, but it returned an error
      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
    };

    request.send();
  }

  // componentDidMount() {
  //   navigator.geolocation.getCurrentPosition((e) =>
  //     this.setState({
  //       latitude: e.coords.latitude,
  //       longitude: e.coords.longitude
  //     }));
  // }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((e) =>
        this.APICall(e)
      );
  }

  render(){
    // console.log(this.state.latitude, this.state.longitude);
    console.log(this.state.data);
    return(
      <div>
        {this.state.data}
      </div>
    );
  }
}

export default Weather;

// api.openweathermap.org/data/2.5/weather?lat={this.state.latitude}&lon={this.state.longitude}&appid=18401c3ad135874308ca4aab09ba1abe
// api.openweathermap.org/data/2.5/weather?lat=37.798944399999996&lon=-122.401365&appid=18401c3ad135874308ca4aab09ba1abe
// navigator.geolocation.getCurrentPosition((e)=>console.log(e.coords.latitude))
// navigator.geolocation.getCurrentPosition((e)=>console.log(e.coords.longitude))

//
// http://api.openweathermap.org/data/2.5/weather?lat=37.798944399999996&lon=-122.401365&appid=18401c3ad135874308ca4aab09ba1abe
