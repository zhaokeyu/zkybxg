//用户登录模块，该模块又依赖了jquery.js和cookie.js两个文件
define(['jquery', 'cookie'], function ($) {
    $('.btn-block').on('click', function () {
        $.ajax({
            type: 'post',
            url: '/api/login',
            data: $('.col-xs-offset-1').serialize(),
            dataType: 'json',
            success: function (data) {
                // console.log(data);
                //把返回的用户数据存储在cookie中带到index.html页面，设置cookie只能使用字符串
                $.cookie('loginInfo', JSON.stringify(data.result), {path: '/'});
                if(data.code == 200) {
                    //登录成功
                    location.href = '/main/index';
                } else {
                    alert('用户名或密码错误');
                }
            }
        });
        return false;
    });
});