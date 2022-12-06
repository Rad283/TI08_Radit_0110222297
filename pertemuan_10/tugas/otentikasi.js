function login(){
let username=document.getElementById('username').value
let password=document.getElementById('password').value

if(username=="radit"||password==12345){
    window.location.href="berhasil.html";
    alert("login berhasil")
}else{
    alert("Login gagal")
}
}