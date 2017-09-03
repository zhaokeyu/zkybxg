define(['jquery', 'template', 'util', 'ckeditor', 'datepicker', 'language', 'region', 'validate', 'form'], function ($, template, util, ckeditor) {
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

            //省市县三级联动
            $('#pcd').region({
                url: '/public/assets/jquery-region/region.json'
            });
            //添加附文本插件
            CKEDITOR.replace('editor', {
                toolbarGroups : [
                    { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
                    { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
                    { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
                    { name: 'others', groups: [ 'others' ] }
                ]
            });
            //处理表单验证、提交
            $('#settingsForm').validate({
                sendForm: false,
                valid: function () {
                    // 验证通过，通过form插件提交
                    //同步富文本信息到textarea
                    for (var instance in CKEDITOR.instances) {
                        CKEDITOR.instances[instance].updateElement();
                    }
                    //获取tc_hometown
                    var p = $('#p option:selected').text();
                    var c = $('#c option:selected').text();
                    var d = $('#d option:selected').text();
                    var tcHomeTown = p + '|' + c + '|' +d;
                    //提交表单代码
                    $(this).ajaxSubmit({
                        url: '/api/teacher/modify',
                        type: 'post',
                        dataType: 'json',
                        data: {tc_hometown: tcHomeTown},
                        success: function (data) {
                            if (data.code == 200) {
                                location.reload();
                            }
                        }
                    })
                },
            });
        }
    });
});