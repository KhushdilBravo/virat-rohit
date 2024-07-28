 var istatus = document.querySelector("h5")
 var addFriend = document.querySelector("#add")
var removeFriend = document.querySelector("#remove")



 add.addEventListener("click",function(){

istatus.innerHTML = "JOINED"
istatus.style.color ="green"

 })


 removeFriend.addEventListener("click",function(){

    istatus.innerHTML = "REMOVED"
istatus.style.color ="red"

 })










