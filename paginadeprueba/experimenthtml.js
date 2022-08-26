
function fedcd(){
var code=document.getElementById("user_code").value;
localStorage.setItem("variable", code)}
setInterval("fedcd()", 1)
   

function saveuserscode(){
    var code=document.getElementById("user_code").value;
    localStorage.setItem("thecode", code)
}

function loaduserswork(){
  
    var code=localStorage.getItem("thecode")
    document.getElementById("user_code").value=code;
}
