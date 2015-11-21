'use strict';

module.exports = function (inputString) {
	return (/[a-fA-F0-9]{32}/).test(inputString);
};
