var React = require('react');

// This is a presentational component that does not manage any state, it only renders something to the screen.
// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     )
//   }
// });

// The preferred/simplier way to render a presentational component is to use a Stateless Functional Component.
// This can only be done with presentation components that does not maintain any state and only has a render function.
var About = () => {
  return (
    <h3>About Component</h3>
  )
};


module.exports = About;
