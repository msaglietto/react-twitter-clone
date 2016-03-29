var React = require('react');
var UserStore = require('../stores/users');
var actions = require('../actions');
var Link = require('react-router').Link;

var UserBox = require('./UserBox');

var UserList = React.createClass({
  getInitialState: function(){
    return {
      users: UserStore.all(),
      user: UserStore.currentUser
    }
  },
  mixins: [UserStore.mixin],
  onChange: function(){
    this.setState(this.getInitialState());
  },
  render: function(){
    var items = this.state.users.filter(function(user) {
      return  this.state.user.cid !== user.cid;
    }.bind(this)).map(function(user){
      return (<UserBox key={user.cid} user={user}></UserBox>);
    });

    return (<ul>{items}</ul>);
  }
});

module.exports = UserList;
