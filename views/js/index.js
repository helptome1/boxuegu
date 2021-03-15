$(function () {


    // 发起ajax请求获取后台数据
    $.ajax({
        method: 'get',
        url: 'http://127.0.0.1:3001/getAllCourse',
        success: (res) => {
            console.log(res.result);
            if (res.result.data.length == 0) return console.log('请求结果有问题');
            $('#banner_pic').attr('src', res.result.data[3].img);
            
            // 调用art-template模板
            var htmlStr = template('tpl-list', res.result);
            $('.course_info').html(htmlStr);
        }
    })




})