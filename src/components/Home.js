var React = require('react');
var actions = require('../actions');

var MessageInput = require('./MessageInput');
var MessageList = require('./MessageList');
var MessageStore = require('../stores/messages');

var Home = React.createClass({
  getInitialState: function() {
    return {messages: MessageStore.timeline()};
  },
  mixins: [MessageStore.mixin],
  onChange: function() {
    this.setState(this.getInitialState());
  },
  render: function() {
    return (
      <div>
        <MessageInput onSave={this.saveMessage}/>
        <MessageList messages={this.state.messages}/>
      </div>
    )
  },
  saveMessage: function(text) {
    actions.message(text);
  }
});

module.exports = Home;
