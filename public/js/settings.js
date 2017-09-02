define(['jquery', 'template', 'util'], function ($, template, util) {
    // 设置导航菜单选中
    util.setMenu('/main/settings');
    $.ajax({
        url: '/api/teacher/profile',
        type: 'get',
        dataType: 'json',
        success: function (data) {
            //解析数据，渲染页面
            var html = template('settingsTpl', data.result);
            $('.teacher-profile>.settings').html(html);
        }
    })
});