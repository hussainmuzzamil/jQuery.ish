var addClass_Tests = new YAHOO.tool.TestCase({

    name: "addClass",
    
    setUp : function () {
		this.div = document.createElement("div");
		this.divId = 'myDiv';
		this.div.setAttribute('id', this.divId);
		document.body.appendChild(this.div);
    },

    tearDown : function () {
		document.body.removeChild(this.div);
    },

    testAddClassSingle: function () {
		$('#'+this.divId).addClass('my-div');
        YAHOO.util.Assert.isTrue( $('#'+this.divId).hasClass('my-div') );
    },
    
	testAddClassDouble: function () {
		$('#'+this.divId).addClass('my-div');
		$('#'+this.divId).addClass('my-div');
        YAHOO.util.Assert.areEqual( "my-div", $('#'+this.divId)[0].getAttribute('class'), "One class expected" );
    }
});