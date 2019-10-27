/* global Promise */
sap.ui.define([
    "projectone/TestApp/localService/mockserver"
], function (mockserver) {
    "use strict";

    mockserver.init();

    sap.ui.require(["sap/ui/core/ComponentSupport"]);
});
