/* Start Animation */
// Function Manage Animation
function manageAnimation(name1,num) {
  let windowheight = window.innerHeight;
  let revealTop = name1.getBoundingClientRect().top;
  let revealPoint = num;

  if (revealTop < (windowheight - revealPoint)) {
    name1.classList.add('animation-title')
  }
}
// Function Manage If Condition
function manageIf(name, number) {
  let windowheight = window.innerHeight;
  let revealTop = name.getBoundingClientRect().top;
  let revealPoint = number;

  return revealTop < (windowheight - revealPoint)
}
// 1-Services Animation
let mainTitleServ = document.querySelector(".services .main-title");
let fadeServ = document.querySelectorAll('.fade-serv')

window.addEventListener("scroll", (eo) => {
  if (manageIf(mainTitleServ, 350)) {
    mainTitleServ.classList.add('animation-title')
    fadeServ.forEach(item => {
      item.style.opacity = '1'
      item.style.top = '-40px'
    })
  }
});
// 2-Features Animation
let mainTitleFeat = document.querySelector(".features .main-title");
let imgOpacity = document.querySelectorAll('.features .box-img-feat')

window.addEventListener("scroll", (eo) => {
  if (manageIf(mainTitleFeat, 450)) {
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
  if (manageIf(mainTitleAbout, 550)) {
    mainTitleAbout.classList.add('animation-title')
    cards.forEach(item => {
      item.classList.add('fade-about')
    });
  }
}
// 4- Our Customer Animation
let mainTitleCustomer = document.querySelector('.main-title-customer')
window.addEventListener("scroll", (eo) => {
  manageAnimation(mainTitleCustomer, 150)
})
// 5- Contact Us Animation
let mainTitleContact = document.querySelector('#contact .main-title')
window.addEventListener("scroll", (eo) => {
  manageAnimation(mainTitleContact, 150)
})
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