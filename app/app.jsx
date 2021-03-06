var React = require('react');
var ReactDOM = require('react-dom');
// ES6 Destructuring Syntax -- pulls specific properties from library
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// Load foundation -- so that whenever a component needs some css
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// Custom App class
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Weather} />
      <Route path="about" component={About} />
      <Route path ="examples" component={Examples} />
    </Route>
  </Router>,
  document.getElementById('app')
);
