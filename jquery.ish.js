var $ = function(id) {
    var o = new $.fn.init(id).elm,
        i;
    for (i in $.fn) {
        if (i != 'init' || i != 'elm') {
            o[i] = ($.fn[i]);
        }
    }
    return o;
};
$.fn = {
    init: function(el) {
        if (typeof el == 'string') {
            $.fn.elm = document.querySelectorAll(el);
        } else if (el.length) {
            $.fn.elm = el;
        } else {
            $.fn.elm = [el];
        }
        return this;
    },
    hasClass: function(cl) {
        var i;
        for (i = 0; i < this.length; i++) {
            var objCl = this[i].className.split(' '),
                ii;
            for (ii in objCl) {
                if (objCl[ii] == cl) {
                    return true;
                }
            }
        }
        return false;
    },
    addClass: function(cl) {
        var i;
        for (i = 0; i < this.length; i++) {
            var oc = " " + this[i].className + " ";
            if (oc.indexOf(" " + cl + " ") == -1) {
                this[i].className = (this[i].className + " " + cl).replace(/^\s\s*/, '').replace(/\s\s*$/, '');
            }
        }
        return this;
    },
    toggleClass: function(cl) {
        var i;
        for (i = 0; i < this.length; i++) {
            if (this.hasClass(cl)) {
                this.removeClass(cl);
            } else {
                this.addClass(cl);
            }
        }
        return this;
    },
    removeClass: function(cl) {
        var i;
        for (i = 0; i < this.length; i++) {
            var objCl = this[i].className.split(' '),
                ii;
            for (ii = 0; ii < objCl.length; ii++) {
                if (objCl[ii] == cl) {
                    delete(objCl[ii]);
                }
            }
            this[i].className = objCl.join(' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
        }
        return this;
    },
    toggle: function() {
    	var i;
        for (i = 0; i < this.length; i++) {
	       	if(window.getComputedStyle(this[i]).display == 'none'){
			this[i].style.display = 'block';
		} else {
			this[i].style.display = 'none';
		}  
        }
        return this;
    },
    hide: function() {
		var i;
        for (i = 0; i < this.length; i++) {
        	this[i].style.display = 'none'; 
        }
        return this;
    },
    show: function() {
		var i;
        for (i = 0; i < this.length; i++) {
	       	this[i].style.display = 'block'; 
        }
        return this;
    }
};
$.fn.init.prototype = $.fn;