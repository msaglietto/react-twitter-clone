var React = require('react');
var utils = require('../utils');
var Link = require('react-router').Link;

var FollowButton = require('./FollowButton');

var UserBox = React.createClass({
  render: function() {
    var usr = this.props.user;
    return (
      <li className='row message'>
        <Link className='two columns' to={'/user/' + usr.cid}>
          <img src={utils.avatar(usr.email)} />
        </Link>
        <div className='ten columns'>
          <p>
            <strong>{usr.fullname}</strong>
          </p>
          <p>
            <FollowButton userId={usr.cid} />
          </p>
        </div>
      </li>
    )
  }
});

UserBox.propTypes = {
  user: React.PropTypes.object.isRequired
}

module.exports = UserBox;
