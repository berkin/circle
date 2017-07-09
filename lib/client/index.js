'use strict';

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _reactHotLoader = require('react-hot-loader');

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _configureStore = require('./configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

var _config = require('../shared/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootEl = document.querySelector(_config.APP_CONTAINER_SELECTOR);
var store = (0, _configureStore2.default)();

var wrapApp = function wrapApp(AppComponent) {
	return _react2.default.createElement(
		_reactHotLoader.AppContainer,
		null,
		_react2.default.createElement(
			_reactRedux.Provider,
			{ store: store },
			_react2.default.createElement(AppComponent, null)
		)
	);
};

(0, _reactDom.render)(wrapApp(_App2.default), rootEl);

if (module.hot) {
	module.hot.accept('./components/App', function () {
		// eslint-disable-next-line global-require
		var NextApp = require('./components/App').default;
		(0, _reactDom.render)(wrapApp(NextApp), rootEl);
	});
}