'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('../styles/App.scss');

var _Post = require('./Post');

var _Post2 = _interopRequireDefault(_Post);

var _reactRedux = require('react-redux');

var _actions = require('../actions/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
	var value = _ref.value,
	    post = _ref.post,
	    dispatch = _ref.dispatch;
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement('input', {
			type: 'number',
			onChange: function onChange(e) {
				dispatch((0, _actions.changeRange)(e.target.value));
			}
		}),
		_react2.default.createElement('button', {
			onClick: function onClick() {
				dispatch((0, _actions.fetchArticle)(value));
			},
			style: {
				width: value + 'px',
				height: value + 'px',
				borderRadius: '100%'
			},
			className: 'circle'
		}),
		_react2.default.createElement(_Post2.default, { content: post })
	);
};

var mapStateToProps = function mapStateToProps(state) {
	return {
		value: parseInt(state.value, 10),
		post: state.post
	};
};

var AppComponent = (0, _reactRedux.connect)(mapStateToProps)(App);

App.propTypes = {
	value: _propTypes2.default.number.isRequired,
	dispatch: _propTypes2.default.func.isRequired
};

exports.default = AppComponent;