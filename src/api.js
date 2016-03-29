var actions = require('./actions');
var dispatcher = require('./dispatcher');
var constants = require('./constants');

var API = module.exports = {
  fetchMessages: function() {
    get('/api/messages').then(actions.gotMessages.bind(actions));
  },
  startFetchingMessages: function() {
    this.fetchMessages();
    return setInterval(this.fetchMessages, 10000);
  },
  saveMessage: function(text) {
    text = text.trim();
    if (text === '') {
      return;
    }

    post('/api/messages', {
      text: text
    }).then(actions.messageSaved.bind(actions));

  },
  fetchUsers: function() {
    get('/api/users').then(actions.gotUsers.bind(actions));
  },
  startFetchingUsers: function() {
    this.fetchUsers();
    return setInterval(this.fetchUsers, 30000);
  },
  follow: function(id) {
    post('/api/follow/' + id).then(actions.followed.bind(actions));
  },
  unfollow: function(id) {
    post('/api/unfollow/' + id).then(actions.unfollowed.bind(actions));
  }
};

function get(url) {
  return fetch(url, {
    credentials: 'same-origin'
  }).then(function(res) {
    return res.json();
  });
}

function post(url, body) {
  return fetch(url, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(body || {}),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(function(res) {
    return res.json();
  });
}

dispatcher.register(function(action) {
  switch (action.actionType) {
    case constants.MESSAGE:
      API.saveMessage(action.data);
      break;
    case constants.FOLLOW:
      API.follow(action.data);
      break;
    case constants.UNFOLLOW:
      API.unfollow(action.data);
      break;
    default:

  }
});
