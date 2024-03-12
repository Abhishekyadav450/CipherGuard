function encryption(){
    document.location.href="Encryption_page.html";
    
}
function togglepopup(){
    document.getElementById("popup-1").classList.toggle("active")
}


function decryption(){
    document.location.href="Decryption_page.html"
}

var usr_name = sessionStorage.getItem("username")
console.log("printing username if we get")
console.log(usr_name)

var emai_name = sessionStorage.getItem("email_name")
console.log("printing e_username if we get")
console.log(emai_name)


var usr_id = document.getElementById("usr")
usr_id.innerHTML = usr_name
console.log("inserted!!")

