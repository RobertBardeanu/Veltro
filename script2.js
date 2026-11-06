const login_btn=document.querySelector("#login")
const input_user=document.querySelector("#username")
const input_password=document.querySelector("#password");
const errorMessage = document.querySelector("#error-message");
let username;
let password;
login_btn.addEventListener("click",(e)=>{
    e.preventDefault(); 
     username=input_user.value;
     password=input_password.value;
if (!username || !password || username.trim() === "" || password.trim() === "") {
errorMessage.textContent = "Please enter a username and password";}
else{
    window.location.href = "index.html";
}
})