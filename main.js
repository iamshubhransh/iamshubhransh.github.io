
// For Dark Mode
const toggleBtn = document.querySelector('.dark-mode-toggle')
const div = document.querySelector('.div')
const nav = document.querySelector('nav')
const logo = document.querySelector('.logo')
const links = document.querySelector('.links')
const link = document.querySelector('.link')
const link1 = document.querySelector('.link1')
const link2 = document.querySelector('.link2')
const link3 = document.querySelector('.link3')
const vl = document.querySelector('.vertical-line')
const vl1 = document.querySelector('.white1')
const vl2 = document.querySelector('.white2')
const vl3 = document.querySelector('.white3')
const vl4 = document.querySelector('.white4')
const vl5 = document.querySelector('.white5')
const btn = document.querySelector('.btn')
const body = document.querySelector('body')
const line1 =document.querySelector('.line1')
const line2 =document.querySelector('.line2')
const line3 =document.querySelector('.line3')
var sun = document.querySelector('.sun-1')
toggleBtn.addEventListener('click', ()=>{
    div.classList.toggle('dark-color-body')
    nav.classList.toggle('nav-dark')
    logo.classList.toggle('nav-dark-logo')
    links.classList.toggle('nav-dark-links')
    link.classList.toggle('nav-dark-link')
    link1.classList.toggle('nav-dark-link1')
    link2.classList.toggle('nav-dark-link2')
    link3.classList.toggle('nav-dark-link3')
    vl.classList.toggle('vertical-link-dark-mode')
    vl1.classList.toggle('vertical-link-dark-mode1')
    vl2.classList.toggle('vertical-link-dark-mode2')
    vl3.classList.toggle('vertical-link-dark-mode3')
    vl4.classList.toggle('vertical-link-dark-mode4')
    vl5.classList.toggle('vertical-link-dark-mode5')
    btn.classList.toggle('dark-btn')
    toggleBtn.classList.toggle('light-mode-toggle')
    body.style.transition = "all 2s ";
    line1.classList.toggle('light-line1')
    line2.classList.toggle('light-line2')
    line3.classList.toggle('light-line3')
  sun.classList.toggle('fa-lightbulb-on')
})

// modal
// Get the modal
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal = document.querySelector('.modal')
// images
var img1 = document.getElementById("myImg1");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");

img1.onclick = function(){
  modal1.style.display = "block";

}
img2.onclick = function(){
    modal2.style.display = "block";

  }
  img3.onclick = function(){
    modal3.style.display = "block";
 
  }
  img4.onclick = function(){
    modal4.style.display = "block";

  }
// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];


// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none"; 
}
span2.onclick = function() {
  modal2.style.display = "none"; 
}
span3.onclick = function() {
  modal3.style.display = "none"; 
}
span4.onclick = function() {
  modal4.style.display = "none"; 
}



