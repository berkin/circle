'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require('redux-logger');

var _reducers = require('./reducers/');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configureStore = function configureStore() {
	var middlewares = [_reduxThunk2.default];
	if (process.env.NODE_ENV !== 'production') {
		middlewares.push((0, _reduxLogger.createLogger)());
	}

	var store = (0, _redux.createStore)(_reducers2.default, _redux.applyMiddleware.apply(undefined, middlewares));

	return store;
};
exports.default = configureStore;