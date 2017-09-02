//使用require模版js文件路径模块
require.config({
    baseUrl: '/public/assets',
    paths: {
        jquery: 'jquery/jquery.min',
        cookie: 'jquery-cookie/jquery.cookie',
        template: 'artTemplate/template-web',
        bootstrap: 'bootstrap/js/bootstrap.min',
        datepicker: 'datepicker/js/bootstrap-datepicker.min',
        language: 'datepicker/locales/bootstrap-datepicker.zh-CN.min',
        validate: 'jquery-validate/jquery-validate.min',
        form: 'jquery-form/jquery.form',
        common: '../js/common',
        login: '../js/login',
        teacherList: '../js/teacherList',
        teacherAdd: '../js/teacherAdd',
        util: '../js/util',
        index: '../js/index',
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        },
        language: {
            deps:['jquery', 'datepicker']
        },
        validate: {
            deps: ['jquery']
        }
    }

});