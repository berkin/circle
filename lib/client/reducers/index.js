'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = require('redux');

var _constants = require('../constants/');

var value = function value() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	var action = arguments[1];

	switch (action.type) {
		case _constants.CHANGE_RANGE:
			return action.value;
		default:
			return state;
	}
};

var post = function post() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var action = arguments[1];

	switch (action.type) {
		case _constants.FETCH_ARTICLE_SUCCESS:
			return action.post;
		default:
			return state;
	}
};

exports.default = (0, _redux.combineReducers)({
	value: value,
	post: post
});