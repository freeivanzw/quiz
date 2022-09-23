$(function () {
    let $dark = $('.shadow');

    $dark.on('click', function (e) {
        e.preventDefault();
        $(this).addClass('hidden');
    })

    function showPopup(popup) {
        $('body').addClass('overflow');
        $('.popup_wrap').removeClass('hidden');
        $(popup).addClass('active');
    }

    function hiddenPopup(popup) {
        $('body').removeClass('overflow');
        $('.popup_wrap').addClass('hidden');
        $(popup).removeClass('active')
    }

    $('.close_popup').on('click', function (e) {
        e.preventDefault();

        hiddenPopup($(this.closest('.login_popup')))
    })

    $(document).on('click', function (e) {
        if($(e.target).hasClass('popup_wrap')) {
            $('.popup_wrap').addClass('hidden');
            $('.popup').removeClass('active');
            $('body').removeClass('overflow');
        }
    })

    $('.user_btn').on('click', function (e) {
        e.preventDefault();

        if ($(this).hasClass('login')) {
            showPopup('.login_popup')
        } else {
            if ($(this).is('.user_btn-active')){
                $('.header_menu.menu_opened').removeClass('menu_opened');
                $(this).removeClass('user_btn-active');
            } else {
                $(this).addClass('user_btn-active');
                $('.header_menu').addClass('menu_opened');
            }
        }
    })

    $(document).on('click', function (e) {
        if($(e.target).closest('.header_menu.menu_opened').length == 0 && !$(e.target).closest('.user_btn').is('.user_btn-active')) {
            $('.header_menu.menu_opened').removeClass('menu_opened');

            $('.user_btn').removeClass('user_btn-active')
        }
    })

    function copyToClipboard(element) {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(element).text()).select();
        document.execCommand("copy");
        $temp.remove();
    }

    $('.copy_quiz').on('click', function (e) {
        var btnCopy = $(this);
        var textCopy = $(this).prev()
        e.preventDefault();

        btnCopy.addClass('active');
        setTimeout(function () {
            btnCopy.removeClass('active');
        }, 500)
        copyToClipboard(textCopy);
    })

    $('.quiz_list-more').on('click', function (e) {
        console.log($(this).parent('li'))
        $(this).closest('li').find('.quiz_list-control').toggleClass('active');
    })

    $('.change_btn').on('click', function (e) {
        e.preventDefault();

        $(this).parent().addClass('active');
    })

    $('.close_change').on('click', function (e) {
        e.preventDefault();

        $(this).closest('.change_setting').prev('.setting_info').removeClass('active');
    })

    if($(window).width() >= 768) {
        $('#start').on('click', function (e) {
            e.preventDefault();
            $('.start_page').addClass('anim');

            // setTimeout(function () {
            //     document.location = $('#start').attr('href')
            // }, 1500)
        })
    }




})