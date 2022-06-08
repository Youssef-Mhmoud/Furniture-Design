// Start Animation 
// 1-Services Animation
let mainTitleServ = document.querySelector(".services .main-title");
let fadeServ = document.querySelector('.fade-serv')
window.addEventListener("scroll", (eo) => {
  if (window.scrollY >= 530) {
    mainTitleServ.classList.add('animation-title')
    fadeServ.style.top = "0"
    fadeServ.style.opacity = "1"
  }
  console.log(window.scrollY);
});
// 2-Features Animation
let mainTitleFeat = document.querySelector(".features .main-title");
window.addEventListener("scroll", (eo) => {
  if (window.scrollY >= 900) {
    mainTitleFeat.classList.add('animation-title')
  }
})
//------------------------------------------------------------