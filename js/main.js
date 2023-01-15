/* Start Animation */
// Function Manage If Condition
function manageIf(name, number) {
  let windowheight = window.innerHeight;
  let revealTop = name.getBoundingClientRect().top;
  let revealPoint = number;

  return revealTop < windowheight - revealPoint;
}
// Function Manage Animation
function manageAnimation(name1, num) {
  if (manageIf(name1, num)) {
    name1.classList.add("animation-title");
  }
}
// 1-Services Animation
let mainTitleServ = document.querySelector(".services .main-title");
let fadeServ = document.querySelectorAll(".fade-serv");
// 2-Features Animation
let mainTitleFeat = document.querySelector(".features .main-title");
let imgOpacity = document.querySelectorAll(".features .box-img-feat");
// 3- About Animation
let mainTitleAbout = document.querySelector(".about .main-title");
let cards = document.querySelectorAll(".about .cards");
// 4- Our Customer Animation
let mainTitleCustomer = document.querySelector(".main-title-customer");
// 5- Contact Us Animation
let mainTitleContact = document.querySelector("#contact .main-title");

/////////////////////////////////////
// const ladningSectionEl = document.querySelector(".landing");
// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];

//     if (ent.isIntersecting === false) {
//       mainTitleServ.classList.add("animation-title");
//       fadeServ.forEach((item) => {
//         item.style.opacity = "1";
//         item.style.top = "-40px";
//       });
//     }
//   },
//   {
//     root: null,
//     threshold: 0,
//     rootMargin: "-100px",
//   }
// );
// obs.observe(ladningSectionEl);
////////////////////////////////////
window.addEventListener("scroll", (eo) => {
  // 1-Services Animation
  if (manageIf(mainTitleServ, 350)) {
    mainTitleServ.classList.add("animation-title");
    fadeServ.forEach((item) => {
      item.style.opacity = "1";
      item.style.top = "-40px";
    });
  }
  // 2-Features Animation
  if (manageIf(mainTitleFeat, 450)) {
    mainTitleFeat.classList.add("animation-title");
    imgOpacity.forEach((item) => {
      item.style.transform = "scale(1)";
    });
  }
  // 3- About Animation
  if (manageIf(mainTitleAbout, 500)) {
    mainTitleAbout.classList.add("animation-title");
    cards.forEach((item) => {
      item.classList.add("fade-about");
    });
  }
  // 4- Our Customer Animation
  manageAnimation(mainTitleCustomer, 450);
  // 5- Contact Us Animation
  manageAnimation(mainTitleContact, 450);
});
//------------------------------------------------------------
/* Start Feautures Section */
let featuresList = document.querySelectorAll(".features ul li");
let featImgBox = document.querySelectorAll(".big-img-box");

featuresList.forEach((ele) => {
  ele.addEventListener("click", (eo) => {
    // Add And Remove Active Class
    eo.target.parentElement.querySelectorAll(".active").forEach((item) => {
      item.classList.remove("active");
    });
    ele.classList.add("active");
    // Images
    featImgBox.forEach((img) => {
      img.style.display = "none";
      // if (window.innerWidth > 991) {
      //   img.style.transform = "scale(0)"
      //   img.style.opacity = '0'
      //   img.style.flex = "0 0 0"
      // } else {
      // }
    });
    document.querySelectorAll(ele.dataset.work).forEach((i) => {
      i.style.display = "block";
      // if (window.innerWidth > 991) {
      //   i.style.transition = ".3s linear"
      //   i.style.transform = "scale(1)"
      //   i.style.opacity = '1'
      //   i.style.flex = "0 1 25%"
      // } else {
      //   i.style.flex = '0 1 auto'
      // }
    });
  });
});
//------------------------------------------------------------
