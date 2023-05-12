// controls anchor tag scrolling

const navigationHeight = document.querySelector(".nav-container").offsetHeight;

document.documentElement.style.setProperty("--scroll-padding", navigationHeight + "px");

console.log (document.documentElement);
