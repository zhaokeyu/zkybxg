define(['jquery', 'template', 'cookie'], function ($, template) {
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
    // console.log(loginInfo);
    //如果有，再转成对象。因为默认会进login.html页面，这时还没有用户登录信息
    var loginInfoObj = loginInfo? JSON.parse(loginInfo): {};

    //利用模版引擎将用户信息渲染到aside.html中
    //准备模版
    var tmp = '<div class="avatar img-circle">\n' +
        '            <img src="{{tc_avatar}}">\n' +
        '        </div>\n' +
        '        <h4>{{tc_name}}</h4>';
    //调用api
    var html = template.render(tmp, loginInfoObj);
    $('#profileId').html(html);

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





