'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetchArticle = exports.changeRange = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _constants = require('../constants');

var changeRange = exports.changeRange = function changeRange(value) {
	return {
		type: _constants.CHANGE_RANGE,
		value: value
	};
};

var fetchArticle = exports.fetchArticle = function fetchArticle(id) {
	return function (dispatch) {
		dispatch({
			type: _constants.FETCH_ARTICLE_REQUEST
		});

		fetch('https://jsonplaceholder.typicode.com/posts').then(function (response) {
			if (response.status !== 200) {
				return;
			}
			response.json().then(function (data) {
				var _data$filter = data.filter(function (item) {
					return id === item.id;
				}),
				    _data$filter2 = _slicedToArray(_data$filter, 1),
				    _data$filter2$ = _data$filter2[0],
				    post = _data$filter2$ === undefined ? {} : _data$filter2$;

				dispatch({
					type: _constants.FETCH_ARTICLE_SUCCESS,
					post: post
				});
			});
		}).catch(function (error) {
			return dispatch({
				type: _constants.FETCH_ARTICLE_FAILURE,
				error: error.message || 'Something went wrong.'
			});
		});
	};
};