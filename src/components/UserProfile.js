var React = require('react');
var UserStore = require('../stores/users');
var MessageStore = require('../stores/messages');
var utils = require('../utils');
var FollowButton = require('./FollowButton');

var UserProfile = module.exports = React.createClass({
  getInitialState: function() {
    var id = parseInt(this.props.params.id, 10);
    return {
      user: UserStore.get(id) || { cid: 0},
      messages: MessageStore.byUserId(id)
    }
  },
  mixins: [UserStore.mixin, MessageStore.mixin],
  onChange: function(){
    this.setState(this.getInitialState());
  },
  render: function() {
    var messages = this.state.messages.map(function(msg) {
      return (<li key={msg.cid}>{msg.text}</li>);
    });
    return (
      <div>
        <img className='two columns' src={utils.avatar(this.state.user.email)} />
        <div className='ten columns'>
          <h1> {this.state.user.fullname} </h1>
          <h3> @{this.state.user.username}</h3>
          <p> <FollowButton userId={this.state.user.cid} /> </p>
          <ul>
            {messages}
          </ul>
        </div>
      </div>
    )
  }
});
