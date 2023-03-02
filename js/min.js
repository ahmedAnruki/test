function sohwNav() {
  document.querySelector(".bars i").classList.toggle("fa-x");
  document.querySelector(".bars i").classList.contains("fa-x")
    ? document.querySelector(".navbarNav").classList.add("active")
    : document.querySelector(".navbarNav").classList.remove("active");
}

let solidContent = [
  { imgCrs: "img-1.jpg", title: "be a Kind Heart" },
  { imgCrs: "img-2.jpg", title: "Non-profit" },
  { imgCrs: "img-3.jpg", title: "Humanity" },
];

let solidCounter = 0;

function solid() {
  document.querySelector(".hero-section").style.backgroundImage = `url(../images/slide/${solidContent[solidCounter].imgCrs})`;
  document.querySelector(".hero-section .title h1").innerHTML = solidContent[solidCounter].title;
  solidCounter == 2 ? solidCounter = 0 : solidCounter++;
  setTimeout(() => {
    solid();
  }, 5000);
}

function solidLeft() {
  solidCounter == 0 ? solidCounter : solidCounter--;
  document.querySelector(".hero-section").style.backgroundImage = `url(../images/slide/${solidContent[solidCounter].imgCrs})`;
  document.querySelector(".hero-section .title h1").innerHTML = solidContent[solidCounter].title;
}

function solidRight() {
  solidCounter == 2 ? solidCounter : solidCounter++;
  document.querySelector(".hero-section").style.backgroundImage = `url(../images/slide/${solidContent[solidCounter].imgCrs})`;
  document.querySelector(".hero-section .title h1").innerHTML = solidContent[solidCounter].title;
}

solid();


window.onscroll(() =>{

})

