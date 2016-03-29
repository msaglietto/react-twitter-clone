var React = require('react');

var MessageBox = require('./MessageBox');

var MessageList = React.createClass({
  render: function() {
      var list = this.props.messages.map(function(msg) {
        return (<MessageBox key={msg.cid} message={msg}></MessageBox>);
      });

      return (<ul>{list}</ul>);
  }
});

MessageList.propTypes = {
  messages: React.PropTypes.array.isRequired
};

module.exports = MessageList;
