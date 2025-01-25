var settingmenu = document.querySelector(".setting-menu");
var DarkBtn = document.getElementById("dark-btn");
function settingMenuToggle(){

    settingmenu.classList.toggle("setting-menu-height");

}
DarkBtn.onclick = function(){

    DarkBtn.classList.toggle("dark-on");
    document.body.classList.toggle("dark-theme");

    if(
        localStorage.getItem("theme") == "light"){
            localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");

    }
    
}

if(localStorage.getItem("theme") == "light"){
    DarkBtn.classList.remove("dark-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){
    DarkBtn.classList.add("dark-on");
    document.body.classList.add("dark-theme");

}
else{
    localStorage.setItem("theme","light");
}
