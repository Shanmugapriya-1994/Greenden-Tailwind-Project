//selecting side nav and menu icon

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuIcon")
var closenav = document.getElementById("close-nav")


menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})
closenav.addEventListener("click",function(){
    sidenav.style.right= "-50%"
})