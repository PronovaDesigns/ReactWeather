var React = require('react');
var Nav = require('Nav');

// var Main = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <Nav />
//         <h2>Main Component</h2>
//         {this.props.children}
//       </div>
//     );
//   }
// });

// This is a good opportunity to use a Stateless Functional Component because, the app.jsx & Weather.jsx file mananges the state, while this component only presents the website pages.
var Main = (props) => {
  return (
    <div>
      <Nav />
      <h2>Main Component</h2>
      {/* We don't need to use 'this' binding because the props are passed in this Stateless Functional Component as an argument. */}
      {props.children}
    </div>
  )
}

module.exports = Main;
