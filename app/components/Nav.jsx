var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return (
    <div>
      <h2>Nav Component</h2>
      <IndexLink to="/" activeClass="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
      <Link to="/about" activeClass="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
      <Link to="/examples" activeClass="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
    </div>
  )
}

module.exports = Nav;
