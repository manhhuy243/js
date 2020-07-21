function Validate() {
    var username = document.getElementById("email1").value;
    var password = document.getElementById("password").value;
    if (username == "abc") {
        if (password == "1") {
            //{            document.getElementById("btm_login").onclick = () => {
                window.open('https://javascript.info','_self');
                
            //            }
            return false;
        }
        else {
            return false;
        }
    }
    else {
        return false
    }
}
function Log_in(){
    
}