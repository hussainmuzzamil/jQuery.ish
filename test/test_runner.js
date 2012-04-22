var TestRunner = YAHOO.tool.TestRunner; // shorthand for YAHOO.tool.TestRunner


TestRunner.add(hasClass_Tests);
TestRunner.add(addClass_Tests); // test cases


function handleTestFail(data){
    YAHOO.log(data.error.message, "error", data.testCase.name +'.'+ data.testName);
}
//function handleTestPass(data){
//	 YAHOO.log(data.testCase.name + data.testName + ' pass')
//} // event handler


TestRunner.subscribe(TestRunner.TEST_FAIL_EVENT, handleTestFail);
//TestRunner.subscribe(TestRunner.TEST_PASS_EVENT, handleTestPass); // router


var myContainer = document.body.appendChild(document.createElement("div"));
var myLogReader = new YAHOO.widget.LogReader(myContainer); // Logger View


TestRunner.run(); // run