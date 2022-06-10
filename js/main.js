/* Start Animation */
// 1-Services Animation
let mainTitleServ = document.querySelector(".services .main-title");
let fadeServ = document.querySelector('.fade-serv')
window.addEventListener("scroll", (eo) => {
  let windowheight = window.innerHeight;
  let revealTop = mainTitleServ.getBoundingClientRect().top;
  let revealPoint = 150;

  if (revealTop < (windowheight - revealPoint)) {
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
  let windowheight = window.innerHeight;
  let revealTop = mainTitleFeat.getBoundingClientRect().top;
  let revealPoint = 150;

  if (revealTop < (windowheight - revealPoint)) {
    mainTitleFeat.classList.add('animation-title')
    imgOpacity.forEach(item => {
      item.style.transform = 'scale(1)'
    });
  }
})
// 3- About Animation
let mainTitleAbout = document.querySelector('.about .main-title')
let cards = document.querySelectorAll('.about .cards')
window.onscroll = eo => {
  let windowheight = window.innerHeight;
  let revealTop = mainTitleAbout.getBoundingClientRect().top;
  let revealPoint = 550;

  if (revealTop < (windowheight - revealPoint)) {
    mainTitleAbout.classList.add('animation-title')
    cards.forEach(item => {
      item.classList.add('fade-about')
    });
  }
}

//------------------------------------------------------------
/* Start Feautures Section */
let featuresList = document.querySelectorAll('.features ul li')
let featImgBox = document.querySelectorAll('.big-img-box')

featuresList.forEach(ele => {
  ele.addEventListener('click', (eo) => {
    // Add And Remove Active Class 
    eo.target.parentElement.querySelectorAll('.active').forEach(item => {
      item.classList.remove('active')
    })
    ele.classList.add('active')
    // Images
    featImgBox.forEach(img => {
      img.style.display = "none"
      // if (window.innerWidth > 991) {
      //   img.style.transform = "scale(0)"
      //   img.style.opacity = '0'
      //   img.style.flex = "0 0 0"
      // } else {
      // }
    })
    document.querySelectorAll(ele.dataset.work).forEach(i => {
      i.style.display = "block"
      // if (window.innerWidth > 991) {
      //   i.style.transition = ".3s linear"
      //   i.style.transform = "scale(1)"
      //   i.style.opacity = '1'
      //   i.style.flex = "0 1 25%"
      // } else {
      //   i.style.flex = '0 1 auto'
      // }
    })
  })
});

//------------------------------------------------------------