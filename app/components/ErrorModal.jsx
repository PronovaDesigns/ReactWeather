var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({

  getDefaultProps: function () {
    return {
      title: 'Error'
    };
  },

  // Here is where you can define the component's prop types.
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },

  // This is called whenever the render function of this component is updated on the DOM.
  componentDidMount: function () {
    var {title, message} = this.props;

    var modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    // The modal feature of Foundation requires a javascript function to run called Reveal whenever this modal component is rendered to the DOM.
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },

  render: function () {

    return (
      <div>
      </div>
    );
  }
});

module.exports = ErrorModal;
