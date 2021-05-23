$(document).ready(function(){
    $("#btn-login").click(function(){
        let username = $("#email").val().trim();
        let password = $("#pwd").val().trim();

        console.log(username);
        if( username != "" && password != "" ){
            $.ajax({
                url:'https://localhost:44328/api/Login',
                type:'post',
                data:JSON.stringify({username:username,password:password}),
                contentType:"application/json; charset=utf-8",
                success:function(response){
                    var msg = "";
                    if(response == 1){
                        window.location = "welcome.html";
                    }else{
                        msg = "Login incorrecto";
                        alert(msg);
                    }
                    
                }
            });
        }
    });
});