'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetchArticle = undefined;

var _nodeUuid = require('node-uuid');

var _nodeUuid2 = _interopRequireDefault(_nodeUuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var url = 'https://jsonplaceholder.typicode.com/posts';

var fetchArticle = exports.fetchArticle = function fetchArticle(id) {
	return fetch(url).then(function (response) {
		console.log(response);
	});
};