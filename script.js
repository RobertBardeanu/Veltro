let post_button=document.querySelector("#post_button");
let container3=document.querySelector(".container3")
post_button.addEventListener("click", function (e) {
let input=document.querySelector("#input").value;
let message=document.createElement("p")

let main=document.createElement("main")
main.id="messages";
container3.appendChild(main);


message.innerHTML=input
main.appendChild(message)

});
let dark_mode_button;
