/* LOADING SCREEN */

let percent = 0;
let loader = document.getElementById("loader");
let demo = document.getElementById("demo");
let percentText = document.getElementById("loading-percent");

/* Only run loader if coming directly */

if(loader){

let loading = setInterval(() => {

percent += 5;

if(percentText){
percentText.innerText = percent + "%";
}

if(percent >= 100){

clearInterval(loading);

loader.style.display = "none";
demo.style.display = "block";

/* Push page state */
history.pushState({page:"demo"}, "", "");

}

},100);

}


/* FORM SUBMIT */

let form = document.getElementById("demoForm");
let popup = document.getElementById("successPopup");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

popup.style.display = "block";

setTimeout(() => {

popup.style.display = "none";

},3000);

form.reset();

});

}


/* BACK BUTTON HANDLING */

window.onpopstate = function(){

window.location.href = "index.html";

};

/* NEWSLETTER SUBMIT */

function joinNewsletter(){

let email = document.getElementById("newsletterEmail").value;

if(email === ""){
alert("Please enter your email");
return;
}

alert(" Successfully subscribed to RiteFlow newsletter!");

document.getElementById("newsletterEmail").value="";

}

/* LOADER FOR AI TOOLS PAGE */

document.addEventListener("DOMContentLoaded", function () {

const loader = document.getElementById("loader");
const toolsPage = document.getElementById("toolsPage");
const percentText = document.getElementById("loading-percent");

if (!loader || !toolsPage) return;

let percent = 0;

const loading = setInterval(function () {

percent += 5;

if (percentText) {
percentText.innerText = percent + "%";
}

if (percent >= 100) {

clearInterval(loading);

loader.style.display = "none";
toolsPage.style.display = "block";

}

}, 80);

});

/* FILTER SYSTEM */

document.addEventListener("DOMContentLoaded", function(){

const filters = document.querySelectorAll(".filter-item");
const cards = document.querySelectorAll(".tool-card");

filters.forEach(filter => {

filter.addEventListener("click", function(){

filters.forEach(btn => btn.classList.remove("active"));
this.classList.add("active");

const filterValue = this.getAttribute("data-filter");

cards.forEach(card => {

const category = card.getAttribute("data-category");

if(filterValue === "all" || category === filterValue){
card.style.display = "block";
}
else{
card.style.display = "none";
}

});

});

});

});

document.addEventListener("DOMContentLoaded", () => {

const slider = document.getElementById("testimonialSlider");
const cards = document.querySelectorAll(".testimonial-card");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let index = 0;
const total = cards.length;

function updateSlider() {
    const cardWidth = cards[0].offsetWidth + 20;
    slider.style.transform = `translateX(-${index * cardWidth}px)`;
}

// next
nextBtn.addEventListener("click", () => {
    index = (index + 1) % total;
    updateSlider();
});

// previous
prevBtn.addEventListener("click", () => {
    index = (index - 1 + total) % total;
    updateSlider();
});

// auto move
setInterval(() => {
    index = (index + 1) % total;
    updateSlider();
}, 4000);

});