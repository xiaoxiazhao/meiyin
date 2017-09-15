/**
 * Created by Administrator on 2017/8/21.
 */
var debug = true;
var ajaxUrl;
var token;

if(debug==true){
    ajaxUrl = 'http://test.wodexiangce.cn';
    token = 'b2xsYjR0NHI3bXhMLTBNZmhPODg3YXY1eG13a0B3ZWl4aW4ud2R4Yy5jbjoxNTA1NTI5MzcyNDQ1Ojc3ZmI2ZmM4MzY3OGM4OWY0NWEwNjJlYTdlZDgxNDUx';
}else {
}
// getToken();
// function getToken() {
//     $.ajax({
//         type: 'GET',
//         dataType: "json",
//         url: ajaxUrl+"/online.do",
//         // contentType: "application/json",
//         async:false,
//         data:"method=getToken&uid=3388432",
//         success:function (res) {
//             if(res.status == 'success'){
//                 token = res.token;
//             }
//         }
//     })
// }

function getDataFromService(type,data,callBack) {
    $.ajax({
        type: type,
        dataType: "json",
        url: ajaxUrl+"/online.do",
        data:data,
        contentType: "application/json",
        headers:{
            Authorization :token
        },
        success:function (res) {
            callBack(res);
        },
        error:function (err) {
            swal({
                title: "Error!",
                text: "Here's my error message!",
                type: "error",
                confirmButtonText: "Cool"
            });
        }
    });
}

var parseUrlHandler= function (url, isEncode) {
    var isEncode = isEncode || false, reg = /([^=&?]+)=([^=&?]+)/g, obj = {}, url = url;
    url.replace(reg, function () {
        var arg = arguments;
        obj[arg[1]] = isEncode ? decodeURIComponent(arg[2]) : arg[2];
    });
    return obj;
};
var HASH = parseUrlHandler(window.location.href, true);
console.log(HASH);



