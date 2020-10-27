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
    "address" : "123 Way 456 Street\n Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


// Example: Update the img src for the logo


// nav
let nav1 = document.querySelector(" header nav a");
nav1.textContent = siteContent["nav"]["nav-item-1"];
nav1.style.color = "green";

let nav2 = nav1.nextElementSibling;
nav2.textContent = siteContent["nav"]["nav-item-2"];
nav2.style.color = "green";

let nav3 = nav2.nextElementSibling;
nav3.textContent = siteContent["nav"]["nav-item-3"];
nav3.style.color = "green";

let nav4 = nav3.nextElementSibling;
nav4.textContent = siteContent["nav"]["nav-item-4"];
nav4.style.color = "green";

let nav5 = nav4.nextElementSibling;
nav5.textContent = siteContent["nav"]["nav-item-5"];
nav5.style.color = "green";

let nav6 = nav5.nextElementSibling;
nav6.textContent = siteContent["nav"]["nav-item-6"];
nav6.style.color = "green";

// new link after
const nav7= document.createElement("a");
nav7.textContent = "FAQ";
nav7.href = "#";
document.querySelector("nav").appendChild(nav7);{[]}
nav7.style.color = "green";

// new link before
const nav8= document.createElement("a");
nav8.textContent = "Help";
nav8.href = "#";
document.querySelector("nav").prepend(nav8);
nav8.style.color = "green";

// logo
let logo = document.querySelector("header img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// big logo
let bigLogo = document.getElementById("cta-img");
bigLogo.setAttribute('src', siteContent["cta"]["img-src"]);

// title
const title = document.querySelector(".cta-text h1");
title.textContent = siteContent["cta"]["h1"];

// button
const button = document.querySelector(".cta-text button");
button.textContent = siteContent["cta"]["button"];


// top content section

// features
document.getElementsByTagName('h4')[0].textContent = siteContent["main-content"]["features-h4"]

document.getElementsByTagName('p')[0].textContent = siteContent["main-content"]["features-content"]

// objects
document.getElementsByTagName('h4')[1].textContent = siteContent["main-content"]["about-h4"]

document.getElementsByTagName('p')[1].textContent = siteContent["main-content"]["about-content"]

// middle image banner

let banner = document.getElementById("middle-img");
banner.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// bottom section

// services
document.getElementsByTagName('h4')[2].textContent = siteContent["main-content"]["services-h4"]

document.getElementsByTagName('p')[2].textContent = siteContent["main-content"]["services-content"]
// product
document.getElementsByTagName('h4')[3].textContent = siteContent["main-content"]["product-h4"]

document.getElementsByTagName('p')[3].textContent = siteContent["main-content"]["product-content"]
// vision
document.getElementsByTagName('h4')[4].textContent = siteContent["main-content"]["vision-h4"]

document.getElementsByTagName('p')[4].textContent = siteContent["main-content"]["vision-content"]

// contact section
let contact = document.querySelector(".contact h4");
contact.textContent = siteContent["contact"]["contact-h4"];

// address
let address = contact.nextElementSibling;
address.innerText = siteContent["contact"]["address"];

// phone
let phone = address.nextElementSibling;
phone.textContent = siteContent["contact"]["phone"];

// email
let email = phone.nextElementSibling;
email.textContent = siteContent["contact"]["email"];

// footer
let footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];




