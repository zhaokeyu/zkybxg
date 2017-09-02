define(['jquery', 'template', 'util', 'datepicker', 'language', 'validate', 'form'], function ($, template, util) {
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

    // 提交表单公用方法，使用表单验证插件写
    function submitForm (url) {
        $('#formId').validate({
            sendForm: false,
            valid: function () {
                //提交表单
                $(this).ajaxSubmit({
                    url: url,
                    type: 'post',
                    success: function (data) {
                        console.log(data);
                        if (data.code == 200) {
                            location.href = '/teacher/list';
                        }
                    }
                });
            },
            description: {
                tc_name: {
                    required: '用户名不能为空',
                    valid: '用户名可以使用',
                },
                tc_pass: {
                    required: '密码不能为空',
                    valid: '密码正确',
                    pattern: '必须是6位数字'
                },
                tc_join_date: {
                    required: '入职日期不能为空',
                    valid: '入职日期可以使用',
                }
            }
        });
    }





    /*// 提交表单公用方法，源生写
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
    }*/
});