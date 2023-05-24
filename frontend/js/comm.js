function checkuser($) {
    var index = layer.load();
    var url = "/ashx/LoginServer.ashx";
    var pm = {
        action: "checkuser",
        time: Math.random()
    };
    $.ajaxSettings.async = false;
    $.getJSON(url, pm,
        function (json) {
            if (json.State == "200") {
                if (json.JsonResult == "已登录") {
                    location.href = "/center/user.html";
                }
            }
            layer.close(index);
        });
}

function CommAlert(json) {
    if (json.State == "300") {
        layer.msg(json.JsonResult, {
            shade: [0.8, '#393D49'],
            shadeClose: true,
            time: 2000
        });
    }

    if (json.State == "500") {
        layer.alert(json.JsonResult, {
            title: 'notice', closeBtn: false, icon: 4, yes: function () { window.location.href = '/login.html' }
        })
    }
}

function error(msg) {
    layer.msg(msg, {
        shade: [0.8, '#393D49'],
        shadeClose: true,
        time: 2000
    });
}

function error1(msg) {
    layer.msg(msg, {
        shade: [0.8, '#393D49'],
        shadeClose: false,
        time: 2000
    });
}

function success(msg) {
    layer.msg(msg, {
        shade: [0.8, '#393D49'],
        shadeClose: true,
        time: 2000,
        skin: 'demo'
    });
}

function getUrlParam1(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = decodeURI(window.location.search.substr(1)).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return ""; //返回参数值
}

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = decodeURI(window.location.search.substr(1)).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}
