define(['jquery', 'template', 'bootstrap'], function ($, template) {
    $.ajax({
        url: '/api/teacher',
        type: 'get',
        dataType: 'json',
        success: function (data) {
            // console.log(data);
            var html = template('teacherListId', data);
            $('.teacherListTbody').html(html);
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
                        $('#teacherModal').modal();
                    }
                })
            })
        }
    })
});
