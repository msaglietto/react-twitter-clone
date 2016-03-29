var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var API = require('./api');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var routes = (<Route component={require('./components/App')}>
  <Route path='/' component={require('./components/Home')}></Route>
  <Route path='/users' component={require('./components/UserList')}></Route>
  <Route path='/user/:id' component={require('./components/UserProfile')}></Route>
</Route>);

ReactDOM.render(<Router routes={routes}></Router>, document.getElementById('app'));

API.startFetchingUsers();
API.startFetchingMessages();
