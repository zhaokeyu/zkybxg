define(['jquery', 'template', 'bootstrap'], function ($, template) {
    //渲染讲师列表
    $.ajax({
        url: '/api/teacher',
        type: 'get',
        dataType: 'json',
        success: function (data) {
            // console.log(data);
            var html = template('teacherListId', data);
            $('.teacherListTbody').html(html);
            //点击查看，渲染模态框，显示模态框
            $('.preveiw').on('click', function () {
                var tcId = $(this).closest('td').attr('data-tcId');
                $.ajax({
                    url: '/api/teacher/view',
                    type: 'get',
                    data: {tc_id: tcId},
                    dataType: 'json',
                    success: function (data) {
                        console.log(data);
                        var html = template('teacherInfoTemplate', data.result);
                        $('.teacherInfoTemplateClosest').html(html);
                        //调用bootstrap方法modal()显示模态框
                        $('#teacherModal').modal();
                    }
                })
            })
            //点击启用/注销按钮，实现启用/注销功能
            $('.eod').on('click', function () {
                var tcId = $(this).closest('td').attr('data-tcId');
                var tcStatus = $(this).closest('td').attr('data-tcStatus');
                var $that = $(this);
                $.ajax({
                    url: '/api/teacher/handle',
                    type: 'post',
                    data: {tc_id: tcId, tc_status: tcStatus},
                    success: function (data) {
                        console.log(data);
                        if (data.code == 200) {
                            $that.closest('td').attr('data-tcStatus',data.result.tc_status);
                            if (data.result.tc_status == 1) {
                                $that.html('启用');
                            } else {
                                $that.html('注销');
                            }
                        }
                    }
                })
            })
        }
    })
});
