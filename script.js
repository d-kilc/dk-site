window.onscroll = function() {scrollFunction()};

const avi = document.querySelector("div#nav div#navLeft img#avi");
const nav = document.querySelector("div#nav");
const navLeft = document.querySelector("div#navLeft");
const navRight = document.querySelector("div#navRight");
const header = document.querySelector("div#navLeft h1");
const secondaryHeaders = document.querySelector("div#secondaryHeaders");
const socials = document.querySelector("div#socials");
const navLinks = document.querySelector("div#navLinks");
const bioLink = document.getElementById("bioLink")
const navList = document.querySelector("ul#navList");

const skills = document.querySelector("div#skills");
const projects = document.querySelector("div#projects");

//doesnt fucking work lol
// window.onload = (event) => {
//     console.log('page loaded');
//     window.scrollTo(0,0)
// };

function topFunction() {
    console.log('top fn');
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

function scrollFunction() {
    if (document.body.scrollTop > 100|| document.documentElement.scrollTop > 100) {
        nav.style.height = "10vh";
        nav.style.position = "fixed";
        avi.style.height = "8vh";
        avi.style.marginLeft = "15px";
        avi.style.marginRight = "15px";
        avi.style.paddingTop = "0px";
        avi.style.paddingBottom = "0px";
        navLeft.style.display = "flex";
        navLeft.style.width = "100vw";
        navLeft.style.height = "10vh";
        navLeft.style.margin = "auto";
        navRight.style.display = "none";
        header.style.marginLeft = "15px";
        secondaryHeaders.style.display = "none";
        navLinks.style.margin = "auto";
        navList.style.display = "flex";
        navList.style.margin = "auto";
        socials.style.display = "flex";
        socials.style.marginRight = "25px";

    } else {
        nav.style.height = "100vh";
        avi.style.height = "300px";
        avi.style.margin = "auto";
        avi.style.paddingTop = "10px";
        avi.style.paddingBottom = "10px";
        navLeft.style.display = "block";
        navLeft.style.width = "30vw";
        navLeft.style.height = "auto";
        navRight.style.display = "block";
        header.style.margin = "auto";
        secondaryHeaders.style.display = "block";
        navList.style.display = "block";
        socials.style.display = "block";
        socials.style.margin = "auto";

    }

}

bioLink.addEventListener('click', topFunction);