var hasClass_Tests = new YAHOO.tool.TestCase({

    name: "hasClass",
    
    setUp : function () {
		
		this.div = document.createElement("div");
		this.divId = 'myDiv';
		this.divClass = 'my-div';
		this.div.setAttribute('id', this.divId);
		this.div.setAttribute('class', this.divClass);
		document.body.appendChild(this.div);
    },

    tearDown : function () {
		document.body.removeChild(this.div);
    },

    testHasClassTrue: function () {
        YAHOO.util.Assert.isTrue( $('#'+this.divId).hasClass('my-div') );
    },
    testHasClassMultiTrue: function () {
		this.div.setAttribute('class', 'my-div funtimes')
        YAHOO.util.Assert.isTrue( $('#'+this.divId).hasClass('funtimes') );
    }
});