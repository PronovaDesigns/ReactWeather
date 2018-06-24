var React = require('react');
var {Link} = require('react-router');

var Examples = () => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=New York'>New York, NY</Link>
        </li>
        <li>
          <Link to='/?location=Austin'>Austin, TX</Link>
        </li>
        <li>
          <Link to='/?location=Brownsville, TX'>Brownsville, TX</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
