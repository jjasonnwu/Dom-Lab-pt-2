// part 1
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>SEI ROCKS!<h1>";
mainEl.classList.add("flex-ctr");

const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around")

menuLinks.forEach (function (appendTag) {
    let elLink = document.createElement("a");
    elLink.setAttribute("href", appendTag.href);
    elLink.textContent = appendTag.text;
    topMenuEl.appendChild(elLink);
    return;
})

// part 2 
const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = ("absolute");
subMenuEl.style,top = ("0");

let topMenuLinks = document.querySelectorAll("a");
var showingSubMenu = false;

topMenuEl.addEventListener("click", (evt) => {
    evt.preventDefault();
    if (evt.target.tagName !== "A") {
      return;
    }
    console.log(evt.target.textContent);

if (evt.target.classList.contains("active")) {
    evt.target.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
      return;
    }

for (let i = 0; i < topMenuLinks.length; i++) {
    topMenuLinks[i].classList.remove("active");
    }
    
evt.target.classList.add("active");
  
const aVariable = evt.target.textContent;
const menuLink = menuLinks.find((link) => {
      return link.text === aVariable; 
    });
  
    if (menuLink === undefined) {
      return;
    }
  
    if (menuLink.subLinks) {
      showingSubMenu = true;
    } else {
      showingSubMenu = false;
    }
  
const buildSubMenu = (sublinks) => {
    subMenuEl.innerHTML = "";
      for (let i = 0; i < sublinks.length; i++) {
        const anElement = document.createElement("a");
        anElement.setAttribute("href", sublinks[i].href);
        anElement.textContent = sublinks[i].text;
        subMenuEl.append(anElement);
      }
    };
  
    if (showingSubMenu) {
      buildSubMenu(menuLink.subLinks);
      subMenuEl.style.top = "100%";
    } else {
      subMenuEl.style.top = "0";
    }
  
    if (aVariable === "about") {
      mainEl.innerHTML = "<h1>about</h1>";
    }
  });
  
subMenuEl.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.tagName !== "A") {
      return;
    }
    console.log(event.target.textContent);
  
    showingSubMenu = false;
    subMenuEl.style.top = "0";
  
    for (let i = 0; i < topMenuLinks.length; i++) {
      topMenuLinks[i].classList.remove("active");
    }
  
    mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
  });
  