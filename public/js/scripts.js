/*
    Script File
*/

function removeLoader(loader) {
    loader.fadeOut(500, function () {
        loader.remove();
    });
}

$(window).on('load', function () {
    // Animate loader off screen
    setTimeout(() => {
        removeLoader($('section.container-loader'));
    }, 1000);
});

$(document).ready(function () {

    /*---Add classe toggled to container--main ---*/
    if ($(window).width() >= 992) {
        $('.container--main').addClass('toggled');
        $('span.key-sidebar').addClass('close-key');
    } else {
        $('span.key-sidebar').addClass('open-key');
    }

    /*---Close Sidebar---*/
    $(document).on('click', 'span.key-sidebar.close-key', function () {
        var self = $(this);
        var selfParent = self.parent();
        self.removeClass('close-key');
        self.addClass('open-key');
        selfParent.parent().removeClass('toggled');
    });

    if ($(window).width() < 992) {
        $(document).on('click', '.nav-menu-sidebar a', function () {
            var self = $(this);
            var selfParentSidebar = self.parents('.sidebar');
            var selfParentContainer = self.parents('.container--main');
            selfParentSidebar.find('.key-sidebar').removeClass('close-key').addClass('open-key');
            selfParentContainer.removeClass('toggled');
        });
    }

    /*---Open Sidebar---*/
    $(document).on('click', 'span.key-sidebar.open-key', function () {
        var self = $(this);
        var selfParent = self.parent();
        self.removeClass('open-key');
        self.addClass('close-key');
        selfParent.parent().addClass('toggled');
    });

    /*---Text style typewrite*/
    var TxtType = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) {
            delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 100;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    };

    window.onload = function () {
        var elements = document.getElementsByClassName('typewrite');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fa163f}";
        document.body.appendChild(css);
    };

    /*---Animate scroll to block--*/
    $(".    ").click(function (e) {
        e.preventDefault();
        var position = $($(this).attr("href")).offset().top;
        $("body, html").animate({
            scrollTop: position
        }, 1000);
    });

    /*---Back to top---*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back--to--top').removeClass('hide');
        } else {
            $('.back--to--top').addClass('hide');
        }
    });
    $('.back--to--top').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 2000);
    })
});