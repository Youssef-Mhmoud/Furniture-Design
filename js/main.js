// Start Animation 
// 1-Services Animation
let mainTitleServ = document.querySelector(".services .main-title");
let fadeServ = document.querySelector('.fade-serv')
window.addEventListener("scroll", (eo) => {
  if (window.scrollY >= 510) {
    mainTitleServ.classList.add('animation-title')
    fadeServ.style.top = "0"
    fadeServ.style.opacity = "1"
  }
  // console.log(window.scrollY);
});
// 2-Features Animation
let mainTitleFeat = document.querySelector(".features .main-title");
let imgOpacity = document.querySelectorAll('.features .box-img-feat')
window.addEventListener("scroll", (eo) => {
  if (window.scrollY >= 900) {
    mainTitleFeat.classList.add('animation-title')
    imgOpacity.forEach(item => {
      item.style.transform = 'scale(1)'
    });
  }
})
// 3- About Animation
let mainTitleAbout = document.querySelector('.about .main-title')
window.onscroll = eo => {
  if (window.scrollY >= 1400) {
    mainTitleAbout.classList.add('animation-title')
  }
}
//------------------------------------------------------------