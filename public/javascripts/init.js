'use strict';
$(function () {
    let btn=$('#btn1');
   btn.click(function () {
       let username_input=$('input[type="text"]');
       let passwd_input=$('input[type="password"]');

       let username=username_input.val();
       let passwd=passwd_input.val();
       let division=$("div.content");

       $.ajax("/login",{
           method:'post',
           data:{username:username,password:passwd}
       }).done(function (data) {
           location.href='home';
       }).fail(function (xhr,status) {
           division.append('<p>连接失败</p>')
       })

   })

});