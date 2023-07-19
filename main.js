const menuBtn = document.querySelector(".menu-btn");
const menuMobile = document.querySelector(".menu-mobile");

menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("menu--open");
});

const swiper = new Swiper(".swiper", {
  loop: true,

  navigation: {
    nextEl: ".swiper-button-right",
    prevEl: ".swiper-button-left",
  },
  breakpoints: {
    0:{
        slidesPerView: 1,   
    },
    768:{
        slidesPerView: 2,
        spaceBetween: 20,
    }
  },
});

let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 37.2319309021307, lng: -8.628281052945479 },
    zoom: 13,
    styles: [
        {
            " featureType ": "адміністративний" ,
            " elementType ": "усі" ,
            " стайлери ": [
                {
                    " насиченість ": "-100" 
                }
            ]
        } ,
        {
            " featureType ": "administrative.province" ,
            " elementType ": "усі" ,
            " стайлери ": [
                {
                    " видимість ": "вимкнено" 
                }
            ]
        } ,
        {
            " featureType ": "ландшафт" ,
            " elementType ": "усі" ,
            " стайлери ": [
                {
                    " насиченість ": - 100 
                } ,
                {
                    " легкість ": 65 
                } ,
                {
                    " видимість ": "увімкнено" 
                }
            ]
        } ,
        {
            " featureType ": "poi" ,
            " elementType ": "усі" ,
            " стайлери ": [
                {
                    " насиченість ": - 100 
                } ,
                {
                    " легкість ": "50" 
                } ,
                {
                    " видимість ": "спрощена" 
                }
            ]
        } ,
        {
            " featureType ": "дорога" ,
            " elementType ": "усі" ,
            " стайлери ": [
                {
                    " насиченість ": "-100" 
                }
            ]
        } ,
        {
            " featureType ": "road.highway" ,
            " elementType ": "усі" ,
            " стайлери ": [
                {
                    " видимість ": "спрощена" 
                }
            ]
        } ,
        {
            " featureType ": "road.arterial" ,
            " elementType ": "усі" ,
            " стайлери ": [
                {
                    " легкість ": "30" 
                }
            ]
        } ,
        {
            " featureType ": "road.local" ,
            " elementType ": "усі" ,
            " стайлери ": [
                {
                    " легкість ": "40" 
                }
            ]
        } ,
        {
            " featureType ": "transit" ,
            " elementType ": "усі" ,
            " стайлери ": [
                {
                    " насиченість ": - 100 
                } ,
                {
                    " видимість ": "спрощена" 
                }
            ]
        } ,
        {
            " featureType ": "вода" ,
            " elementType ": "geometry" ,
            " стайлери ": [
                {
                    " відтінок ": "#ffff00" 
                } ,
                {
                    " легкість ": - 25 
                } ,
                {
                    " насиченість ": - 97 
                }
            ]
        } ,
        {
            " featureType ": "вода" ,
            " elementType ": "мітки" ,
            " стайлери ": [
                {
                    " легкість ": - 25 
                } ,
                {
                    " насиченість ": - 100 
                }
            ]
        } 
    ]
  });
}

initMap();
