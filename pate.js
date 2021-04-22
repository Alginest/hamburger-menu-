
// selectors
const img = document.querySelector('.img');
const nav = document.querySelector('.nav');
console.log(nav);


//functions
function toggleNav (e) {
   if(e.target === img) {
       nav.classList.toggle('nav-show');
       img.classList.toggle('imgtwo');
   }
}
 
//listeners
img.addEventListener('click', toggleNav);