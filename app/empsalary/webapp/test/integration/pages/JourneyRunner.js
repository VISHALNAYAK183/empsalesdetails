sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"emp/sal/empsalary/test/integration/pages/EmployeesList",
	"emp/sal/empsalary/test/integration/pages/EmployeesObjectPage"
], function (JourneyRunner, EmployeesList, EmployeesObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('emp/sal/empsalary') + '/test/flp.html#app-preview',
        pages: {
			onTheEmployeesList: EmployeesList,
			onTheEmployeesObjectPage: EmployeesObjectPage
        },
        async: true
    });

    return runner;
});

