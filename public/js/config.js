//使用require模版js文件路径模块
require.config({
    baseUrl: '/public/assets',
    paths: {
        jquery: 'jquery/jquery.min',
        common: '../js/common',
        login: '../js/login',
        cookie: 'jquery-cookie/jquery.cookie'
    }
});