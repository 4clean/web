let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

// navbar
let parentNavbar = document.getElementById('navigation-bar');
let banner = document.getElementById('home');

window.addEventListener('scroll', () => {
  if ( window.scrollY > banner.offsetHeight - 15) {
    parentNavbar.style.boxShadow = "0 .5rem 1rem rgba(0,0,0,.1)";
    parentNavbar.style.backgroundColor = "white";
  } else {
    parentNavbar.style.boxShadow = 'none';
    parentNavbar.style.backgroundColor = "rgba(0,0,0,0)";
  }
})

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

// loader
function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 500);
}

window.onload = fadeOut();

// contact
let contactForm = document.getElementById("form-contact");
let loaderContact = document.getElementById("contact-spinner");
const alert = document.querySelectorAll(".alert");
const closeButton = document.querySelectorAll('.close');

function autoRemoveClass(element, time, className) {
  setTimeout(() => {
    element.classList.remove(className);
  }, time)
};

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  loaderContact.style.display = "flex";

  const url = e.target.action;
  const formData = new FormData(contactForm);

  fetch(url, {
    method: "POST",
    body: formData,
    mode: "no-cors",
  }) .then(() => {
    alert[0].classList.add("alert-fade-in");
    loaderContact.style.display = "none";
    autoRemoveClass(alert[0], 2000, "alert-fade-in");
  })  .catch((e) => {
    alert[1].classList.add("alert-fade-in");
    autoRemoveClass(alert[1], 2000, "alert-fade-in");
  })
})

closeButton.forEach((e) => {
  e.addEventListener('click', () => {
    alert.forEach((e) => {
      e.classList.remove("alert-fade-in"); 
    })
  })
})
