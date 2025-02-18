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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let links = document.querySelectorAll('a');
links[0].textContent = siteContent.nav["nav-item-1"];
links[1].textContent = siteContent.nav["nav-item-2"];
links[2].textContent = siteContent.nav["nav-item-3"];
links[3].textContent = siteContent.nav["nav-item-4"];
links[4].textContent = siteContent.nav["nav-item-5"];
links[5].textContent = siteContent.nav["nav-item-6"];

// appendChild and prepend -------------------------

let nav = document.querySelector('nav');      // capture the element to append

// append new 
let newAnchor = document.createElement('a');  // create
newAnchor.textContent = 'Blog';               // add content etc
newAnchor.setAttribute('href', '#')
newAnchor.style.color = 'red';
nav.appendChild(newAnchor);                   // append

// prepend new
let newAnchor2 = document.createElement('a');  // create
newAnchor2.textContent = 'Home';               // add content etc
newAnchor2.setAttribute('href', '#')
nav.prepend(newAnchor2);                       // append

// --------------------------------------------------



// links colour to green
for (let i=0; i<links.length; i++) {
  links[i].style.color = 'green';
}

// big circle header image
let cirlceImg = document.querySelector('#cta-img');
cirlceImg.src = siteContent.cta["img-src"];  // changed to variable to use again for stretch





// DOM IS AWESOME
document.querySelector('h1').textContent = siteContent.cta.h1.split(' ').join('<br>');




//button
document.querySelector('button').textContent = siteContent.cta.button;

// Array of class .main-content and h4
let mainH4 = document.querySelectorAll('.main-content h4');
mainH4[0].textContent = siteContent["main-content"]["features-h4"];
mainH4[1].textContent = siteContent["main-content"]["about-h4"];
mainH4[2].textContent = siteContent["main-content"]["services-h4"];
mainH4[3].textContent = siteContent["main-content"]["product-h4"];
mainH4[4].textContent = siteContent["main-content"]["vision-h4"];

// array of class .main-content and p
let mainP = document.querySelectorAll('.main-content p');
mainP[0].textContent = siteContent["main-content"]["features-content"];
mainP[1].textContent = siteContent["main-content"]["about-content"];
mainP[2].textContent = siteContent["main-content"]["services-content"];
mainP[3].textContent = siteContent["main-content"]["product-content"];
mainP[4].textContent = siteContent["main-content"]["vision-content"];

// middle image (banner)
let banner = document.querySelector('#middle-img');
banner.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//contact
document.querySelector('.contact h4').textContent = siteContent.contact["contact-h4"];
let contactP = document.querySelectorAll('.contact p')
contactP[0].textContent = siteContent.contact.address;
contactP[1].textContent = siteContent.contact.phone;
contactP[2].textContent = siteContent.contact.email;

// footer
document.querySelector('footer p').textContent = siteContent.footer.copyright

// stretch
cirlceImg.style.paddingRight = '100px';
banner.style.width = '500px';

let allH4 = document.querySelectorAll('h4');
allH4.forEach(h => h.style.textAlign = 'center');