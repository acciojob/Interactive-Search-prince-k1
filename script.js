//your JS code here. If required.
let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let div = document.querySelector(".search");

btn.addEventListener('click', () =>{
	input.classList.add('focused');
	div.classList.add('active');
})