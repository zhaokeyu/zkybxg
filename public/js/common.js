define(['jquery', 'cookie'], function ($) {
    // NProgress.start();
    // NProgress.done();
    //左侧导航栏折叠展开
    $('.navs ul').prev('a').on('click', function () {
        $(this).next().slideToggle();
    });
    // 实现退出功能
    $('.logoutBtn').on('click', function () {
        console.log(123);
        $.ajax({
            type: 'post',
            url: '/api/logout',
            dataType: 'json',
            success: function (data) {
//                    console.log(data);
                if(data.code == 200) {
                    //退出成功
                    location.href = '/main/login';
                }
            }
        });
    });

    //验证是否登录过，如果用户登录过cookieValue会有值
    var cookieValue = $.cookie('PHPSESSID');
    // console.log(cookieValue);
    // console.log(location.pathname);
    if (!cookieValue && location.pathname != '/main/login') {
        location.href = '/main/login';
    }

    //获取用户登录信息
    var loginInfo = $.cookie('loginInfo');
    console.log(loginInfo);
    //转成对象
    var loginInfoObj = JSON.parse(loginInfo);
    //渲染到aside.html中
    $('.profile .img-circle img').attr('src', loginInfoObj.tc_avatar);
    $('.profile h4').html(loginInfoObj.tc_name);


});



/* NProgress.start();
 NProgress.done();
//左侧导航栏折叠展开
$('.navs ul').prev('a').on('click', function () {
    $(this).next().slideToggle();
});
// 实现退出功能
$('.logoutBtn').on('click', function () {
    console.log(123);
    $.ajax({
        type: 'post',
        url: '/api/logout',
        dataType: 'json',
        success: function (data) {
//                    console.log(data);
            if(data.code == 200) {
                //退出成功
                location.href = '/main/login';
            }
        }
    });
});*/





