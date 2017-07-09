'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Post = function Post(props) {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'h1',
			null,
			props.content.title
		),
		_react2.default.createElement(
			'p',
			null,
			props.content.body
		)
	);
};

exports.default = Post;