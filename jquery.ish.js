var $ = function(id){
	var o =  new $.fn.init(id).elm
	for(key in $.fn)
		if(key != 'init' || key != 'elm'){
			o[key] = ($.fn[key])
		}
	return o
}
$.fn = {
	init : function(el) {
		if(typeof el == 'string'){
			$.fn.elm=document.querySelectorAll(el)
		} else if(el.length) {
			$.fn.elm=el
		} else {
			$.fn.elm=[el]
		}				
		return this
	},
	hasClass : function(cl){		
		for(var i = 0; i < $.fn.elm.length; i++){
			var objCl = $.fn.elm[i].className.split(' ');
			for (var ii in objCl) {
				if (objCl[ii] == cl) {
					return true
				}
			}
		}
		return false
	},
	addClass : function(cl){
		for(var i = 0; i < $.fn.elm.length; i++){		
			var oc = " " + $.fn.elm[i].className + " "
			if (!oc.indexOf(" " + cl + " ") > -1) {
				$.fn.elm[i].className = ($.fn.elm[i].className + " " + cl).replace(/^\s\s*/,'').replace(/\s\s*$/,'')
			}
		}
		return this
	},
	toggleClass : function(cl){
		for(var i = 0; i < $.fn.elm.length; i++)
			this.hasClass(cl) ? this.removeClass(cl) : this.addClass(cl)						
		return this
	},
	removeClass : function(cl){
		for(var i = 0; i < $.fn.elm.length; i++){
			var objCl = $.fn.elm[i].className.split(' ')
			for(var ii = 0; ii < objCl.length; ii++){
				if (objCl[ii] == cl) {
					delete(objCl[ii])
				}
			}
			$.fn.elm[i].className = objCl.join(' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '')
		}	
		return this
	}
}
$.fn.init.prototype = $.fn