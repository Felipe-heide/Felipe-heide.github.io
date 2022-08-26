
window.onload(lol())
function lol(){
console.log(localStorage.getItem("variable"))
var result=localStorage.getItem("variable");
console.log(result)
document.open()
document.write(result)
document.close()

}