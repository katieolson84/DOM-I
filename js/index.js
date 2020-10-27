const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


// Example: Update the img src for the logo

const header = document.querySelector("header"
);
const nav = document.querySelector("nav");
let nav1 = document.querySelector(" header nav a");
nav1.textContent = siteContent["nav"]["nav-item-1"];
let nav2 = nav1.nextElementSibling;
nav2.textContent = siteContent["nav"]["nav-item-2"];
let nav3 = nav2.nextElementSibling;
nav3.textContent = siteContent["nav"]["nav-item-3"];
let nav4 = nav3.nextElementSibling;
nav4.textContent = siteContent["nav"]["nav-item-4"];
let nav5 = nav4.nextElementSibling;
nav5.textContent = siteContent["nav"]["nav-item-5"];
let nav6 = nav5.nextElementSibling;
nav6.textContent = siteContent["nav"]["nav-item-6"];

let logo = document.querySelector("header img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let bigLogo = document.getElementById("cta-img");
bigLogo.setAttribute('src', siteContent["cta"]["img-src"]);

const title = document.querySelector(".cta-text h1");
title.textContent = siteContent["cta"]["h1"];

const button = document.querySelector(".cta-text button");
button.textContent = siteContent ["cta"]["button"];

// top content section


const features = document.querySelector(".top-content h4:nth-of-type(1)");
features.textContent = siteContent["main-content"]["features-h4"];

const featuresContent = document.querySelector(".top-content p:nth-of-type(1)");
featuresContent.textContent = siteContent["main-content"]["features-content"];

const about = document.querySelector(".top-content h4:nth-of-type(2)");
about.textContent = siteContent["main-content"]["about-h4"];

const aboutContent = document.querySelector(".top-content p:nth-of-type(2)");
aboutContent.textContent = siteContent["main-content"]["about-content"];


// const about = features.cloneNode(true);
// document.querySelector(".top-content").appendChild(about);
// about.textContent = siteContent["main-content"]["about-h4"];

// const aboutContent = featuresContent.cloneNode(true);
// document.querySelector(".top-content").appendChild(aboutContent);
// aboutContent.textContent = siteContent["main-content"]["about-content"];





