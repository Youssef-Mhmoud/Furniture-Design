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
// Start Feautures Section
let featuresList = document.querySelectorAll('.features ul li')
let featImgBox = document.querySelectorAll('.big-img-box')

featuresList.forEach(ele => {
  ele.addEventListener('click', (eo) => {
    // To Add And Remove Active Class 
    eo.target.parentElement.querySelectorAll('.active').forEach(item => {
      item.classList.remove('active')
    })
    ele.classList.add('active')
    // Images 
    featImgBox.forEach(img => {
      img.style.transform = "scale(0)"
      img.style.opacity = '0'
      img.style.flex = "0 0 0"
    })
    document.querySelectorAll(ele.dataset.work).forEach(i => {
      i.style.transition = "1s linear"
      i.style.transform = "scale(1)"
      i.style.opacity = '1'
      i.style.flex = "0 0 25%"

    })
  })
});