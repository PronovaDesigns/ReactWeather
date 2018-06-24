var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');


var Weather = React.createClass({

  getInitialState: function () {
    return {
      // Sets the initial state to false to enable this state variable for conditionally rendering a loading message when user submits a location.
      isLoading: false
    }
  },

  handleSearch: function (location) {
    var that = this;

    // debugger; // Sets a debugging breakpoint to inspect with React Developer Tools -- app will automatically pause here for inspection.

    // Sets isLoading state variable to true to trigger the conditional rendering of the loading message.
    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then(function (temp) {

      // "this" won't work within the then function in Javascript
      that.setState({
        location: location,
        temp: temp,
        // Sets isLoading state variable to false to release the loading message when responds.
        isLoading: false
      });
    }, function (e) {
        // When only setting the state for one state variable -- use this one line code structure.
        that.setState({
          isLoading: false,
          errorMessage: e.message
        });
        alert(errorMessage);
    });
  },

  render: function () {
    var {isLoading, temp, location, errorMessage} = this.state;

    // This nested function allows for the component's render function to conditionally render different elements.
    // Given a component's state we can decide which element to render. State is used to conditionally render.
    // As you state changes with setState -- a React app automatically re-renders.
    function renderMessage () {
      // This conditional statement checks whether isLoading is set to true.
      if (isLoading) {
        return <h3 className="text-center">Fetching weather for your sweet soul . . .</h3>;
      // This conditional statement checks whether temp and location exist/are defined.
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} />;
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage} />
        )
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;
