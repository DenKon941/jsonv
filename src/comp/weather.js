import React from "react";

class Weather extends React.Component {
  render(){
    return (
      <div>
    { this.props.city &&
      <div>
         <p>Местоположение: {this.props.city}, {this.props.country}</p>
         <p>Температура: {this.props.temp}</p>
         <p>Восход: {this.props.sunrise}</p>
         <p>Закат: {this.props.sunset}</p>
         <p>Давление: {this.props.pressure}</p>
      </div>
    }

      </div>
    )
  }
}
export default Weather;
