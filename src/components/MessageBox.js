var React = require('react');
var utils = require('../utils');
var Link = require('react-router').Link;
var moment = require('moment');

var MessageBox = React.createClass({
  render: function() {
    var msg = this.props.message;
    return (
      <li className='row message'>
        <Link className='two columns' to={'/user/' + msg.userId}>
          <img src={utils.avatar(msg.email)} />
        </Link>
        <div className='ten columns'>
          <p>
            <strong>{msg.fullname}</strong>
            <span className='timestamp'>
              @{msg.username} {moment(msg.$created).fromNow()}
            </span>
          </p>
          <p>{msg.text}</p>
        </div>
      </li>
    )
  }
});

MessageBox.propTypes = {
  message: React.PropTypes.object.isRequired
}

module.exports = MessageBox;
