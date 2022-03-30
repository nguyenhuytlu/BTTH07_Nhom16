//yc1: check lỗi trực tiếp

//1: check UserID
let txtCheckUserID = document.getElementById('txtUserID')
let txtNotifiesID = document.getElementById('txtNotificationID')


txtCheckUserID.addEventListener('focusout', checkUserID)

function checkUserID(){
    if(txtCheckUserID.value.length >= 5 && txtCheckUserID.value.length <=12){
        txtNotifiesID.textContent = 'UserID hợp lệ'
        txtNotifiesID.style.color = 'green'
        txtNotifiesID.style.fontSize = '13px'
    }
    else{
        txtNotifiesID.textContent = 'UserID không hợp lệ (5 - 12 ký tự)'
        txtNotifiesID.style.color = 'red'
        txtNotifiesID.style.fontSize = '13px'
    }
}

//2: check PassWord
let txtCheckPW = document.getElementById('txtPassWord')
let txtNotifiesPW = document.getElementById('txtNotificationPW')

txtCheckPW.addEventListener('focusout', checkPW)

function checkPW(){
    if(txtCheckPW.value.length >= 7 && txtCheckPW.value.length <=12){
        txtNotifiesPW.textContent = 'Password hợp lệ'
        txtNotifiesPW.style.color = 'green'
        txtNotifiesPW.style.fontSize = '13px'
    }
    else{
        txtNotifiesPW.textContent = 'Password không hợp lệ (7 - 12 ký tự)'
        txtNotifiesPW.style.color = 'red'
        txtNotifiesPW.style.fontSize = '13px'
    }
}

//3: check Name
let inputName = /^[A-Za-z_-]{3,16}$/
let txtCheckName = document.getElementById('txtName')
let txtNotifiesName = document.getElementById('txtNotificationName')

txtCheckName.addEventListener('focusout', checkName)

function checkName(){
    if(inputName.test(txtCheckName)){
        
    }
    else{
        txtNotifiesName.textContent = 'Tên không hợp lệ'
        txtNotifiesName.style.color = 'red'
        txtNotifiesName.style.fontSize = '13px'
    }
}

//4: check Email
let txtCheckEmail = document.getElementById('txtEmail')
let txtNotifiesEmail = document.getElementById('txtNotificationEmail')

let inputEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
txtCheckEmail.addEventListener("focusout", checkEmail)

function checkEmail(){
    if (inputEmail.test(txtCheckEmail.value)){
        txtNotifiesEmail.textContent = 'Email hợp lệ'
        txtNotifiesEmail.style.color = 'green'
        txtNotifiesEmail.style.fontSize = '13px'
    }
    else{
        txtNotifiesEmail.textContent = 'Email không hợp lệ'
        txtNotifiesEmail.style.color = 'red'
        txtNotifiesEmail.style.fontSize = '13px'
    }
}

//5:Language
function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('boxLanguage')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

let checkData = document.getElementById('btnSubmit')
checkData.addEventListener('click', function(e){
    e.preventDefault()
    if(txtCheckUserID.value.length >= 5 && txtCheckUserID.value.length <=12){
        txtNotifiesID.textContent = 'UserID hợp lệ'
        txtNotifiesID.style.color = 'green'
        txtNotifiesID.style.fontSize = '13px'
    }
    else{
        txtNotifiesID.textContent = 'UserID không hợp lệ (5 - 12 ký tự)'
        txtNotifiesID.style.color = 'red'
        txtNotifiesID.style.fontSize = '13px'
    }

    if(txtCheckPW.value.length >= 7 && txtCheckPW.value.length <=12){
        txtNotifiesPW.textContent = 'Password hợp lệ'
        txtNotifiesPW.style.color = 'green'
        txtNotifiesPW.style.fontSize = '13px'
    }
    else{
        txtNotifiesPW.textContent = 'Password không hợp lệ (7 - 12 ký tự)'
        txtNotifiesPW.style.color = 'red'
        txtNotifiesPW.style.fontSize = '13px'
    }

    if (inputEmail.test(txtCheckEmail.value)){
        txtNotifiesEmail.textContent = 'Email hợp lệ'
        txtNotifiesEmail.style.color = 'green'
        txtNotifiesEmail.style.fontSize = '13px'
    }
    else{
        txtNotifiesEmail.textContent = 'Email không hợp lệ'
        txtNotifiesEmail.style.color = 'red'
        txtNotifiesEmail.style.fontSize = '13px'
    }
})