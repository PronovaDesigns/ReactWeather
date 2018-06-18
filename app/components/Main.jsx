var React = require('react');
var Nav = require('Nav');

// This is a good opportunity to use a Stateless Functional Component because, the app.jsx & Weather.jsx file mananges the state, while this component only presents the website pages.
var Main = (props) => {
  return (
    <div>
      <Nav />
      <div className="row">
        {/* The different sizes for the foundation column details the different sizes screen grid settings. */}
        <div className="columns medium-6 large-4 small-centered">
          {/* We don't need to use 'this' binding because the props are passed in this Stateless Functional Component as an argument. */}
          {props.children}
        </div>
      </div>
    </div>
  )
}

module.exports = Main;
