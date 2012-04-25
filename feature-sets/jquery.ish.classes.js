$.extend({
        hasClass: function(cl) {
        var i;
        for (i = 0; i < $.fn.elm.length; i++) {
            var objCl = $.fn.elm[i].className.split(' '),
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
        for (i = 0; i < $.fn.elm.length; i++) {
            var oc = " " + $.fn.elm[i].className + " ";
            if (oc.indexOf(" " + cl + " ") == -1) {
                $.fn.elm[i].className = ($.fn.elm[i].className + " " + cl).replace(/^\s\s*/, '').replace(/\s\s*$/, '');
            }
        }
        return this;
    },
    toggleClass: function(cl) {
        var i;
        for (i = 0; i < $.fn.elm.length; i++) {
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
        for (i = 0; i < $.fn.elm.length; i++) {
            var objCl = $.fn.elm[i].className.split(' '),
                ii;
            for (ii = 0; ii < objCl.length; ii++) {
                if (objCl[ii] == cl) {
                    delete(objCl[ii]);
                }
            }
            $.fn.elm[i].className = objCl.join(' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
        }
        return this;
    }
});

