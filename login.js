function UserLogin(){
    var username=document.getElementById('user').value;
    var password=document.getElementById('password').value;
    if(username =="" && password ==""){
        window.alert('username and password!');
    }
    else if(username.value=='admin' && password.value=='admin'){
        window.alert('welcome to Admin Dashboard');
        
    }
}