var router = module.exports = require('express').Router();
var login = require('./login');

var db = new(require('locallydb'))('./.data');
var messages = db.collection('messages');

router.route('/api/messages')
  .all(login.required)
  .get(function(req, res) {
    res.json(messages.toArray());
  })
  .post(function(req, res) {
    var message = req.body;
    message.userId = req.user.cid;

    message.username = req.user.username;
    message.fullname = req.user.fullname;
    message.email = req.user.email;

    var id = messages.insert(message);
    res.json(messages.get(id));
  });

module.exports.routes = router;
