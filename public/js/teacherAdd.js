define(['jquery', 'template', 'util', 'datepicker', 'language'], function ($, template, util) {
    util.setMenu('/teacher/add');
    // 获取编辑讲师的id
    var tcId = util.qs('tc_id');
    if (tcId) {
        $.ajax({
            url: '/api/teacher/edit',
            type: 'get',
            data: {tc_id: tcId},
            dataType: 'json',
            success: function (data) {
                data.result.operate = '武将编辑';
                var html = template('teacherTemplateId', data.result);
                $('.teacherTemplateIdClosest').html(html);
                //调用submitForm方法，提交表单
                submitForm('/api/teacher/update');
            }
        })
    } else {
        var html = template('teacherTemplateId', {operate: '武将添加', tc_gender: 1});
        $('.teacherTemplateIdClosest').html(html);
        //调用submitForm方法，提交表单
        submitForm('/api/teacher/add');
    }

    // 提交表单公用方法
    function submitForm (url) {
        $('.tiJiao').on('click', function () {
            $.ajax({
                type: 'post',
                url: url,
                data: $('#formId').serialize(),
                dataType: 'json',
                success: function (data) {
                    if (data.code == 200) {
                        location.href = '/teacher/list';
                    }
                }
            })
        })

    }
});