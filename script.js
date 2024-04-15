
var typed=new typed(".text",{
  String:["i","am","abinaya"];
  typespeed:100,
  loop:true,
  Backspeed:10
})

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
