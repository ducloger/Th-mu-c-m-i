var emailinput = document.querySelector("#email");
var password = document.querySelector("#password");
const button = document.getElementById('button')
button.addEventListener('click', function checkinput(){
    if (emailinput.value == ""| password.value == ""){
    alert("Do not left any field blank")}
    if (password.value.length < 6){
        alert("Password must longer than 6 character")
    }
});