$(document).ready(function(){
    $("#btn-register").click(function(){
        
        let username = $("#user").val().trim();
        let password = $("#pwd").val().trim();

        console.log(username);
        if( username != "" && password != "" ){
            $.ajax({
                url:'https://localhost:44328/api/Usuario',
                type:'post',
                data:JSON.stringify({username:username,password:password}),
                contentType:"application/json; charset=utf-8",
                success:function(response){
                    var msg = "";
                    if(response == 1){
                        msg = "Register incorrecto";
                    }else{
                        msg = "Registrado correctamente";
                        window.location = "index.html";
                        alert(msg);
                    }
                    
                }
            });
        }
    });
});