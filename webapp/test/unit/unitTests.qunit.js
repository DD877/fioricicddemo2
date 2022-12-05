/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"fiori_cicd_demo2/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
