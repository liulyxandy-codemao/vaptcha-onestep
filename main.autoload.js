/* vaptcha one-step install */
/* by LiuLyxAndy */

// Vaptcha Load
var v = document.createElement("script")
v.setAttribute("src","https://code.jquery.com/jquery-3.6.1.min.js")
document.getElementsByTagName("body")[0].appendChild(v)
var z = document.createElement("script")
z.setAttribute("src","https://v-cn.vaptcha.com/v3.js")
document.getElementsByTagName("body")[0].appendChild(z)

//window.VAPTCHABotCheck.status = false;
//window.VAPTCHABotCheck.data = null;
// Vaptcha UI
var i=setInterval(function(){
    if(vaptcha){clearInterval(i)}
    console.log(1)
},1000)


vaptcha({
    vid: '636e1f68cdf7d074d80a484d',
    mode: 'click',
    scene: 1,
    container: '#vaptcha',
    area: 'auto',
}).then(function (VAPTCHAObj) {
    // 将VAPTCHA验证实例保存到局部变量中
    obj = VAPTCHAObj;
    
    // 渲染验证组件
    VAPTCHAObj.render();

    // 验证成功进行后续操作
    VAPTCHAObj.listen('pass', function () {
        serverToken = VAPTCHAObj.getServerToken();
        var data = {
            server: serverToken.server,
            token: serverToken.token,
        }
        //window.VAPTCHABotCheck.status = true;
        //window.VAPTCHABotCheck.data = data;
        window.postMessage(data)
    })
})
