Website = function () {

    this.options = undefined;

    var base = this;

    var pendingLogin = false;
    var pendingSynchronization = false;

   /* var minHeight = 700;
    var initResizeEvent = function () {
        window.onresize = function () {
            initPage();
            setSlideSize();
        };
    };*/
	
	 var initMenu = function () {
        var update = function () {
            if ($(document).scrollTop() > 0) {
                $('header').css({
                    'background-color': 'rgba(58,77,100,0.95)',
                    'border-bottom': '0px solid rgba(255,255,255,0)'
                });
            } else {
                $('header').css({
                    'background-color': 'rgba(0,135,180,0)',
                    'border-bottom': '1px solid rgba(255,255,255,0.35)'
                });
            }
        };
        $(document).scroll(function () {
            update();
        });
        update();
    };


    var initVideo = function () {
        if (typeof base.youtubeUrl != "undefined") {
            $('.button-play-intro').click(function () {
                $('.video-container').append(
                    '<iframe src="https://www.youtube.com/embed/' + base.youtubeUrl + '?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1" width="100%" height="100%" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true"></iframe>'
                ).removeClass('hidden');
                $('.button-stop-spot').removeClass('hidden');
                $('body').css('overflow', 'hidden');
                dataLayer.push({event: "desktop.video.play"});
            });

            $('.button-stop-spot').click(function (event) {
                $('.video-container').addClass('hidden').find('iframe').remove();
                $('.button-stop-spot').addClass('hidden');
                $('body').css('overflow', '');
                dataLayer.push({event: "desktop.video.close"});
            });
        }
    };

    var init = function (options) {
        base.youtubeUrl = options.youtubeUrl;
		initMenu();
        initVideo();
    };

    return {
        'init': init
    }
}();