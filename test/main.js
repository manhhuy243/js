function Validate() {
    var username = document.getElementById("sdt").value;
    var password = document.getElementById("password").value;
    if (username == "abc") {
        if (password == "1") {
            //{            document.getElementById("btm_login").onclick = () => {
            window.location.href="https://javascript.info";
                
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
