const sideNav = document.getElementsByClassName("side-navigation")[0];
const navBtn = document.getElementsByClassName("hide-on-desktop")[0];

function openNav() {
  sideNav.classList.add("active");
  console.log("This Event is Firing Off");
}

function closeNav() {
  sideNav.classList.remove("active");
}
