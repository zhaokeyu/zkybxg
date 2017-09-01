// 工具模块
define(['jquery'], function ($) {
    return {
        setMenu: function (path) {
            $('.navs a[href="'+path+'"]').addClass('active');
        },
        // 获取地址栏中指定键对应的值
        qs: function (key) {
            //param是location.search，格式为?name=key&age=24&sex=man
            var param = location.search.substring(1);
            var ret;
            if (param) {
                var arr1 = param.split('&');
                $.each(arr1, function (i, item) {
                   var arr2 = item.split('=');
                   if (arr2[0] == key) {
                       ret = arr2[1];
                       return false;
                   }
                });
                return ret;
            }
        }
    }
});