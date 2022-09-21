$(function () {
    let $dark = $('.shadow');

    $dark.on('click', function (e) {
        e.preventDefault();

        $(this).addClass('hidden');
    })

    $('.user_btn').on('click', function (e) {
        e.preventDefault();

        if ($(this).hasClass('login')) {
            $('body').addClass('overflow');
            $('.popup_wrap').removeClass('hidden');
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


})