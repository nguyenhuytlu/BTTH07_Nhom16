//sư dụng thư viện jQuery
$(document).ready(function(){

    function checkUserID(){
        let userID = $('#txtUserID').val()
        let userIDRegex = /^[a-z0-9_-]{5,12}$/

        if(userIDRegex.test(userID)){
            return true
        }
        return false
    }

    function checkPW(){
        let userPW = $('#txtPassWord').val()
        let userPWRegex = /^[a-z0-9_-]{7,12}$/

        if(userPWRegex.test(userPW)){
            return true
        }
        return false
    }

    function checkEmail(){
        let userEmail = $('#txtEmail').val()
        let userEmailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/

        if(userEmailRegex.test(userEmail)){
            return true
        }
        return false
    }


    $('#btnSubmit').click(function(e){
        e.preventDefault();
        if(checkUserID()){
            $('#txtNotificationID').text('UserID hợp lệ')
            $('#txtNotificationID').css('color','green')
            $('#txtNotificationID').css('fontSize','13px')
        }
        else{
            $('#txtNotificationID').text('UserID không hợp lệ')
            $('#txtNotificationID').css('color','red')
            $('#txtNotificationID').css('fontSize','13px')
        }

        if(checkPW()){
            $('#txtNotificationPW').text('PassWord hợp lệ')
            $('#txtNotificationPW').css('color','green')
            $('#txtNotificationPW').css('fontSize','13px')
        }
        else{
            $('#txtNotificationPW').text('PassWord không hợp lệ')
            $('#txtNotificationPW').css('color','red')
            $('#txtNotificationPW').css('fontSize','13px')
        }

        if(checkEmail()){
            $('#txtNotificationEmail').text('Email hợp lệ')
            $('#txtNotificationEmail').css('color','green')
            $('#txtNotificationEmail').css('fontSize','13px')
        }
        else{
            $('#txtNotificationEmail').text('Email không hợp lệ')
            $('#txtNotificationEmail').css('color','red')
            $('#txtNotificationEmail').css('fontSize','13px')
        }
    })

})