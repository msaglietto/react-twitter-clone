var constants = require('../constants');
var UserStore = require('./users');

var MessageStore = module.exports = require('./store').extend({
  init: function() {
    this.bind(constants.GOT_MESSAGES, this.set);
    this.bind(constants.MESSAGE_SAVED, this.add);
  },
  timeline: function() {
    var ids = [UserStore.currentUser.cid].concat(UserStore.currentUser.following);
    return this._data.filter(function(msg) {
      return ids.indexOf(msg.userId) !== -1;
    });
  },
  byUserId: function(id) {
    return this._data.filter(function(msg) {
      return msg.userId === id;
    });
  }
});
