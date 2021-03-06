var React = require('react');

// Use the props argument in Stateless Functional Components only when the component utilizes props functionality. Otherwise we do not have to pass an argument.
// We can use ES6 destructuring within the Stateless Functional Component's argument to set the component variables for the different props.
var WeatherMessage = ({location, temp}) => {
  // var {location, temp} = props;
  return (
    <div>
      <h3 className="text-center">The temperature is {temp} degrees in {location}!</h3>
    </div>
  )
};

module.exports = WeatherMessage;
