


let open = document.querySelector('.submit-one');

open.onclick = function(){
    window.open("file:///F:/COurses/JS%20problems/thankpage/index.html")
}

// // Change Color Button
//  let colorschange = document.querySelectorAll(".button-test .numbers li");

//  colorschange.forEach(li => {

//     console.log(li);
//     li.addEventListener("click", (e) => {

//         document.documentElement.style.setProperty('--main-color', e.target.dataset.color )

//     })
//  })


let elements = document.getElementsByClassName('listener');
let i;

for (i = 0; i < elements.length; ++i) {
 elements[i].addEventListener('click', changeColor)
}

function changeColor() {
    this.style.backgroundColor = this.getAttribute('data-color');
    this.style.color = "white";
};



const btn = document.querySelector('.submit-one');

btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = 'white';
  btn.style.color = '#ff9800';

});



// function submitButtonStyle(_this) {
//     _this.style.backgroundColor = "white";
//     _this.style.color = "orange"
//   }const btn = document.getElementById('btn');

// btn.addEventListener('click', function onClick(event) {
//   const backgroundColor = btn.style.backgroundColor;

//   if (backgroundColor === 'salmon') {
//     btn.style.backgroundColor = 'green';

//     // 👇️ optionally change text color
//     // btn.style.color = 'white';
//   } else {
//     btn.style.backgroundColor = 'salmon';

//     // 👇️ optionally change text color
//     // btn.style.color = 'blue';
//   }
// });
