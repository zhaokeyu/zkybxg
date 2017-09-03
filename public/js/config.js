//使用require模版js文件路径模块
require.config({
    baseUrl: '/public/assets',
    paths: {
        jquery: 'jquery/jquery.min',
        cookie: 'jquery-cookie/jquery.cookie',
        template: 'artTemplate/template-web',
        bootstrap: 'bootstrap/js/bootstrap.min',
        datepicker: 'bootstrap-datepicker/js/bootstrap-datepicker.min',
        language: 'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        validate: 'jquery-validate/jquery-validate.min',
        form: 'jquery-form/jquery.form',
        region: 'jquery-region/jquery.region',
        ckeditor: 'ckeditor/ckeditor',
        common: '../js/common',
        login: '../js/login',
        teacherList: '../js/teacherList',
        teacherAdd: '../js/teacherAdd',
        util: '../js/util',
        index: '../js/index',
        settings: '../js/settings',
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
        },
        ckeditor: {
            exports: 'CKEDITOR'
        }
    }

});