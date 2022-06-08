// Start Services Animation
let mainTitle = document.querySelector(".main-title");
let fadeServ = document.querySelector('.fade-serv')
window.addEventListener("scroll", (eo) => {
  if (window.scrollY >= 550) {
    mainTitle.classList.add('animation-title')
    fadeServ.style.top = "0"
    fadeServ.style.opacity = "1"
  }
  // console.log(window.scrollY);
});
//------------------------------------------------------------