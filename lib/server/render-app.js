'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _config = require('../shared/config');

var _util = require('../shared/util');

var renderApp = function renderApp(title) {
	return '<!doctype html>\n<html>\n\t<head>\n\t\t<meta charset="UTF-8">\n\t\t<title>' + title + '</title>\n\t\t<meta name="viewport" content="width=device-width, initial-scale=1">\n\t\t<link rel="stylesheet" href="//localhost:' + _config.WDS_PORT + '/dist/css/style.css">\n\t</head>\n\t<body>\n\t\t<div class="' + _config.APP_CONTAINER_CLASS + '"></div>\n\t\t<script src="' + (_util.isProd ? _config.STATIC_PATH : '//localhost:' + _config.WDS_PORT + '/dist') + '/js/bundle.js"></script>\n\t</body>\n</html>\n';
};

exports.default = renderApp;