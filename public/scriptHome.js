const menuBut1 = document.querySelector(".menubut1");
const menuBut2 = document.querySelector(".menubut2");
const menuBut3 = document.querySelector(".menubut3");
const menuBut4 = document.querySelector(".menubut4");
const midBottom = document.querySelector(".midbottom");
const menu1 = document.querySelector(".menu1");
const menu2 = document.querySelector(".menu2");
const menu3 = document.querySelector(".menu3");
const menu4 = document.querySelector(".menu4");



menuBut1.addEventListener("click", ()=>{
    menuBut1.style.backgroundColor = "#1e1e1e";
    menuBut1.style.color = "red";
    menuBut2.style.backgroundColor = "transparent";
    menuBut2.style.color = "gray";
    menuBut3.style.backgroundColor = "transparent";
    menuBut3.style.color = "gray";
    menuBut4.style.backgroundColor = "transparent";
    menuBut4.style.color = "gray";
    console.log(menu1.offsetWidth);
    midBottom.scrollTo(menu1.offsetWidth * 0, 0);
})

menuBut2.addEventListener("click", ()=>{
    menuBut2.style.backgroundColor = "#1e1e1e";
    menuBut2.style.color = "red";
    menuBut1.style.backgroundColor = "transparent";
    menuBut1.style.color = "gray";
    menuBut3.style.backgroundColor = "transparent";
    menuBut3.style.color = "gray";
    menuBut4.style.backgroundColor = "transparent";
    menuBut4.style.color = "gray";
    midBottom.scrollTo(menu1.offsetWidth * 1, 0);
})

menuBut3.addEventListener("click", ()=>{
    menuBut3.style.backgroundColor = "#1e1e1e";
    menuBut3.style.color = "red";
    menuBut1.style.backgroundColor = "transparent";
    menuBut1.style.color = "gray";
    menuBut2.style.backgroundColor = "transparent";
    menuBut2.style.color = "gray";
    menuBut4.style.backgroundColor = "transparent";
    menuBut4.style.color = "gray";
    midBottom.scrollTo(menu1.offsetWidth * 2, 0);
})

menuBut4.addEventListener("click", ()=>{
    menuBut4.style.backgroundColor = "#1e1e1e";
    menuBut4.style.color = "red";
    menuBut1.style.backgroundColor = "transparent";
    menuBut1.style.color = "gray";
    menuBut2.style.backgroundColor = "transparent";
    menuBut2.style.color = "gray";
    menuBut3.style.backgroundColor = "transparent";
    menuBut3.style.color = "gray";
    midBottom.scrollTo(menu1.offsetWidth * 3, 0);
})
