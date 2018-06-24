var React = require('react');

// The preferred/simplier way to render a presentational component is to use a Stateless Functional Component.
// This can only be done with presentational components that do not maintain any state and only has a render function.
var About = () => {
  return (
    <div>
      <h1 className='text-center page-title'>About Me!</h1>
      <p className='text-center'>I am a Product Manager & Full Stack Developer.</p>
      <p className='text-center'>I am learning how to use React for developing Web Apps.</p>
      <h3 className='text-center'>Areas of Expertise</h3>
      <ul>
        <li>Mobile Development</li>
        <li>Web App Development</li>
        <li>Website Development</li>
        <li>UI/UX Design</li>
        <li>Digital Marketing</li>
        <li>Strategic Business Development</li>
      </ul>
  </div>
  )
};


module.exports = About;
